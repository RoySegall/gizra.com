---
title: "Getting started with a Core Initiative"
tags:
  - "Drupal-planet"
  - JSON API
permalink: "/content/elm-inbox-simulation"
layout: post
image: "/assets/images/posts/elm-inbox-simulation/thumb.jpg"
author: IshaDakota
description: "How the exciting world of web frameworks helped us create a complex demonstration of an inbox simulation in days."
published: true
---

{% include setup %}


##Baseball, Apple Pie, and Web Frameworks
I like baseball better than football (the American version). Football is a game of inches - it is said - but it's measured in yards. Imprecise scope is built into the system. Baseball on the other hand, is a game of wildly random occurrences that are often measured to the third decimal place. An entire framework exists to understand the smallest, yet important, details of the game. That's not to say it's perfect - A .400 average is a failure on any weighted curve, but in baseball it will earn you the batting crown.

What I like about baseball is what I like about the current state of web applications. There is a growing set of frameworks that allow you to "scratch your own itch" in ways that you never could before. One of the exciting things for me when I go to web conferences, is to see things like Drupal being used as a backend to serve content to some other front-end framework (enter your favorite: Angular, React, Ember) that can bend and shape and re-present that content in ways that Drupal never imagined.

And as a web development agency that focuses on complex content management that has huge -- and really exciting -- implications for how we do business.

##What's a Major Corporatation To Do?
Take for example a project that started with someone that does training and assessment at a bank  - a big one that trains a lot of employees. At some point she asked me "Do you guys do inbox simulations?" If you're like me, you had to think for a second - and it turns out inbox simulation is exactly what it sounds like: a simulated email inbox to test and assess an employee's response and prioritization skills. My first response was "No," and my second, almost immediate, followup was, "but I don't see why we couldn't."

The problem was that none of the software that they had tried was giving them precisely what they needed. And that's not surprising. There are over 500 Learning Management Systems on the market, each with it's own bloated feature set trying to solve specific use cases with general tools. It's also not surprising that less than 20% of corporate LMS users are dissatisfied with their system. Given the large features sets and the likely time it took to get them to market, most of them are probably built on technology that's already 5 years old.

##Enter Proof of Concept
That conversation led to a "show us what you can do" meeting. Which was a problem because, well, we had never done it before. My five-or-six-years ago brain said to myself, we can't possibly create a demo of an inbox simulation - I'll just put together a slide deck that explains what I'm talking about here with web frameworks.

That's when Amitai said, "Let's create an inbox simulation for your meeting - we can do it in Elm. Open a repo and I'll show you how. What should it have?"

I answered (dubiously), "Well, it should look and feel like an Outlook inbox, and we should be able to demonstrate that their logic can be applied to simple email tasks."

"You mean like if you respond one way, you get a certain response back."

"Yeah, something like that."

##The Scafolding of an Inbox, Semantic UI and Elm (also Jekyll, NodeJS and other stuff along the way)

