---
title: "Prototyping with CSS Grid"
tags:
  - CSS-grid
  - CSS
  - Design
permalink: "/content/prototype-with-css-grid/"
layout: post  
image: "/assets/images/posts/prototype-css/thumb.jpg"   
author: IshaDakota  
description: "Quickly prototype with CSS Grid now with tools that you have in your back pocket."
---

Not long ago, I was reviewing some ideas with a client about their homepage. It was a pretty typical issue - some dynamic content (in this case, educational resources) that needed to be arranged and highlighted in different ways in order to draw in users. There are a lot of known patterns to use here -  some of which would work well. I had a few ideas; and although none of them was particularly earth-shattering, they certainly would solve the problem.

So what's the next step?

I could have gone to a designer, translated the idea, waited for PSDs to come back shared with the client and reviewed and repeated. A totally valid and worthwhile process in cases where a designer's creative treatment is needed. But in this simple (and low-budget) scenario, there were some clear tropes. Of course, there are prototype apps like [InVision](https://www.invisionapp.com/) or [Axure](https://www.axure.com/), but haven't really found the case where fumbling through these tools myself was worth the effort.

Here's where CSS-Grid settled into the process really nicely. Because I had been following the [CSS-Grid Specification](https://www.w3.org/TR/css-grid-1/) quite closely (mainly through the Twitter feeds of leading advocates and members of the CSS Working Group like [Jen Simmons](https://twitter.com/jensimmons) and [Rachel Andrew](https://twitter.com/rachelandrew), more on that later), I was eager to try it out in this context.

<!-- more -->

{% include thumbnail.html image_path="assets/images/posts/prototype-css/grid-by-example.jpg" caption="Grid by Example, https://gridbyexample.com/, a project by Rachel Andrew to demonstrate, well, grid by example." %}


## Skipping the Sketch

I've long been a proponent of prototyping in browser. Mostly because I'm pretty bad with a pencil and paper - but also because it's become a pretty realistic way to present ideas. CSS Frameworks like [Bootstrap](https://getbootstrap.com/) and [Semantic UI](https://semantic-ui.com/), of course, make this a a lot easier by providing a defaults, re-usable elements (like buttons and tabs) and most-importantly, a grid upon which to lay out content.

But there's at least two constraints in this method:

1. All of your prototypes end up looking like a typical Bootstrap or Semantic UI.
2. mo, mo mo.


## Drawing the Canvas

Back to the client that wants a new highlighted block on the homepage.

The really cool thing about using CSS-Grid in a prototyping task like this is that you can inject it directly into the situation that you need. Working independent of a framework, you're not burdened by any of the defaults of a particular framework. I can literally create a bit of layout on demand in just the space I need it and disregard everything else.
ß
To start, at Gizra we use Jekyll to quickly create static markup - we have a

In this case, I just grabbed a static version of the homepage (yep, just by copy/pasting the source code) along with the compiled CSS and JavaScript and crudely put it in it's own includ

````html
<div class="resource-container">
  <div class="item item-title">
    <h3 class="resource-title">Recent Items</h3>
  </div>

  <!-- This is the featured item -->
  <div class="item item-1">
    <img src="https://placeimg.com/690/690/any">
    <div class="featured-resource-title-banner">
      <div class="featured-resource-title">
        <h2>Gizra. We Build Websites.</h2>
        <div class="subtitle">
          Everybody tells us that people won’t read this.
          They will enter the site, see mostly text, and move on.
        </div>
        <a class="subtitle-link" href="">View All Stories</a>
      </div>
    </div>
  </div>

  <!-- This is a regular item -->
  <div class="item item-2">
    <img src="https://placeimg.com/280/280/any">
    <div class="resource-title-banner">
      <div class="resource-title">
        Your business is in deep mud. Not just metaphorically speaking.
      </div>
    </div>
    <div class="resource-type">
      <span class="resource-type-title">Journal Entry</span>
    </div>
    <div class="teaser-hover">
      <div class="teaser-hover-text">Read Now</div>
    </div>
  </div>

 <!-- more items... -->

</div>

````

{% include thumbnail.html image_path="assets/images/posts/prototype-css/tightrope-without-a-net.jpg" caption="Tightrope Walk over Hamilton Street - Allentown, PA." %}

## On Mentorship and Moving Outside Your Comfort Zone

Part of the reason that I was eager to try this grid experiment in the wild is a story about inspiration and mentorship. Some mentorship is an intentional, crafted, and highly personal project. Some are moments of inspiration sustained - by some device - from a distance.

I only "met" Jen Simmons once. And by "met," I mean I sat quietly in an audience of over 200 at a DrupalCon in Chicago in 2011. I was an outsider to the web development world and feeling much like an imposter. To hear someone who also came  from "the outside," but spoke with such clear vision about what the web could and should do was inspiring. I'm pretty certain I wouldn't leave a comfortable career for something exciting and new if I hadn't been in that room on that day.

So since that day, I made Jen somewhat of a remote mentor, following her on Twitter, listening to most every episode of [The Web Ahead](http://5by5.tv/webahead) podcast, and currently engrossed in her YouTube series [Layout Land](https://www.youtube.com/channel/UC7TizprGknbDalbHplROtag). Jen has also been pretty vocal about the challenges that women in tech face - citing as an example her lower ratio of twitter followers in proportion to her contribution to the community and relative to male colleagues. I don't have a lot to add to that conversation that hasn't been said, other than if you consider yourself to work in "the web" and regard Twitter as a valuable source for the exchange of ideas, you're not doing your job if you aren't following her.

We have this principle at Gizra where we encourage each other to step outside our comfort zones. Try a new idea, fly without a net - you may fall, but you may also produce something really beautiful. Whether it's starting a new career, or simply testing out a new thing with a real live client, it's easier if you can follow the lead and rely on some of the experiences of people you trust.
