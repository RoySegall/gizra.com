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

## Ingredients - how it works

Let's overview what's bundled into Drupal Elm Starter recently and who is responsible for what.

 - Upon a push, GitHub invokes Travis to start a build, just the standard like at many projects at GitHub since a long time.
 - Travis executes a set of shell scripts (https://github.com/Gizra/drupal-elm-starter/blob/master/.travis.yml#L9) according to the build matrix (https://docs.travis-ci.com/user/customizing-the-build#Build-Matrix)
 - Docker Compose (https://github.com/Gizra/drupal-elm-starter/blob/master/ci-scripts/docker\_files/docker-compose.yml) launches two containers, one with the application itself, the other with a Selenium Grid (https://github.com/zalando/zalenium).
 - Zalenium records a video of the WDIO tests (https://github.com/zalando/zalenium#using-it)
 - Google Drive hosts the videos of the failed tests (https://github.com/Gizra/drupal-elm-starter/blob/master/ci-scripts/test_server.sh#L77)
 - Gizra Robot (https://github.com/Gizra-robot) posts a comment on the conversation thread of the pull request (https://github.com/Gizra/drupal-elm-starter/blob/master/ci-scripts/test_server.sh#L94)

You can see an example video of such type at this pull request: https://github.com/Gizra/drupal-elm-starter/pull/93#issuecomment-298260575
And we already started to use it for client projects, not only this mother ship project and that just allows you to start debugging much faster after you see the unfortunate news from Travis that something is broken.

## Lessons learned

I joined Gizra three months ago, and the Gizra Way (https://www.thegizraway.com/) helped a lot to accomplish this task. Needless to say, debugging Travis is hard. And then, you need to wait. And wait. A lot. Then your issue has a timebox on it (https://github.com/Gizra/drupal-elm-starter/issues/83), so hard things must be done quickly and with following the best practises. Well, isn't it impossible after all?

### Dissect steps
It seems to be obvious that you need to break the problem into smaller chunks, but when the testability is so problematic, you must follow this principle very strictly. In this case, the most helpful was to test the different units in the simplest environment as possible. For instance there's a Bash script that's responsible for the GitHub upload. Instead of launching the script via Travis or via a similar local environment (https://docs.travis-ci.com/user/common-build-problems/#Running-a-Container-Based-Docker-Image-Locally), at the native local environment, just feeding the script with the proper environment variables, what Travis would do, helped to speed up the process to almost real time debuggability. Even a small Bash construct can be extracted and tested separately, same for a `curl` invocation that posts a comment on GitHub. So in the end, I enjoyed the efficiency that came from the way of testing all the things with the minimal needed context - without all the hassle.


### Invest in easy troubleshooting
It was a strong sign that we wanted to invest a significant amount to have this functionality at our project template, at Elm Starter, just to help future work. Similarly on the low level, it was mandatory at some point to be able to SSH into the Travis build ([todo link]). It's enabled for private repositories, but in our case, it was mandatory to write to Travis support and this way, for our public repository, it was possible to use this functionality. Then it helped a lot to understand why the process behaves differently than at the local environment.


### Contributing what you can
During the implementation, there were some issues with Zalenium, the side container which provided Selenium Grid and the video recording (https://github.com/zalando/zalenium/pull/92). It got merged to upstream 12 days, mostly the maintainer waited my answer. It is just a little documentation fix, but it might save fellow developers frustration. On my side, I had the confirmation from the most capable person that I should not try to use ```--abort-on-exit``` with that container. Such scenarios reinforces the best practise, give back what you have, either it is knowledge, a patch or a full-blown solution.
