---
title: "Jekyll Starter Kit Generator"
tags:
  - Jekyll
  - Yeoman
  - Progressive Web Apps
permalink: "/content/jekyll-starter-kit"
layout: post
author: NirGalon
image: /assets/images/posts/jekyll-starter-kit/thumb.jpg
published: true
---

{% include setup %}

I love [Jekyll](jekyllrb.com). I think it's a great tool! But lately I have been hearing a lot about Progressive Web Apps (PWA) - you know the kind of web app that feels like a native app, with a welcome screen, a shortcut on your phone, offline support, and more. So, I started implementing these new and shiny toys, one by one, on a bunch of static websites I built with Jekyll.

During this endeavor I ran into [Google Web Starter Kit](https://github.com/google/web-starter-kit) - "a Boilerplating & Tooling for Multi-Device Development" and even did a couple of Pull Requests there.

{% include thumbnail.html image_path="assets/images/posts/jekyll-starter-kit/google-web-starter-kit-prs.jpg" caption="Google Web Starter Kit PRs" %}

In the Google Repo I learned a lot about PWA and as I was building the features into my static websites, I noticed there weren't any materials out there about PWA features with Jekyll. I kept hearing the voice of Obi-Wan Kenobi in my head telling me "This is not the open-source way! You shouldn't keep this knowledge to yourself". So here it is - the **Jekyll Starter Kit** generator.

<!-- more -->

{% include thumbnail.html image_path="assets/images/posts/jekyll-starter-kit/jekyll-starter-kit.jpg" caption="Jekyll Starter Kit logo" %}

## What do you get

When you generate your website, it'll look like any other website you generate with Jekyll, no matter the options you choose.

{% include thumbnail.html image_path="assets/images/posts/jekyll-starter-kit/screenshot-jekyll-starter-kit-website.jpg" caption="Jekyll Starter Kit logo" %}

Some of the options are basic like the option to choose between HTML or [Pug (Jade)](https://github.com/pugjs/pug), and `css`, `sass` or `scss`. Others are just best practices from [Google Web Starter Kit](https://github.com/google/web-starter-kit), like `humans` and `manifest` files. But the really good ones write ES2015 (with Babel) already configured (if you choose it), and even [Travis-CI](https://travis-ci.org/) integration to check your build with [html-proofer](https://github.com/gjtorikian/html-proofer).

This should get you off the ground with your new and shiny _Jekyll Progressive Web App_. But we don't just want to get you off the ground, and that's why we generate a service worker automagically every time you deploy the app that precaches resources (with [sw-precache](https://github.com/GoogleChrome/sw-precache)), and let you choose to deploy your website to GitHub pages or Firebase, with only one command.

If you don't know what service worker is, [Service Workers: an Introduction](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers) is a great article. Bottom line,  service worker means that not only can the user visit your website without an Internet connection, it also mean that when they comeback to your website, it will load much faster! And when the user clicks on some internal link in your website, again, it'll load much faster!

## How to use it

To install it you'll need [Yeoman](http://yeoman.io/). Then install the generator

```
npm install -g generator-jekyll-starter-kit
```

Generate your new project

```
yo jekyll-starter-kit
```

If you need more info look at the [GitHub Repo](https://github.com/nirgn975/jekyll-starter-kit).

To make sure you don't run into issues I wrote tests, a lot of tests! The tests were written with [mocha](https://mochajs.org/), and with the priority to get to 100% coverage. Every option and test was simulated so you can get the right configuration for your project. But if you still need some help we can chat in the [gitter room](https://gitter.im/jekyll_starter_kit/Lobby).

If you would like to help make this generator better, you're awesome! Go to the [Want to help](https://github.com/nirgn975/jekyll-starter-kit#want-to-help) section in the README and start from there.
