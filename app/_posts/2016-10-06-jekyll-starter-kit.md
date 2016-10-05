---
title: "Jekyll Starter Kit Generator"
tags:
  - Jekyll
  - Starter Kit
  - Progressive Web Apps
permalink: "/content/jekyll-starter-kit"
layout: post
author: NirGalon
image: /assets/images/posts/jekyll-starter-kit/thumb.jpg
published: true
---

{% include setup %}

I always love [Jekyll](jekyllrb.com), I think it's a great tool! but lately I was hearing a lot about PWA (Progressive Web Apps), you know the kind of web apps that feels like a native apps, with welcome screen, a shortcut on your phone, offline support, and what not. I have a bunch of static websites built with Jekyll so I start implement those new and shinny toys, one by one, in my static websites.

As a result I was ran into [Google Web Starter Kit](https://github.com/google/web-starter-kit) - "a Boilerplating & Tooling for Multi-Device Development". And even do couple of Pull Requests there.

{% include thumbnail.html image_path="assets/images/posts/jekyll-starter-kit/google-web-starter-kit-prs.jpg" caption="Google Web Starter Kit PRs" %}

In the Google Repo I learned a lot about PWA and as I was building those features into my static websites I notice there isn't any material out there about PWA features with Jekyll. And I kept hearing the voice of obi one kenobi in my head telling me "This is not the open source way! You shouldn't keep this knowledge to myself". So here comes the **Jekyll Starter Kit** generator.

<!-- more -->

What options do you have in this generator?
  * You can choose to write HTML or [Pug (Jade)](https://github.com/pugjs/pug).
  * Choose between `css`/`sass`/`scss`.
  * Support ES2015 (with Babel).
  * Generate Service-Worker automagically (with [sw-precache](https://github.com/GoogleChrome/sw-precache)).
  * Get all the Best Practices from [Google Web Starter Kit](https://github.com/google/web-starter-kit), like `humans` and `manifest` files.
  * Check your build on [Travis-CI](https://travis-ci.org/) with [html-proofer](https://github.com/gjtorikian/html-proofer).
  * Deploy your website to GitHub (on `gh-pages`) or Firebase, with only one command.

This will get you off the ground with your new and shiny _Jekyll Progressive Web App_.

{% include thumbnail.html image_path="assets/images/posts/jekyll-starter-kit/jekyll-starter-kit.jpg" caption="Jekyll Starter Kit logo" %}

## How to use it

To install it you'll need [Yeoman](http://yeoman.io/). Then install the generator
```shell
npm install -g jekyll-starter-kit
```

And you can generate your new project
```shell
yo jekyll-starter-kit
```

If you need more info look at the [GitHub Repo](https://github.com/nirgn975/jekyll-starter-kit).

To make sure you'll not ran into any issues I write tests, a lot of tests! (I make it a priority to get to 100% coverage). But if you do need some help we can chat on the [gitter room](https://gitter.im/jekyll_starter_kit/Lobby).

If you want to help keep making this generator better, you're awesome! Go to the [Want to help](https://github.com/nirgn975/jekyll-starter-kit#want-to-help) section in the README and start from there.
