---
title: "Jekyll Progressive Web App Starter Kit Generator"
tags:
  - Jekyll
  - Yeoman
  - Progressive Web App
permalink: "/content/jekyll-starter-kit"
layout: post
author: NirGalon
image: /assets/images/posts/jekyll-starter-kit/thumb.jpg
published: true
---

{% include setup %}

I love [Jekyll](jekyllrb.com). I think it's a great tool! But lately I have been hearing a lot about Progressive Web Apps (PWA) - you know the kind of web apps that feel like native apps, with a welcome screen, a shortcut on your phone, offline support, and more. So, I started implementing these new and shiny toys, one by one, on a bunch of static websites I built with Jekyll.

During this endeavor I ran into [Google Web Starter Kit](https://github.com/google/web-starter-kit) - "a Boilerplating & Tooling for Multi-Device Development" and even did a couple of Pull Requests there.

{% include thumbnail.html image_path="assets/images/posts/jekyll-starter-kit/google-web-starter-kit-prs.jpg" caption="Google Web Starter Kit PRs" %}

In the Google Repo I learned a lot about PWA, and as I was building the features into my static websites, I noticed there weren't any materials out there about PWA features with Jekyll. I kept hearing the voice of Obi-Wan Kenobi in my head telling me "This is not the open-source way! You shouldn't keep this knowledge to yourself". So here it is - the **Jekyll Starter Kit** generator.

<!-- more -->

{% include thumbnail.html image_path="assets/images/posts/jekyll-starter-kit/jekyll-starter-kit.jpg" caption="Jekyll Starter Kit logo" %}

## What do you get

When you generate your website, it'll look like any other website you generate with Jekyll, no matter the options you choose.

{% include thumbnail.html image_path="assets/images/posts/jekyll-starter-kit/screenshot-jekyll-starter-kit-website.jpg" caption="Jekyll Starter Kit logo" %}

Some of the options are basic like the option to choose between HTML or [Pug (Jade)](https://github.com/pugjs/pug), and `css`, `sass` or `scss`. Others are just best practices from [Google Web Starter Kit](https://github.com/google/web-starter-kit), like `humans` and `manifest` files. But the really good ones write ES2015 (with Babel) already configured (if you choose it).

This should get you off the ground with your new and shiny _Jekyll Progressive Web App_. But we don't just want to get you off the ground, and that's why a service worker is automagically generated every time you deploy the app that precaches resources (with [sw-precache](https://github.com/GoogleChrome/sw-precache)).

To learn about service workers, [Service Workers: an Introduction](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers) is a great article. Bottom line, service workers fetch all the static resources after the page finishes loading and save them in the browser cache. This means that not only can the user visit your website without an Internet connection, it also mean that when they come back to your website, it will load much faster (because the browser will check the cache first)! And when the user clicks on some internal link in your website, again, it'll load much faster (because the next page is also a static page, the service worker already loads it and saves it in the cache)!

Tests are also very important and this is not something we see much in static websites. That's why we add the [Travis-CI](https://travis-ci.org/) option. All you have to do is enable the service - if you choose this option you'll get a `.travis.yml` file, already configured and it'll check your build output with [html-proofer](https://github.com/gjtorikian/html-proofer).

Some of the things html-proofer checks:

  * Every `img` has an `alt` tag, internal and external `src` aren't broken.
  * Every `a` (internal and external) is working.
  * Your external `script` load, and the internal `script` references are valid.
  * Whether your HTML markup is valid.

Finally, when you finish building you website, you'll want to deploy it. And we got you covered on that as well. You can choose to deploy your shiny new website to GitHub (with gh-pages) or to Firebase. Whatever you choose you'll only have to type one command

```
npm run gulp deploy
```

# A case study

Take my own little resume website - using the Jekyll Starter Kit generator I converted it from just a Jekyll website to a full PWA website.

The old website had 7 load requests and finished loading in 370 ms.

{% include thumbnail.html image_path="assets/images/posts/jekyll-starter-kit/resume-old-network-tab.jpg" caption="Old Resume Network Tab" %}

The new website has 8 load requests (with the new service worker) and finishes loading in 466 ms. But as you can see, the `sw.js` file was loaded after the site finished loading; it did not interrupt the user as seen after the red line in the `Timeline` section).

{% include thumbnail.html image_path="assets/images/posts/jekyll-starter-kit/resume-new-network-tab.jpg" caption="New Resume Network Tab" %}

So, we got a little overhead in our tiny one page website, but on the second reload we cut back the file size to 97KB and finished to load the website in 160 ms (about a third), because almost all of the files loaded from the service worker.

{% include thumbnail.html image_path="assets/images/posts/jekyll-starter-kit/resume-new-network-reload.jpg" caption="New Resume After Reload" %}

And after a couple of milliseconds it loaded the the `sw.js` from cache (because it didn't change) and the `Finish` text updated to 1.18s (but this doesn't matter to us because the website already finished loading).

{% include thumbnail.html image_path="assets/images/posts/jekyll-starter-kit/resume-new-reload-with-sw.jpg" caption="New Resume After Reload With SW" %}

## How to use it

To install, you'll need [Yeoman](http://yeoman.io/) and then install the generator.

```
npm install -g generator-jekyll-starter-kit
```

Generate your new project.

```
yo jekyll-starter-kit
```

If you need more info, check out the [GitHub Repo](https://github.com/nirgn975/jekyll-starter-kit).

To make sure you don't run into issues I wrote tests, a lot of tests! [Coveralls](https://coveralls.io) is a service that check your code and tries to figure out how much of your codebase is covered with tests. I make it a priority to get to 100% coverage, and I have the badge to prove it (;

The tests were written with [mocha](https://mochajs.org/) and simulate every possibility you can choose in the generator, that way you can rest assure you'll get the right configuration for your project. But if you still need some help, we can chat in the [gitter room](https://gitter.im/jekyll_starter_kit/Lobby).

If you would like to help make this generator better, you're awesome! Go to the [Want to help](https://github.com/nirgn975/jekyll-starter-kit#want-to-help) section in the README and start from there.
