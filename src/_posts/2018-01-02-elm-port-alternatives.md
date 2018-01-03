---
title: "Integrating Javascript into Elm: Alternatives to ports"
tags:
  - Elm
permalink: "/content/elm-port-alternatives/"
layout: post
description: "Alternatives to ports for integrating Javascript into Elm"
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

*If you're unfamiliar with ports, then this isn't the best place to start.* I'm
going to assume that you're familiar with the many cases in which they work
well, and focus on a few cases where you might want to try something else.

<!-- more -->

## 1. Getting immediate answers

One characteristic of ports in Elm is that they are inherently asynchronous.
There are "outgoing" ports, which send messages from Elm to Javascript.  There
an "incoming" ports, which send messages from Javascript to Elm. Suppose your
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

## 2. Associating questions and answers

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

### a) Manually

Now, in some cases this can be easily fixed. For instance, you could imagine a
helpful change in the API quoted above -- one could include the input along
with the response:

```elm
port suggestions : ((String, List String) -> msg) -> Sub msg
```

I've used this kind of approach, and it can work, but it's often more awkward
than this simple exmaple.  Often, you need to retain more context than just a
simple string (for example, a position in a document). You may need to encode
and decode the context to a JSON value, since it won't necessarily be limited
to the types that ports can handle without help.

At least, it seems awkward by comparison to how tasks work in Elm. With tasks,
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

### b) With `Porter`

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

The Javascript code does receive an ID which it needs to include in the response, but
that's it -- the rest of the book-keeping is handled by the `Porter` module.

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

### c) With service workers

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
and the JSON body as if it were the parameters provided to the function. So, from the
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

## 3. Managing foreign DOM

None of the techniques I've discussed so far handle the case where you have
some Javascript code that wants to "manage" parts of the DOM. Consider how
Javascript libraries like [TinyMCE](https://www.tinymce.com/) or
[DropzoneJS](http://www.dropzonejs.com/) work.

- You put a special `div` in your HTML with a particular ID and/or class.

- You call some function that initializes your `div` and sets up some
  listeners for events emitted by it.

- The library provides some content inside the `div`, the user interacts
  with it, and events are emitted.

So, how can one do this in Elm?

### a) Special div

- Avoid having it re-created unless necessary, and avoid confusing the virtual DOM.
- So, keyed node, and its parents.

### b) Initialization

- Actual act of initialization is easy via ports.
- Hard thing is knowing when to do it.
- Partly solved by requestAnimationFrame
- But in your `update` dispatch, not `view`. So, you need to "catch" the state transitions
  which will cause the special `div` to be drawn. Uggh.

What's the alternative?

- Write a script tag.
- You'll say this is hacky. But, actually, it isn't.

### c) Handling events

- You can listen for events and send them in via a port.
- But then you've got the context problem noted above ... e.g. what if there are possibly several
  on a page? Need to distinguish amongst them.
- So, you can make **custom** events on the Javascript side, and listen for them
  in the usual way on the Elm side. I.e. in the view, not the port.
- Works for messages inherently tied to the DOM. (In other cases, you wouldn't want to drop
  a message because the DOM node has gone away).
