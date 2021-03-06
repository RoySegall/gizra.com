---
title: "Integrating Javascript into Elm: Alternatives to Ports"
tags:
  - Elm
permalink: "/content/elm-port-alternatives/"
layout: post
image: "/assets/images/posts/elm-port-alternatives/thumb.jpg"
description: "How can you integrate some Javascript into Elm when ports won't quite do?"
author: rgrempel
---

Once you start writing apps (and packages) in [Elm](http://elm-lang.org/), it's
tempting to avoid the rough-and-tumble world of Javascript as much as possible.
Yet when implementing features for paying clients, it doesn't always make sense
to take things that already have a Javascript implementation and re-implement
them in pure Elm. In fact, sometimes it isn't even possible!

Now, Elm has a very fine mechanism for integrating bits of Javascript when
necessary -- [ports](https://guide.elm-lang.org/interop/javascript.html)!
Yet ports aren't always the right answer, and there are several alternatives
which can be useful in certain situations.

For the purposes of this post, I'm going to assume that you're familiar with
the many cases in which ports work well, and focus instead on a few cases where
you might want to try something else:

- When you want synchronous answers.
- When you need some context when you get the answer.
- When you want to manage parts of the DOM using Javascript.

<!-- more -->

## Getting Immediate Answers

One characteristic of ports in Elm is that they are inherently asynchronous.
There are "outgoing" ports, which send messages from Elm to Javascript.  There
are "incoming" ports, which send messages from Javascript to Elm. Suppose your
Elm code wants to ask a question that Javascript code can answer. You can send
a message on an outgoing port, and the Javascript code which is listening there
can send the answer on an incoming port. However, the answer will arrive
asynchronously. It's not just a function call on the Elm side, where you could
immediately use the answer in the current computation. Instead, the answer will
arrive sometime in the future, through a message passed to your `update`
function.

Now, there are important reasons why ports work this way. Basically, it means
that you don't need to worry about whether your Javascript code is "pure" and
free of side-effects. Instead, the ports mechanism treats all Javascript as if
it were impure or effectful, and forces all communication through the `update`
mechanism.

Yet it is certainly possible to write Javascript that is pure and free of
side-effects -- and sometimes it's necessary to have Elm treat it that way. In
those cases, your only alternative is to write a "kernel module" (what we used
to call a "native module"). This isn't actually that hard, but there is a bit
of a taboo against explaining how to do it. I suppose the attitude is that if
you can't figure it out on your own, you probably won't avoid shooting yourself
in the foot with it. So, I'll say no more, except that the source code for
Elm's core libraries is very illuminating.

## Associating Questions and Answers

Even in cases where the things you want to do in Javascript are necessarily
asynchronous, Elm's port mechanism is strangely unhelpful when you need to
associate questions with answers. Consider the
[example](https://guide.elm-lang.org/interop/javascript.html) given in the Elm
docs, for integrating a Javascript spell-checking mechanism. It imagines two
ports -- one for sending strings from Elm to Javascript, and one for Javascript
to send suggestions back to Elm.

```elm
    -- port for sending strings out to JavaScript
    port check : String -> Cmd msg

    -- port for listening for suggestions from JavaScript
    port suggestions : (List String -> msg) -> Sub msg
```

Notice that there is nothing in the response which provides any context. It's
just a list of suggestions, with no reference to the question you asked. So, if
it's possible to have more than one `check` in-flight at a time (this is
asynchronous, after all), then there's nothing here to tell you which answer
goes with which question.

### Manually

Now, in some cases this can be easily fixed. For instance, you could imagine a
helpful change in the API quoted above -- one could include the input along
with the response:

```elm
    port suggestions : ((String, List String) -> msg) -> Sub msg
```

I've used this kind of approach, and it can work, but it's often more awkward
than this simple example. Often, you need to retain more context than just a
simple string (for example, a position in a document). You may need to encode
and decode the context to a JSON value, since it won't necessarily be limited
to the types that ports can handle without help.

It definitely seems awkward by comparison to how tasks work in Elm. With tasks,
you can keep a bunch of state **implicitly**, without having to explicitly
supply the context to the task, and have the task supply the context back.
If checking suggestions were a task, you could do something like this:

```elm
    let
        context =
            ...
    in
        checkSuggestions wordToCheck
            |> Task.attempt (HandleSuggestions context)
```

Eventually, your `update` function is going to be called with a
`HandleSuggestions` message that has two parameters: the context, and the
result of attempting the task.  But, unlike with ports, the implementation of
the task doesn't have to know about the context -- it doesn't need to accept
the context as a parameter and pass it back with the suggestions. It can just
provide the suggestions and let Elm worry about remembering the context.

The reason that ports don't already work this way is a little subtle.
Fundamentally, the problem is said to be that it would
[work too well](https://groups.google.com/forum/#!topic/elm-dev/kNKilHjUYqo),
thus leading to greater use of Javascript within Elm than is considered desirable.

### With `Porter`

However, there is an interesting package (which I haven't tried yet) that looks
as though it would allow you to use ports with some of the elegance of tasks.
[peterszerzo/elm-porter](http://package.elm-lang.org/packages/peterszerzo/elm-porter/latest).
After some setup, this package allows you to specify handlers for port responses
on a per-request basis. So, the above code would translate (with the appropriate setup)
into something roughly like:

```elm
    let
        context =
            ...
    in
        Porter.send (HandleSuggestions context) wordToCheck
            |> Cmd.map PortMsg
```

The Javascript code does receive an ID which it needs to include in the
response, but that's it -- the rest of the book-keeping is handled by the
`Porter` module. It remembers the context you provide with the request, and
supplies it back to you when the response arrives.

So, that looks like a promising approach, which I'm planning to try on the next
suitable occasion. However, it still doesn't have all the elegance of tasks.
For one thing, there is some setup that I haven't shown you (the usual
integration of `PortMsg` with the Elm architecture, and some configuration).
Plus, what you eventually get is a `Cmd` rather than a `Task`, so your ability
to deal with intermediate results is limited. For instance, you can't do neat
stuff like chaining several tasks together before feeding things back into your
`update` function.

```elm
    let
        context =
            ...
    in
        checkSuggestions wordToCheck
            |> Task.andThen doAnotherTaskThatDependsOnTheResult
            |> Task.attempt (HandleSuggestions context)
```

But, I recently came across another interesting alternative that fits some
niches very nicely -- service-workers.

### With Service Workers

If you're not familiar with
[service workers](https://developers.google.com/web/fundamentals/primers/service-workers/),
they are essentially a mechanism for running Javascript code in a special
context that can act "behind the scenes" of your web app -- amongst other
things, intercepting network requests and serving them from a cache, if
necessary.

The complexity of setting up a service worker is such that you wouldn't want to
do it just for the sake of something you could do with ports.  Plus, service
workers require a relatively recent version of Chrome or Firefox (though Safari
support is said to be coming). However, I was recently working on a project
that uses a service-worker anyway, and realized that it provided a very nice
way of doing Javascript interop with Elm.

Here's how it can work.

- Your service worker can listen for the `fetch` event, which represents an HTTP
  request your app is making. Normally, you'd check the URL, and then possibly
  answer the request from the cache, or let the browser handle the request in
  the usual way.

- However, you can determine what response to provide however you like. So, you
  can check for a specially-defined URL that represents a specific question,
  take a look at the JSON the app has provided, and construct a response
  in whatever manner is appropriate.

In other words, you can treat the special URL as if it were a kind of function call,
and the JSON body as if it were the parameters provided to the function. Thus, from the
Elm app's point of view, you:

- construct an HTTP request to a special URL;
- provide some JSON which represents the question you are asking; and
- decode the answer that you get.

But no network request is actually made. Instead, the request is intercepted by
your Javascript service-worker code, which can construct a response as it
wishes.

Why might this be an attractive option? Well, HTTP requests are pretty nice in
Elm.  You can encode the JSON to provide, decode the JSON that comes back, and
you get a task that can be chained and can carry along implicit context. You
even have a well-defined way of handling errors. It's a pleasant,
well-understood mechanism.  So, it's nice to be able to re-use this familiar
mechanism to invoke arbitrary Javascript code inside the service-worker.

Now, one difficulty is that the service-worker does not have direct access to
the DOM.  A service-worker can access the DOM indirectly via `postMessage`, so
that may be a feasible approach (I haven't tried it). Otherwise, doing
Javascript interop via a service worker would be limited to operations that
don't need the DOM.

## Managing Foreign DOM

In fact, none of the techniques I've discussed so far handle the case where you have
some Javascript code that wants to "manage" parts of the DOM. Consider how
Javascript libraries like [TinyMCE](https://www.tinymce.com/) or
[DropzoneJS](http://www.dropzonejs.com/) work.

- You put a special `div` in your HTML with a particular ID and/or class.

- You call a function that initializes your `div` and sets up some
  listeners for events emitted by it.

- The library writes some content inside the `div`, the user interacts
  with it, and events are emitted.

So, how can you integrate this into an Elm app?

### Special `div`

The first thing you'll need to consider is how you write out the special `div`.
The Javascript library is going to "manage" the content of that `div`, writing
and re-writing nodes within it. But Elm's virtual DOM doesn't expect that -- it
expects to be the only thing that can change the DOM underneath Elm's root
node. This has a couple of implications.

- Elm's virtual DOM is going to feel free to destroy and recreate the special
  `div` when it (or an ancestor) moves relative to other nodes. But you won't
  want that -- you'll want the special `div` to remain intact and be moved,
  rather than destroyed and recreated. Otherwise, the content written by the
  Javascript library will be lost.

- Elm has some optimizations in its virtual DOM which depend on a match between
  the virtual DOM and the real DOM. If there are things in the real DOM that the
  virtual DOM didn't put there, these optimizations can produce strange bugs when
  updating the DOM.

The solution is to make the special `div` a `keyed` node. Using keys to
construct your nodes gives the virtual DOM a kind of index so that it can track
nodes that should be considered equivalent, even if they move around. So, if
your special `div` moves, it will actually be moved by the virtual DOM, not
destroyed and recreated. And, the keyed nodes also side-step the optimizations
which can otherwise cause trouble when there are things in the real DOM that
the virtual DOM didn't put there.

(To be completely safe, you'll need to use `keyed` nodes for all the ancestors
of the special `div`, since destroying and recreating any of those ancestors
would destroy and recreate the special `div` itself).

### Initialization

Having created the special `div`, how can you go about initializing it?

The actual act of initialization is easily enough done via ports. You can
simply set up a port which accepts a DOM id, finds the node with that ID, and
runs the Javascript needed to initalize the node. The hard part is knowing
**when** to do this.

One minor difficulty is that Elm's virtual DOM operates on a bit of a delay.
Instead of writing each change to the DOM as each update takes place, it uses
`requestAnimationFrame` to throttle the DOM changes, only making them as often
as the screen will refresh. So, your Javascript code will need to wait a bit
for the special `div` to appear.

By itself, this is easily handled. If you know that the virtual DOM is about to
write out your special `div` for the first time, your Javascript code can
itself use `requestAnimationFrame` to wait for a screen refresh. This turns out
(at least in the current implementaton) to reliably trigger after the virtual
DOM has done its work.

The harder part is knowing that the virtual DOM is about to write out your
special `div` for the first time. In one way, it is your `view` function which
controls when this happens -- after all, the special `div` must be contained in
your `view` function. However, it is fundametal to the Elm architecture that
your `view` function depends on states, not transitions. It merely takes your
`Model` and produces some `Html`.  There is nothing within the `view` function
that lets you know whether this is the first time your special `div` is going
to be written.

Even if your `view` function knew when the special `div` would first be written,
there isn't anything you can do from your `view` function to send a message to a
port. That can only be done from your `update` function. But, it awkward to ask
your `update` function to handle this. Consider the questions it must answer:

- Given the current model, will the special `div` already have been drawn?

- If not, will it be drawn given the new model that I will return?

In effect, your `update` function needs to answer some questions about what
your `view` function is about to do. Now, you can imagine doing this.
Two approaches are possible:

- You can identify every state transition (i.e. every message) that will make your
  `view` function draw your special `div` for the first time.

- You can write a function `willDrawMySpecialDiv` which, given your model,
  determines whether your `view` function will draw the special `div`. Then,
  you can apply that function to the current model, to see whether it will already have
  been drawn, and apply it to the new model you're returning, to see whether it
  is about to be drawn.

Yet both of these approaches have difficulties. Identifying all the state
transitions that will write your special `div` for the first time can work in
simple cases, but it is error prone -- it's easy to miss some of them.

Using a `willDrawMySpecialDiv` function has other problems. You will need to
keep your actual `view` function in sync with `willDrawMySpecialDiv`.  Worse,
in a modular app, the dispatch of your `update` function typicaly depends on
the `Msg`, but the dispatch of your `view` function typcially depends on
something in the `Model`, such as a `Page` or the like. So, reliably
determining `willDrawMySpecialDiv` in a modular app requires another round of
function dispatch from the top-level of the app down. It's not a concern that
can be handled wholly within a single module. To put it another way, the answer
you get to `willDrawMySpecialDiv` may change even if the `update` function in
your particular module is never invoked.

Now, despite these difficulties, particular cases can be made to work -- you just
have to think through the particular features of the way your app is organized that
allow you to know when your special `div` will be written for the first time.
Sometimes, it's entirely straightforward. But, having done this a few times, I
wondered whether there might be a more general, less awkward solution.

The idea which occurred to me was this. What if, in our `view` function, we
wrote out a `<script>` tag, right next to our special div? Browsers **execute**
script tags once they've been written. Now, normally this would be a terrible
idea, an awful hack. After all, the `view` function is supposed to be free of
side-effects, and (sometimes) executing a script sure seems like a side-effect.
But, consider how well this fits our needs:

- If our `view` function writes the `script` tag next to the special div, it
  will necessarily be written only when the special div is written, and not
  otherwise.

- So, the script will run only when the special div has been written.

- And, it won't run again until the nodes are destroyed and re-created (which
  we ensure only happens when we intend, using `keyed` nodes).

Isn't that lovely? It turns out to work quite well -- it looks something like this:

```elm
    script : String -> Html any
    script code =
        node "script"
            []
            [ text code ]

    view : Model -> Html Msg
    view model =
        ...
        [ div
            [ id "dropzone"
            , on "dropzonecomplete" (Json.Decode.map DropZoneComplete decodeDropZoneFile)
            ]
            []
                |> keyed "dropzone"

        -- This runs the function from our `app.js` at the precise moment this gets
        -- written to the DOM. Isn't that convenient?
        , script "bindDropZone()"
            |> keyed "script"
        ]
        ...
```

As noted above, the guts of the initialization happens in a Javascript function
defined externally.  This keeps the `<script>` node itself pretty simple, but
it could be more complex if necessary.

So, this turns out to be a pretty convenient way to handle the initialization of DOM
nodes by Javascript libraries that want to manage some DOM. But, initialization isn't
our only need -- what about the events which those libraries generate?

### Handling Events

When you initialize your special `div`, you'll want to set up some listeners
for events that it generates. For instance, for DropzoneJS, you'll want to know
when a file has been uploaded. Or, for TinyMCE, you'll want to know when the
content has been edited.

One approach would be to set up Javascript listeners, which in turn send
messages to an incoming Elm port. This works, but it has the "context"
awkwardness which I identified above. Consider the case where there are several
instances of your special `div`, and you need to deal with events from one
differently than events from another. Of course, you can initialize each one
with some context, provide the context back with each event, and then use the
context in dispatching the subscription to the port.

That works, but it is a bit awkward and verbose, compared with how we usually
handle events in views. Usually, we just use `Html.Events.on` to attach an Elm
listener to some event, and we can then route it using the familiar `Html.map`
to provide some context, without having to communicate that context to the
Javascript side and feed it back to Elm.

Well, if you look carefully at the sample code I quoted above, that's exactly
what I've done for some DropzoneJS events. Here's the key bit again:

```elm
    div
        [ id "dropzone"
        , on "dropzonecomplete" (Json.Decode.map DropZoneComplete decodeDropZoneFile)
        ]
        []
```

Notice the `on "dropzonecomplete"`. Instead of subscribing to a message from a
port, we're listening for an event on a DOM node, in the usual way. We supply a
decoder for the event (`decodeDropZoneFile`), and a tag to route it to our
`Msg` type (`DropZoneComplete`). If there was some additional context needed,
we could provide it as an extra parameter to our `DropZoneComplete` tag. And,
we don't need to set up a port and subscription at all -- we just listen for
events.

But how do we generate the events? Here's an example of what `bindDropZone()` looks
like on the Javascript side.

```js
    var dropZone = undefined;

    function bindDropZone () {
        // We could make this dynamic, if needed
        var selector = "#dropzone";
        var element = document.querySelector(selector);

        if (element) {
            if (element.dropZone) {
                // Bail, since already initialized
                return;
            } else {
                // If we had one, and it's gone away, destroy it.  So, we should
                // only leak one ... it would be even nicer to catch the removal
                // from the DOM, but that's not entirely straightforward. Or,
                // perhaps we'd actually avoid any leak if we just didn't keep a
                // reference? But we necessarily need to keep a reference to the
                // element.
                if (dropZone) dropZone.destroy();
            }
        } else {
            console.log("Could not find dropzone div");
            return;
        }

        dropZone = new Dropzone(selector, {
            url: "cache-upload/images",
            dictDefaultMessage: "Touch here to take a photo, or drop a photo file here.",
            resizeWidth: 800,
            resizeHeight: 800,
            resizeMethod: "contain",
            acceptedFiles: "jpg,jpeg,png,gif,image/*"
        });

        dropZone.on('complete', function (file) {
            // We just send the `file` back into Elm, via the view ... Elm can
            // decode the file as it pleases.
            var event = makeCustomEvent("dropzonecomplete", {
                file: file
            });

            element.dispatchEvent(event);

            dropZone.removeFile(file);
        });
    }

    function makeCustomEvent (eventName, detail) {
        if (typeof(CustomEvent) === 'function') {
            return new CustomEvent(eventName, {
                detail: detail,
                bubbles: true
            });
        } else {
            var event = document.createEvent('CustomEvent');
            event.initCustomEvent(eventName, true, false, detail);
            return event;
        }
    }
```

So, instead of feeding events back into Elm via ports, we just feed them back
in via the DOM. Then, we can listen for them, decode them and handle them in
the usual way.

{% include thumbnail.html image_path="/assets/images/posts/elm-port-alternatives/dropzone.gif" caption="DropzoneJS in action inside Elm" %}

## Plain Old Ports

I hope you've enjoyed this tour through some alternatives to using ports when
you need to communicate between Javascript and Elm. But I should repeat what I
said at the beginning. Plain old ports work really well for many situations --
these are just some alternatives for certain cases where ports can be a bit
awkward.
