---
title: Travis and WDIO - breaking out of the black box
tags:
  - Devops
  - Travis
  - Drupal Elm Starter
permalink: "/content/travis-wdio/"
layout: post
published: true
author: AronNovak
description: "Breaking tests is easy, finding the root cause should be likewise."
---

Chances are that you already using Travis or another Cool CI to execute your tests, to deploy and so on. Very often getting boolean or textual output from the execution is enough, knowing that which tests are failing is a good starting point to start to debug the problematic code part. In our case, with WebdriverI/O (referring it as WDIO later) and with an architecture, where frontend and backend is decoupled, it's much more complicated.

It might be that the browser could not click on an element, or the frontend could not contact the backend, or the frontend has a runtime error (you might face with it, but at Gizra, we use Elm, where it is practically impossible), who knows, even the browser could crash due to lack of memory, the same applies to Travis that might run out of memory. One way is to manually start reproducing what Travis does, it's fun at first time, but doing it again and again is just a waste of time. Then our CTO, Amitai gave excellent pointers about dockerized Selenium, then insisted that having video recordings is much better than simple static screenshots and it was so true.

These days at Gizra, on client projects, we can benefit of knowing exactly how and why our browser-based tests failed. The fact that we already used [Docker inside Travis](http://www.gizra.com/content/docker-travis-ci/) helped a lot, but this additional video recording on the browser based test makes the life of the developers much easier.

## Ingredients

Let's overview what's bundled into [Drupal Elm Starter](https://github.com/Gizra/drupal-elm-starter) recently and who is responsible for what.

Upon a push, GitHub invokes Travis to start a build, that is just the standard like at many projects at GitHub since a long time.

Travis executes a set of [shell scripts](https://github.com/Gizra/drupal-elm-starter/blob/master/.travis.yml#L9) according to the [build matrix](https://docs.travis-ci.com/user/customizing-the-build#Build-Matrix), the only noteworthy thing is that using the build matrix with environment variables can be used to test the things in parallel, like one element of the matrix is the WDIO test, another element could be any kind of [Lint](https://en.wikipedia.org/wiki/Lint_(software)) to scrutinize the code quality.

From now, we only focus on one element of the build matrix. Docker Compose [launches](https://github.com/Gizra/drupal-elm-starter/blob/master/ci-scripts/docker\_files/docker-compose.yml) two containers, one with the application and the test code, the other with a [Selenium Grid](https://github.com/zalando/zalenium). It also helps to talk the containers to [each other](https://docs.docker.com/compose/networking/) via expressive hostnames.

The WDIO executes our test suites, but the Selenium host is not localhost, but address of the other Docker container.

This way Zalenium is able to [record a video](https://github.com/zalando/zalenium#using-it) of the WDIO tests, it hosts the browser, the Selenium Grid and ffmpeg to encode the movie on-the-fly.

Google Drive hosts the videos of the [failed tests](https://github.com/Gizra/drupal-elm-starter/blob/master/ci-scripts/test_server.sh#L77). To use Google Drive programmatically, [several steps](https://github.com/Gizra/drupal-elm-starter/blob/master/server/README.md#google-drive-integration) are needed, but the [gdrive](https://github.com/prasmussen/gdrive) uploader tool had an excellent documentation about it.

In the very end, [Gizra Robot](https://github.com/Gizra-robot) posts a comment on the [conversation thread of the pull request](https://github.com/Gizra/drupal-elm-starter/blob/master/ci-scripts/test_server.sh#L94). Adding a robot user to GitHub [does not differ](https://help.github.com/articles/differences-between-user-and-organization-accounts/) from adding a human, you can create a new GitHub user and dedicate it to this purpose. The exact process is [documented](https://github.com/Gizra/drupal-elm-starter/blob/master/server/README.md#github-integration) in the repository.

### The result
You can see an example video of such type at a [recent pull request](https://github.com/Gizra/drupal-elm-starter/pull/93#issuecomment-298260575). The icing on the cake is that if you receive the GitHub notification email to your GMail inbox, you can launch a video straight from there via a YouTube player.


## Lessons learned

I joined Gizra three months ago, and the [Gizra Way](https://www.thegizraway.com/)'s timebox-escalation system helped a lot to accomplish this task, where many layers of the CI stack were new to me. Needless to say, debugging Travis is hard. And then, you need to wait. And wait. A lot. Then your issue has a [timebox](https://github.com/Gizra/drupal-elm-starter/issues/83) on it, so hard things must be done quickly and with following the best practises. Well, isn't it impossible after all? My experience is that this rigorous workflow helped me to find creative ways to solve the problems (not talking about ugly hacks here - just merely changing the way to find proper solutions), if the complexity is adequately calibrated to the developer, it triggers good stress that helps in problem solving too and contributes to the work satisfaction.

Let's see how I was led to make it happen, these are beyond this company handbook, as of course this is domain-specific, while a handbook should not be.

### Dissect steps
It seems to be obvious that you need to break the problem into smaller chunks, but when the testability is so problematic, you must follow this principle very strictly. In this case, the most helpful was to test the different units in the simplest environment as possible. For instance there's a Bash script that's responsible for the GitHub upload. Instead of launching the script via Travis or via a [similar local environment](https://docs.travis-ci.com/user/common-build-problems/#Running-a-Container-Based-Docker-Image-Locally), at the native local environment, just feeding the script with the proper environment variables, what Travis would do, helped to speed up the process to almost real time debuggability.

Even a small Bash construct can be extracted and tested separately, same for a `curl` invocation that posts a comment on GitHub. So in the end, I enjoyed the efficiency that came from the way of testing all the things with the minimal needed context - without all the hassle.

### Invest in easy troubleshooting
It was a strong sign that we wanted to invest a significant amount to have this functionality at our project template, at Elm Starter, just to help future work. Similarly on the low level, it was mandatory at some point to be able to SSH into the Travis build. It's enabled for private repositories, but in our case, it was mandatory to write to Travis support and this way, for our public repository, it was possible to use this functionality. Then it helped a lot to understand why the process behaves differently than at the local environment.

### Contributing what you can
During the implementation, there were some issues with Zalenium, the side container which provided Selenium Grid and the video recording (https://github.com/zalando/zalenium/pull/92). It got merged to upstream 12 days, mostly the maintainer waited my answer. It is just a little documentation fix, but it might save fellow developers frustration. On my side, I had the confirmation from the most capable person that I should not try to use ```--abort-on-exit``` with that container. Such scenarios reinforces the best practise, give back what you have, either it is knowledge, a patch or a full-blown solution.

## Takeaway

The solution that is publicly available at the [repository](https://github.com/Gizra/drupal-elm-starter/tree/master/ci-scripts) is easy to re-use in any project that has a similar browser-based test, the only criteria is that it should support the execution on a Selenium Grid. You might capture videos of your pure Simpletest, Behat, WDIO or Nightwatch.js (and who knows what kind of other test frameworks are out there in the wild) test suite and port this code from Drupal Elm Starter to easily understand why your test fails, the only criteria is that you should be able to execute Zalenium Docker container aside. Pull requests are more than welcome to make the process more robust or even sleeker!
