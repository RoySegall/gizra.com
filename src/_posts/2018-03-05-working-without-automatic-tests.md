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
description: "Can our applications be successful without automatic tests? Can we write good code without automatic tests?"
author: NaderSafadi
---

We have covered the subject of automatic tests quite a lot here at Gizra and I'm sure that there are a lot of posts and articles covering the subject. However, I'm having a bizarre experience lately while writing new features that I had to share it with you folks. Keep in mind that I don't write a lot of blog posts and I always feared following up on my previous smashing hit [Bootstrap custom breakpoint](/content/custom-breakpoint-bootstrap-sass/) :)

So the experience I want to talk about was that of insecurity, which was quite odd for me considering I'm always proud of my code until [@amitaibu](https://github.com/amitaibu) reviews it and smashes my ego to pieces (which I learned to love).

In the past few months while working mainly on Elm apps, I have been writing tests on each possible level following the addition of [WDIO](/content/travis-wdio/) to our #theGizraWay. At the time it didn't seem like a huge deal to me. For sure, I knew it was an awesome thing but I didn't grasp the magnitude of the situation that I will clarify in a minute. Without realizing it I was writing much better code thanks to [elm-tests](https://github.com/elm-community/elm-test), SimpleTests in Drupal, and WDIO.

What we are using for testing is the following:
1. [Elm-Tests for elm apps.](/content/elm-in-drupal-panels/) My projects were specific to apps inside of a Drupal site - inline apps - not headless apps but the tests apply the same for both methods.
2. WDIO for the application's workflow. The technology doesn't matter.
3. SimpleTests for the API functions we write in Drupal to handle Elm's data from the backend and any other logic needed for the project, but definitely API functions.

After working on some of our own projects with these three as a core part of *EACH* pull request, I was so used to it that I was hit with a paralyzing fear (no exaggeration here) when I started working on a new project that we inherited that we couldn't hook up Travis and adding WDIO tests (for reasons that I won't get into here). I felt like each new feature or change is faulty and suddenly I wasn't sure about anything I wrote, even though I spent the first three years of my web-developing career (working for another company) without any of these tools. I doubted every line of code which brought me to review myself 3 or 4 times and then perform manual tests with different users, man, I wouldn't wish this on my enemies. It was so time consuming, boring, and counter productive that I grew to dread working on this project.

It seems obvious that there should always be time for testing each project, no matter the technology used to develop it but somehow we are still doing it, we are still prioritizing new cool features over writing automatic tests for those features (The "we" here is the clients).

Let's say you have an idea or an existing successful business, and all you want is a top notch cool app to serve your clients well and make your business hip and modern. But you are a bit short on budget so you want your application to work in the fastest, cheapest way.

You contact a web-development shop and you like them, they seem to get you and get your business, get your awesome ideas and cool features, they are excited to start working on your project, they start developing features and all is going well. You just want to see your cool features on the web.

You get the first pre alpha version containing some of the cool ideas, everything seems to be awesome, the progress is awesome. Well, here's where the trouble starts, when the application becomes a bit more complicated, features start to override each other and the initial code somewhere down the line has to be modified, it just has to, there's no way around it.

This part of the development will cost you more than you had in mind for sure because there's no way to know if each of the initial features are still working well, you will start feeling anxious about recurring bugs, why the heck stuff that were working before suddenly stopped, it doesn't seem right to you and now you have to check the whole app on each new release, even though the developers are quite good but you lost trust, something broke, in short, it would have been more efficient and far less costly to just test everything, all of it, leave nothing to chance, if everything is tested, well, nothing can go wrong (that's a lie, bugs will always find a way in).

That was just my rant about the mindset of believing that all will be well, QA will catch our bugs and hey, that's why we have staging environments, business owners will test and check everything there, but the business owners and QA people, no matter how amazing at their job they are, they are still human, why the heck do we give a job that a bot can do to a human? It seems to me that we are still trying to stop evolution, bots will take over our world, get over it, there's no way around. [Skynet is coming!]

Just kidding, you still need QA, this is not a replacement, this is just making QA's life easier, instead of testing the whole app each time, they are confident that they only need to test what is stated in the release, because what automatic tests are quite good at catching are permissions for different roles of users for various features, it's really easy to write a permission test and it will save the QA team the trouble of checking permissions for each feature each time a new feature is developed which you should be doing if you don't have any kind of automated tests. There are just some things that you can't just test each time a new release has been made, core site functionality that is developed and then just expected to work all the time, but you can't expect that unless you have some sort of automated tests.

From a developer's point of view, at first it may seem that it's just boring, hard or even unnecessary but believe me, once you get used to it, you never want to code without it, you are always confident that your code really works and you don't have to go into different users to test with different permissions to check that a feature works, you don't have to worry about messing up other features or logic.

You need to make sure to integrate different types of tests for each type of technology you are using, don't focus on one layer and leave the rest. It just makes you a better developer and more importantly a more chilled developer, you are confident, you are covered, you are one of the best, what more do you need?

I don't get it, TELL ME WHAT MORE DO YOU NEED?
