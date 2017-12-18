---
title: "Have Your Cake and Eat it Too: Elm Apps in Drupal Panels"
tags:
  - Drupal
  - Elm
permalink: "/content/elm-in-drupal-panels/"
layout: post
image: "/assets/images/posts/elm-in-drupal-panels/thumb.jpg"
author: IshaDakota
published: true
description: "I tell my kids all the time that they can’t have both."
---

I tell my kids all the time that they can’t have both - whether it’s ice cream and cake or pizza and donuts - and they don’t like it. It’s because kids are uncorrupted, and their view of the world is pretty straightforward - usually characterized by a simple question: why not?

{% include thumbnail.html image_path="assets/images/posts/elm-in-drupal-panels/cake.jpg" caption="Have your cake and eat it too - ©Leslie Fay Richards (CC BY 2.0)" %}

And so it goes with web projects:

**Stakeholder:** I want it to be like [*insert billion dollar company*]’s site where the options refresh as the user makes choices.

**Me:** [*thinks to self, “do you know how many millions of dollars were spent in development of that thing”*] Hmm, well, it’s complicated...

**Stakeholder:** What do you mean? I’ve seen it in a few places [*names other billion dollar companies*].

**Me:** Well, I mean, that’s a pretty sophisticated front-end application, and well, your current site is Drupal, and well, Drupal’s really great for decoupled solutions, but generally we’d want to redo the whole thing with a decoupled architecture… and that’s kind of a total rebuild…

**Stakeholder:** [*eyes glazed over*], yeah, we don’t want to do that.

**Me:** But there’s is a way.

## Elm in Drupal Panels

Until recently, we didn’t really have a good way of plugging a fancy front end application into an existing site. Now we have a hybrid approach, using Elm single-page applications (SPAs) nested inside of a Drupal panel. Instead of rebuilding an entire application, we can think about what parts of that application could exists as a SPA and what parts could still work in Drupal.

Our reasons for using Elm - as opposed to some of the other available front-end frameworks - [are](/content/elm-business-perspective/) well-documented, but suffice it to say that Drupal is really good at handling content and it’s relationships, and Elm is really good at displaying that content and allowing a user to interact with it. And in these cases, our clients have existing Drupal websites that they don’t want to throw away, and ideas for functionality that they see as part of their larger site.

## Building a Summer Planner

[FindYourSummer.Org](http://findyoursummer.org/) is a program of the [Jewish Education Project](https://www.jewishedproject.org/) in New York and is dedicated to helping teens find meaningful Jewish summer experiences. They have amassed a catalogue of over 200 summer programs, and when they decided to expand their Drupal site into a more sophisticated tool for sorting by multiple children, comparing calendars, and sharing lists, the expected functionality exceeded Drupal’s ability to deliver.

Separating out the functional components into smaller tasks helped us achieve what we needed without going for a full rebuild.

For instance, some of the mechanisms we left to Drupal entirely:

Adding a program to the summer planner (an action similar to adding an item to a shopping cart) is a well known function in commerce sites and in Drupal can be handled by Ajax pretty well. Just provide an indication that the item is added and increment the shopping cart and we’re all set.

This new feature set required more prompts for users to login (because only a logged in user can share their programs), and again Drupal is up for the task. Dropping the user login/registration form into a modal provides a sophisticated and streamlined experience.



Once a user gets into their planner (the equivalent of the shopping cart on a commerce site) the stakeholders had big ideas for how users would interact with the screen: things like adding dates and labels, sharing programs with friends and families, and removing items from the planner altogether.

Drupal could certainly handle those actions, but given the page refreshes that would be needed, the resulting interface would be sluggish, prone to error, and not at all in line with users’ expectation of a modern “shopping” experience. But because we could define all of the actions that we wanted on one screen, we could drop in a SPA as a Panel Pane and provide a really robust user experience.




While the biggest benefit to the user is the greatly enhanced interaction, perhaps the biggest benefit to the client was the cost. The cost to handle this feature with an Elm application was only marginally more costly than it would have been in Drupal only. The most significant extra development is to provide the necessary data to the Elm app via RESTful endpoints, everything else - from the developer experience perspective -  is vastly improved, because Elm is so much easier to deal with and provides so many guarantees.

## Elm Apps Everywhere!

We’ve been using this technique quite a bit lately and it’s not a surprise given that users are expecting more slick front end experiences. Sometimes - with new projects or in cases where the functionality can’t be boiled down into a single page - it’s going to be more beneficial to start fresh with a fully decoupled solution. But in these cases where there’s an existing Drupal site, the functionality can be segmented, projects can have it both ways.
