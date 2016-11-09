---
title: Elm from a Business Perspective
tags:
  - Elm
permalink: "/content/elm-business-perspective"
layout: post
image: /assets/images/posts/elm-business-perspective/thumb.jpg
description: "Elm is not just technically great, it also allows building business around it"
---

{% include setup %}

Elm, like any rising open source project, is getting both positive endorsements and negative critiques. Reading the good ones, is always fun; but the negative ones are just as important.

Today, I came across today this: [Elm Is Wrong](http://reasonablypolymorphic.com/blog/elm-is-wrong), and realized that I've always read the good and bad critiques from a _technical_ point of view, but I have yet to read about what it means from a _business_ perspective.

I can assure you it's a different perspective. One that is about dollars and the cost of bugs - not about "type classes" or "higher kinded types."

<!-- more -->

## Background

Being the CTO of Gizra means I'm always on the lookout for how we can improve our process and technological stack. I believe the unique stack we currently use (Drupal, [Yesod]({{ BASE_PATH}}/content/haskell-yesod-php-drupal/) and Elm) is a natural outcome of the mindset that we have.

Being the co-owner of Gizra means that I'm very mindful to our choices. I constantly need to answer one important question: can they actually make us more productive, and as a result allow us to make more money. It's as simple as that.

## Correctness

Elm fits very nicely into this mindset. In fact, because I have been exposed to functional programing (one of the things which Elm makes so approachable), I am now able to articulate how in Gizra we really care about correctness. But we care about it not from the marketing point of view of saying "we care about quality, because we are awesome," but rather from the accounting point of view which says, "we care about quality, because we cannot charge for fixing our own bugs."

This mindset is also the reason we have chosen [Yesod](http://www.yesodweb.com/) (Haskell) over the more popular [Elixir](http://elixir-lang.org/) (Erlang). Because in the type of projects we have in Gizra, and as service providers, making sure we don't introduce bugs and regressions is more important than "low-latency, distributed and fault-tolerant systems."

I'm not saying this mindset should be embraced by everybody, but it's the right one for us. And I have a feeling that it's right for most web development shops out there that build client projects.

## Type Classes and What Not

Back to the "[Elm Is Wrong](http://reasonablypolymorphic.com/blog/elm-is-wrong)" post.

First it's important for me to note that I really disliked the foul language and offensive remarks. That's not in the spirit of open source, and it's a shame.

But reading the essence of what Sandy Maguire ([@isovector](https://github.com/isovector)) wrote, made a few things clear to me:

* Sandy Maguire seems to be a better developer than me. That is, he knows way more about Haskell, type classes, and polymorphism than I know. As one that learns (and struggles) with Haskell, I can really appreciate it.

* I would assume (but don't know for a fact), that the author might have liked [PureScript](http://www.purescript.org/) better, since it would give him powerful tools he could put to use.

* Are type classes the right thing for Elm? Maybe - I don't know. But I can see also see the case of why not. And the "why not" is an important part in this post.

Right now in Gizra we have about five different Elm projects in different stages and different scale. This means our need for Elm developers is constantly increasing. If we were to choose PureScript, the developers' skill threshold would have been - in my opinion - too high. Not to mention that we would have a smaller pool of devs to choose from.

Elm is easy. I mean, it takes some learning, but I know that I can get my devs productive with it quickly - quicker than Angular or React.

But than again, Elm is not _too_ easy. This means that almost every developer I see that is already involved in Elm is a seasoned developer. Getting experienced developers on board means that they are immediately productive, which means we gain more per hour.

Furthermore, the highly opinionated Elm Architecture means that having a team of 3-4 developers hacking on the same repo are all working around the same concepts. It lowers the required communication time since looking at the `Model` and the `Msg` reveals the entire concept without leaking the implementation details.

And of course Elm's type system and compiler makes it so that we know that we'll have less bugs.  
And that leads to - well, you get my point: more dollars, right?  

Well, not just.

There's also the case for developers' morale. My completely un-scientific insight, is that Gizra's devs who dealt with Angular didn't like it much because the code was hard to maintain. On the other hand, the ones that do Elm really enjoy it.

And from a business owner perspective, happy developers are likely to stay more in the company, be more engaged with the community, and help spread our name around the globe.

## Is Elm Perfect?

No. But for us - and I believe for many others - it's a wonderful solution (with or without type classes).
