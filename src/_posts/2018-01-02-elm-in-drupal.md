---
title: "Have Your Cake and Eat it Too: Elm Apps in Drupal Panels"
tags:
  - Drupal
  - Elm
  - "Drupal-planet"
  - "Non-Profit"
permalink: "/content/elm-in-drupal-panels/"
layout: post
image: "/assets/images/posts/elm-in-drupal-panels/thumb.jpg"
author: IshaDakota
published: true
description: "In these cases where our clients have existing Drupal websites and big ideas for functionality that their users have come to expect, we can now deliver something better."
---

I tell my kids all the time that they can’t have both - whether it’s ice cream and cake or pizza and donuts - and they don’t like it. It’s because kids are uncorrupted, and their view of the world is pretty straightforward - usually characterized by a simple question: why not?

And so it goes with web projects:

**Stakeholder:** I want it to be like [*insert billion dollar company*]’s site where the options refresh as the user makes choices.

**Me:** [*Thinks to self, “Do you know how many millions of dollars went into that?”*] Hmm, well, it’s complicated...

**Stakeholder:** What do you mean? I’ve seen it in a few places [*names other billion dollar companies*].

**Me:** [*Gosh, you know, you're right*] Well, I mean, that’s a pretty sophisticated application, and well, your current site is Drupal, and well, Drupal is in fact really great for decoupled solutions, but generally we’d want to redo the whole architecture… and that’s kind of a total rebuild…

**Stakeholder:** [*eyes glazed over*] Yeah, we don’t want to do that.

But there’s is a way.

<!-- more -->

{% include thumbnail.html image_path="assets/images/posts/elm-in-drupal-panels/cake.jpg" caption="Have your cake and eat it too - ©Leslie Fay Richards (CC BY 2.0)" %}

## Elm in Drupal Panels

Until recently, we didn’t have a good, cost-effective way of plugging a fancy front-end application into an existing Drupal site. The barrier to develop such a solution was too high given the setup involved and the development skills necessary. If we were starting a new project, it would be a no-brainer. But in an "enhancement" scenario, it was never quite worth the time and cost.  Over time, however, our practiced approach to decoupled solutions has created a much lower barrier of entry for these types of solutions.

We now have a hybrid approach, using [Elm](http://elm-lang.org/) "widgets" nested inside of a Drupal panel. Our reasons for using Elm - as opposed to some of the other available front-end frameworks (React, Angular, Ember) - [are](/content/elm-business-perspective/) [well-documented](https://www.gizra.com/content/faithful-elm-amazing-router/), but suffice it to say that Drupal is really good at handling content and it’s relationships, and Elm is really good at displaying that content and allowing a user to interact with it. But add to that the fact that Elm has significant guarantees (such as no runtime exceptions) and gives us the ability to do [unit tests](https://github.com/elm-community/elm-test) that we could never do with jQuery or Ajax, and all of a sudden, we have a solution that is not only more slick, but more stable and cost efficient.

{% include thumbnail.html image_path="assets/images/posts/elm-in-drupal-panels/elm-tests.jpg" caption="A nifty registration application with lots of sections and conditional fields built as an Elm widget inside a Drupal Panel. Also shown, the accompanying tests that ensure the conditions yield the proper results. Oh how we miss the Drupal Form API!" %}

In these cases, where our clients have existing Drupal websites that they don’t want to throw away, and big ideas for functionality that their users have come to expect, we can now deliver something better. This is groundbreaking in particular for our non-profit clients, as it gives them an opportunity to have "big box" functionality at a more affordable price point. Our clients can have their proverbial cake and eat it too.

What's more, is that it helps us drive projects even further using our "Gizra Way" mindset: looking at a project as the sum of its essential parts. Because - in these scenarios - we don't need to use Drupal for everything (and likewise, we don't need to use Elm for everything either), we can pick and choose between them, and mix and match our approach depending upon what a particular function requires. In a way, we can ask: would this piece work nicely as a single-page application (SPA)? Yes? Let's drop an Elm widget into a Panel. Is this part too much tied to the other Drupal parts of the apparatus? Fine, let's use Drupal.

## Building a Summer Planner

[FindYourSummer.Org](http://findyoursummer.org/) is a program operated by the [Jewish Education Project](https://www.jewishedproject.org/) in New York (jointly funded by UJA-Federation of New York and the Jim Joseph Foundation) and is dedicated to helping teens find meaningful Jewish summer experiences. They have amassed a catalogue of nearly 400 summer programs, and when they decided to expand their Drupal site into a more sophisticated tool for sorting options, comparing calendars, and sharing lists, the expected functionality exceeded Drupal’s ability to deliver.

Separating out the functional components into smaller tasks helped us to achieve what we needed without going for a full rebuild.

For instance, some of the mechanisms we left to Drupal entirely:

Adding a program to the summer planner (an action similar to adding an item to a shopping cart) is a well known function in commerce sites and in Drupal can be handled by Ajax pretty well. Just provide an indication that the item is added and increment the shopping cart and we’re all set.

{% include thumbnail.html image_path="assets/images/posts/elm-in-drupal-panels/add-to-planner.gif" caption="Ajax does just fine for adding a program to the summer planner." %}

The new feature set also required more prompts for users to login (because only a logged-in user can share their programs), and again, Drupal is up for the task. Dropping the user login/registration form into a modal provides a sophisticated and streamlined experience.

{% include thumbnail.html image_path="assets/images/posts/elm-in-drupal-panels/login-view.jpg" caption="Login prompts provided by a Ctools Modal lets a user know that to continue using the planner, they need to login. A key performance indicator for the project was to increase signups in order to track users who actually register for summer experiences." %}

For when a user gets into the planner (the equivalent of the shopping cart on a commerce site) the team had big ideas for how users would interact with the screen: things like adding dates and labels, sharing programs with friends and families, and removing items from the planner altogether.

Drupal could certainly handle those actions, but given the page refreshes that would be needed, the resulting interface would be sluggish, prone to error, and not at all in line with users’ expectation of a modern “shopping” experience. But, because we could define all of the actions that we wanted on one screen, we began to think of the "cart" page as a SPA. As such, it was a perfect opportunity to use Elm inside a Panel and provide a robust user experience.

{% include thumbnail.html image_path="assets/images/posts/elm-in-drupal-panels/participation.gif" caption="Fast and stable (and well-tested) performance, slick user experience, and cost efficiency using Elm." %}

While the biggest benefit to the user is the greatly enhanced interaction, perhaps the biggest benefit to the client was the cost. The cost to handle this feature with an Elm application was only marginally more costly than it would have been in Drupal only. The most significant extra development is to provide the necessary data to the Elm app via RESTful endpoints. Everything else - from the developer experience perspective -  is vastly improved because Elm is so much easier to deal with and provides so many guarantees.

## Elm Apps Everywhere!

Maybe not.  Sometimes - with new projects or in cases where the functionality can’t be boiled down into a single page - it’s  more beneficial to start fresh with a fully decoupled solution. In these cases though, where there’s an existing Drupal site, and the functionality can be easily segmented, projects can have it both ways. It's not surprising that we’ve been using this technique quite a bit lately, and as we get more adept, it only means the barrier to cost effectiveness is getting lower.
