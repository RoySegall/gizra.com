---
title: "Organizing Large Client-Server Apps in Elm"
tags:
  - Elm
permalink: "/content/elm-app-organization/"
layout: post
image: ""
description: "Organizing Elm apps isn't entirely straightforward. Here are a few principles we try to follow!"
author: rgrempel
---

Here at Gizra, we have a number of apps in production with an Elm frontend and
(mostly) headless Drupal backend. The largest of these has more than 8,000
commits, with 40,000 lines of Elm code in 184 files. So, we've had to think a
little bit about how to structure large Elm apps.

My colleague Adam Stewart has blogged about techniques for adding a [little bit of
Elm](https://www.gizra.com/content/elm-in-drupal-panels/) to an existing Drupal site.
For some insight into how we structure larger Elm-first apps, read on!

<!-- more -->

The conversation about how to structure Elm apps tend to become oddly heated in
the Elm community, particularly when it comes to components and the
model-view-update triplet. What I'd like to do is focus on things that are
either more basic or more advanced than that conversation. I'll start with the
more basic!

What does it mean to organize an app? We organize by splitting things into smaller parts.

## Why Split Things Into Multiple Files?

Unlike some other languages, there are no technical reasons in Elm for using multiple files.
You could stuff your entire app into one file if you like. In fact, there would be some
advantages in doing so -- no need to worry about circular imports, for instance!

- Code re-use across projects
    - But we usually try to publish something anyway
- Incremental compilation
- Merge conflicts
- Human factors
    - Where do I find things?
    - What tooling am I using? (Easier to use a file list to find things, unless we have good tooling
      that gives us a table-of-contents for a single file).

My point is that how to split things into multiple files is essential pragmatic -- there
are no hills worth dying on in that argument.

## Why Split Up the Model?

Here's another basic question: why do we split up the `Model` into multiple parts?

- Every Elm app has a `type alias Model =`. (Well, perhaps not literally that).
- Our big bag of state.

So, why do we split it up? Well, roughly, to track the structure of the facts that
it models.

You can divide those facts into three categories:

- Facts about the world
- Facts about our user interface
- Mixed facts (more later)

Of these two, it is the facts about the world that are far easier to model correctly.
Why is that:

- Partly given to us, by the database and backend structure.
- Easier to visualize (many of us have a strong connection to the real world)
- More stable

Facts about our user interface are, by comparison, more ephemeral, and subject
to our own change and control.

Because Elm has no canonical widget set, you end up needing to model facts
about the user interface to a level of detail you may not be used to (i.e. is
this checkbox checked or not). You might think this could be handled for you,
somehow, but the fact that it isn't means that you can model things just as
expressively as you need to -- sometimes with impressive results.

(Mixed facts: facts about some evolution of the world, some state of our
app which is not quite just user interface, but not quite the world either).

So, why split up the model?

1. It's nice to keep the facts about the world somewhat distinct from the others.
   Though we do include some "mixed facts" like editable states and remote data.

   E.g. if you get a new model from the backend, you can just drop it right in --
   you've nicely "segregated" those facts from the facts you're only tracking locally.

2. Because the facts really are structured that way.

   To put it another way, it's easy to see that the purpose of modeling facts
   about the world is to get them right, in some sense. Well, that's just as
   true of the facts about our user interface -- it's just harder to do!

Note that where the facts go is a question that is distinct from how your
`view` and `update` functions are structured -- it has its own logic, as we'll
explore further. For instance, consider a "tab" structure ... might be just a
user interface thing ... but might actually represent a state of the user's
attention that is relevant to more than one view ... so might not necessarily
be located with the facts about each view ... might be a more basic fact about
the user's attention.

## Why Split Up the Update?

At one level, a purely pragmatic question. (I.e. avoid long functions).

Real question is why split up the `Msg` type.

- Isolate backend modifications. (Technical advantages)
- Generally, track the way the `Model` is split up. (Human advantages)

## How to Split Up the Update?

- Additional parameters
- Additional return values
- Communication between caller and callee

## Why Split Up the View?

At one level, the reason you split up the view is because you can't see everything
at once.

Well, you could have a very long case statement. But, it's probably going to help
your understanding to split it up into separate functions, so that you can call
them. Plus, there may be parts of the view that you want to use at different points.
So, the ordinary reasons for splitting functions up.

Real questions are:

- Does the view need its own `Model`, or can it use someone elses, or have some
  things passed in as additional parameters?

  Be skeptical that your `view` actually needs a model ... many times, it doesn't.

- Does the view need its own `Msg` type, or can it use someone else's, or be
  parameterized, or return an `OutMsg`.

  Which very much depends on what stage you're at ... what other `Msg` types
  do you already have? Is one suitable? Or are you starting here? Be skeptical
  that your view actually needs its own `Msg` type.

## How to Split Up the View

- Additional parameters
- Additional return values
- Communication between caller and callee

## What our File Structure Typically Looks Like

A survey of files we typically have in an app, with reference to the preceding discussion.

(I had planned to address client-server considerations more than this outline
actually does. Now, I'm thinking that some more details about how to manage
the interaction between client and server might make a nice follow-up blog
post ... this one would probably already have enough material).
