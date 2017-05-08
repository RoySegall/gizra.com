---
title: Travis and WDIO - breaking out of the black box
tags:
  - Devops
  - Travis
  - Drupal Elm Starter
permalink: "/content/travis-wdio/"
layout: post
published: false
description: "Breaking tests is easy, finding the root cause should not be."
---

Chances are that you already using Travis or another Cool CI to execute your tests, to deploy and so on. Very often getting binary or textual output from the execution is enough, knowing that which tests are failing is enough to start to debug the problematic code part in a minute. With WDIO and with an architecture, where frontend and backend is decoupled, it's much more complicated. It might be that the browser could not click on an element, or the frontend could not contact the backend, or the frontend has a runtime error (you might face with it, but at Gizra, we use Elm, where it's practically impossible), who knows, even the browser could crash due to lack of memory. One way is to manually start reproducing what Travis does, it's fun at first time, but doing it again and again is just a waste of time. Then our CTO, Amitai gave excellent pointers about Dockerized Selenium, then insisted that having video recordings is much better than simple static screenshots and it was so true. These days at Gizra, on client projects, we can benefit of knowing exactly how and why our browser-based tests failed. There was just guessing before.
