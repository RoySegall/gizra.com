---
title: Stress testing - crash your site
tags:
  - Devops
  - Drupal
  - Gatling
  - Drupal-planet
permalink: "/content/stress-testing/"
image: "/assets/images/posts/stress-testing/thumb.jpg"
layout: post
published: true
author: AronNovak
description: "Let's learn how to crash your site before your visitors would do it"
---

Either if you'd like to challenge your infrastructure provider, your development team or looking forward to optimize the scalability of your web application, join us for a short adventure to stress test gizra.com.

## Who?

Who should we trust by performing stress testing? An old player, like [JMeter](https://jmeter.apache.org/), or newcomers like [Gatling.io](https://gatling.io/) or [Locust.io](https://locust.io/)?
Here we explain how we ended up using Gatling.io for our latest stress testing issue.
We discarded JMeter as it has a hard-to-understand UI and an XML-based, [not human-friendly](https://jmeter.apache.org/demos/ForEachTest2.jmx) file format. There are subtle technical differences in the background related to the connection handling and the overall performance of the test execution, but in our scenario, we were far from the situation that the tool would limit us to be able to get realistic picture of the behavior of the application.

Locus.io on the other hand has an expressive language, we started to build tests with it, but when it came to resource processing, variable handling, plugins, it turned out that Gatling.io has a [much broader](https://github.com/search?utf8=%E2%9C%93&q=gatling&type=) ecosystem than [Locust.io](https://github.com/search?utf8=%E2%9C%93&q=locust&type=). When you have an actual problem to solve, you more likely find an example or a solution for Gatling.io. Needless to say, it can change easily in the future.

The icing on the cake that Gatling.io provides a framework to write your tests in a functional language, that's something [we all love](https://www.gizra.com/content/selling-item-for-millions-elm-headless-drupal/)!

## What?

### What is stress testing?

Stress testing is really not web development specific, you can stress test [your CPU](https://en.wikipedia.org/wiki/Prime95), [your network](https://github.com/jwbensley/EtherateMT) and eventually your website too. There are various goals:
 - determine the available capacity
 - know how the system degrades when it fails to perform perfectly
 - determine when the system becomes totally unavailable

### What do you want to stress test?

In case of stress testing a website, there is a decision on what to stress test actually:
 - the infrastructure where the given instance of the site is hosted
 - one of the caching layers that's present (CDN, Drupal page cache and so on)
 - for anonymous visitors or for logged in users
 - with or without executing the frontend code of the website

From the above factors, you can mix your set of goals and during the implementation, you need to pay attention to follow the decision. For instance if you would like to exclude Varnish cache from the testing, but still, you would allow Drupal to use page cache, you need to some tricks, like setting an invalid session cookie header that prevents Varnish to cache, but still, Drupal would use the page cache as usual.

## When?

When is it the right time to execute the tests?
We could just say 'always', but a bit more sophisticated answer depends on your application. If it's mostly for anonymous users, stress-testing it in a production-like environment once, just near the launch seems to be adequate.
For systems with lots of logged in users, where the performance can vary a lot from release to release, it makes a lot of sense to execute it before each major release.

## Where?

If you're at the beginning of your project and it's critical to provide excellent performance and scalability, you can integrate Gatling.io into Travis. When your site is bootstrapped, it's perfectly possible to execute a stress test and define a threshold for the throughput and let Travis fail if the result does not exceed the defined value.

In addition, you would like to perform a test in a production-like environment too, as Travis won't tell you if your infrastructure or service provider lags behind the promises. A production-like environment has:
 - the same amount of bandwidth as production
 - the same database as production (except sanitization)
 - the same level of hardware resources

You can safely ignore that the live site has real users, but your other environment does not, as the stress test will ideally reach the limits of the stack regardless of existing human users.

## Why?

As you're reading this paragraph, likely you have your own answers, my short answer would be to be able to spot problems before it happens, such gotchas what I've seen in the past:
 - Under-performing hosting provider
 - Misconfigured Varnish
 - Not functioning anonymous page cache
 - Not scalable algorithm in custom/contrib code
 - Insufficient bandwidth available (compared to all the static assets on the site)

That's actually an exciting problem-solving game to analyze the output and understand what kind of problems are there if any.

## How?

Now after reading my various thoughts on stress testing, let's craft one test together against Gizra.com

## Takeaway

