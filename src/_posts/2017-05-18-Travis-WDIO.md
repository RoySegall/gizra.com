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

Chances are that you already using Travis or another Cool CI to execute your tests, to deploy and so on. Very often getting binary or textual output from the execution is enough, knowing that which tests are failing is enough to start to debug the problematic code part in a minute. With WebdriverI/O and with an architecture, where frontend and backend is decoupled, it's much more complicated. It might be that the browser could not click on an element, or the frontend could not contact the backend, or the frontend has a runtime error (you might face with it, but at Gizra, we use Elm, where it's practically impossible), who knows, even the browser could crash due to lack of memory. One way is to manually start reproducing what Travis does, it's fun at first time, but doing it again and again is just a waste of time. Then our CTO, Amitai gave excellent pointers about Dockerized Selenium, then insisted that having video recordings is much better than simple static screenshots and it was so true. These days at Gizra, on client projects, we can benefit of knowing exactly how and why our browser-based tests failed. There was just guessing before.

## A word on browser-based testing


## Ingredients - how it works

Let's quickly overview what was used for this and who is responsible for what.

 - Upon a push, GitHub invokes Travis to start a build, just the standard.
 - Travis launches executes a set of shell scripts (https://github.com/Gizra/drupal-elm-starter/blob/master/.travis.yml#L9)
 - Docker Compose (https://github.com/Gizra/drupal-elm-starter/blob/master/ci-scripts/docker\_files/docker-compose.yml) launches two containers, one with the application itself, the other with a Selenium Grid (https://github.com/zalando/zalenium).
 - Zalenium records a video of the WDIO tests (https://github.com/zalando/zalenium#using-it)
 - Google Drive hosts the videos of the failed tests (https://github.com/Gizra/drupal-elm-starter/blob/master/ci-scripts/test_server.sh#L77)
 - Gizra Robot (https://github.com/Gizra-robot) posts a comment on the conversation thread of the pull request (https://github.com/Gizra/drupal-elm-starter/blob/master/ci-scripts/test_server.sh#L94)

You can see an example video of such type at this pull request: https://github.com/Gizra/drupal-elm-starter/pull/93#issuecomment-298260575
And we already started to use it for client projects, not only this mother ship project and that just allows you to start debugging much faster after you see the unfortunate news from Travis that something is broken.

## Lessons learned

I joined Gizra three months ago, and the Gizra Way (book link) helped a lot to accomplish this task. Needless to say, debugging Travis is hard. Your resources are limited, the connectivity is limited, even when you can SSH into the build environment. And then, you need to wait. And wait. A lot.

### Step by step

