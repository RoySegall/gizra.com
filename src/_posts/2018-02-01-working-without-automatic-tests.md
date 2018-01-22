---
title: "My new insecurity: Working without automatic tests."
tags:
  - Automatic Testing
  - Elm
  - WDIO
  - SimpleTests
permalink: "/content/working-without-automatic-tests/"
layout: post
image: "/assets/images/posts/working-without-automatic-tests/thumb.jpg"
description: "Can we write good code without automatic tests?"
author: NaderSafadi
---

We have covered the subject of automatic tests quite a lot here at Gizra and I'm sure (and read some) there're a lot of posts and articles covering the subject but I'm having a bizarre experience lately while writing any new features that I had to share it with you folks, keeping in mind I don't write a lot of blog posts and I always feared following up on my previous smashing hit [Bootstrap custom breakpoint](/content/custom-breakpoint-bootstrap-sass/) :)

So the experience I want to talk about was that of insecurity, which was quite odd for me considering I'm quite vain and I'm always proud of my code until [@amitaibu](https://github.com/amitaibu) reviews it and smashes my ego to pieces (which I learned to love).
In the past few months while working mainly on Elm apps, I have been writing tests on each possible level following the addition of [WDIO](/content/travis-wdio/) to our #theGizraWay which at the time didn't seem like a huge deal for me, for sure, I knew it was an awesome thing but didn't grasp the magnitude of the situation which will be clear in a minute why. Without realizing it I was writing a much better code thanks to [elm-tests](https://github.com/elm-community/elm-test), SimpleTests in Drupal, and WDIO.

1. Elm-Tests for elm's view functions.
2. WDIO for the application's work flow.
3. SimpleTests for the API functions I was writing in Drupal to handle Elm's data from the backend.

After working on some of our own projects with those three as a core part of *EACH* pull request I got so used to it that I was hit with a a paralyzing fear (no exaggeration here) when I started working on new projects that we inherited and we couldn't handle hooking up Travis and adding WDIO tests (for reasons that I won't get into here). I felt like each new feature or change is faulty and suddenly I wasn't sure about anything I wrote even though I spent the first three years of my developer career (working for another company) without any of those things and sure enough I was doubtful of every line of code which brought me to review myself 3 or 4 times and then testing manually with different users, man, I don't wish this for my enemies, it was so much time consuming, boring, and counter productive that I grew to dislike those projects.

It seems obvious that there should always be time for testing for each project, not matter what's the technology used to develop it but somehow we are still doing it, we are still prioritizing new cool features over writing automatic testing those features (the we here is the client).

Business owner....
