---
title: Elm From a Business Perspective
tags:
  - Elm
permalink: "/content/elm-business-perspective"
layout: post
image: /assets/images/posts/elm-business-perspective/thumb.jpg
description: "Elm is not just technically great, it also allows building business around it"
---

{% include setup %}

Elm, like any rising open source project is getting critiques from both sides. Reading the good ones, are always fun, but the negative ones are just as important.

I came across today this [Elm Is Wrong](http://reasonablypolymorphic.com/blog/elm-is-wrong), and realized that I've always read the good and bad critiques from a technological point of view. I have yet to read about what it means from a business owner perspective.

I can assure you it's a different perspective. One that is about dollars and cost of bugs. Not about "type classes" or "higher kinded types".

<!-- more -->

## Background

Being the CTO of Gizra means I'm always for the lookout on how we can improve our process and stack. I believe the unique stack we currently have (Drupal, Yesod and Elm) is a natural outcome of the mindset we have.

Being the co-owner of Gizra, is probably the best way to assure that I'm very mindful to our technological choices. Can they actually make us more productive, and as a result allow us to gain more money. As simple as that.

## Correctness

Elm fits very nicely into this mindset. In fact, it is thanks to being exposed to functional programing, which Elm makes so approachable, I'm able now to articulate that in Gizra we really care about correctness. But we care about it, not from the marketing point of view of saying "we care about quality, because we are awesome", but rather form the accounting point of view saying "we care about quality, because we cannot charge for fixing our own bugs".

This mindset is also the reason we have chosen Yesod (Haskell) over the more popular Elixir (Erlang). Because in the type of projects we have in Gizra, and as service providers, making sure we don't introduce bugs and regressions is more important than low-latency, distributed and fault-tolerant systems.

I'm not saying this mindset should be applied to all, but it's the right one for us. And I have a feeling this is right for most service providers web development shops out there.

## Type Classes and What Not

Back to the "Elm Is Wrong" post.

I really disliked the foul language and offensive remarks. Very un-open source attitude.

But reading the essence of what Sandy Maguire (@isovector), the author of the post made a few things clear to me:

@isovector seems to be a better developer than me. That is, he knows way more about Haskell, type classes, polymorphism than I know. As one that learns (and struggles) with Haskell I can really appreciate it.

I would assume (but don't know for a fact), that the author might have liked better [PureScript](http://www.purescript.org/), since it would give him powerful tools he could put to use.

Are type classes the right thing for Elm? Maybe, I don't know. But I can see also the case why not. And the why not is an important part in this post.

Elm is easy. I mean, it takes some learning, but in Gizra we have right now about five different Elm projects in different stages. This means our need for Elm developers is constantly increasing.

If we were to choose PureScript, the developers' skill treshold would have been, in my opinion too high. Not to mention that we would have a smaller poll of devs to choose from.

But than again, Elm is not _too_ easy. Which means that almost every developer I see that does Elm is a seasoned developer. Getting experienced develoeprs on board, means they are immediately productive. Which means we gain more per hour.

And the highly opinionated Elm Architecture means that having a team of 3-4 developers hacking on the same repo, are all working around the same concepts, and can lower the required communication time, since looking at the `Model` and the `Msg` reveals the entire concept without leaking the implementation details.

And of course Elm's type system and compiler makes it so, that I know that we'll have lesser bugs.

you got me point. More dollars, right?  
Well, not just.

There's also the case for developers moral. My completely un-scientific insight, is that Gizra's devs who dealt with Angular hated it. And the ones that do Elm, love it.

Such developers are likely to stay more time in the company, be more engaged with the community, and help spread our name around the globe.

## Is Elm Perfect?

No. But for us, and I believe for many others, it's a wonderful solution, with or without type classes.
