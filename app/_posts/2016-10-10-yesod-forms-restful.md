---
title: "Yesod forms, and API first"
tags:
  - Yesod
permalink: "/content/yesod-forms-restful"
layout: post
author: RachelBaram
image:  "/assets/images/posts/yesod-forms-restful/thumb.jpg"
description: "Create a Yesod entity that can be created and validated by forms and RESTful using the same validations handlers."
---

{% include setup %}

Follow the README to see how to run this locally.

We have had a few entrepreneur projects in Gizra along the years, but as of last year one of them
started picking up. [Circuit Auction](http://www.circuitauction.com/) is all in one solution for auctions houses: from a back office to manage their catalogs, to online site to show it and a web app for real time
auctions.

Lets talk about the real time part. Up until now we've had Drupal serve the backend of that web app. Drupal and real time - I hope the comedy relief doesn't go unnoticed.

I will repeat what I've been seeing for a long time now. Drupal is an amazing CMS, which comes with a lot of benefits, but it's not fast enough to serve real time content - there are better solutions for that.

Our intent was to move the real time tasks to a nodeJs server, however Yesod is now part of our stack.

## Single File App

Our Yesod projects start from a scafolded project that already comes with lots of different parts to get
us up to speed, however I wanted to isolate my use case. Yesod allows us to have our app defined in a single file. In fact it even allows us to have the [dependency declared](https://github.com/Gizra/yesod-form-restful-example/blob/8863f70bba4ece37c2aa50ceb0a8e207c6189ebb/Item.hs#L2-L8) as-well, so Stack - Haskell's build too, can build it for us.

Declare our [model](https://github.com/Gizra/yesod-form-restful-example/blob/8863f70bba4ece37c2aa50ceb0a8e207c6189ebb/Item.hs#L36-L40). It's a simple one `Item` has only a single property that accepts only `Int` values.

Declare our [routes](https://github.com/Gizra/yesod-form-restful-example/blob/8863f70bba4ece37c2aa50ceb0a8e207c6189ebb/Item.hs#L43-L47):

`/ ItemR GET POST` -- This is where the form will appear (GET) and where it will be `POST`ed.




<!-- more -->

{% include thumbnail.html image_path="assets/images/posts/email-template/mailchimp_components.jpg" caption="Mailchimp content items" %}
