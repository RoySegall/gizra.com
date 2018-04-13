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
If you're in a TL;DR mode, jump to the [explanation of the implementation](#how).

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
For systems with lots of logged in users, where the performance can vary a lot from release to release, it makes sense to execute it before each major release.

## Where?

If you're at the beginning of your project and it's critical to provide excellent performance and scalability, you can integrate Gatling.io into Travis. When your site is bootstrapped, it's perfectly possible to execute a stress test and define a threshold for the throughput and let Travis fail if the result does not exceed the defined value. Be prepared that this will slightly increase the instability of your Travis builds, as the available resources in the environment what Travis provides are not fully stable, sometimes there will be failures and just at the next build, it might pass eventually.
Despite that, it can be a very appealing option to ensure that the performance and the scalability does not degrade during the sprints.

In addition, you would like to perform a test in a production-like environment too, as Travis won't tell you if your infrastructure or service provider lags behind the promises. A production-like environment has:
 - the same amount of bandwidth as production
 - the same database as production (except sanitization)
 - the same level of hardware resources

You can safely ignore that the live site has real users, but your other environment does not, as the stress test will ideally reach the limits of the stack regardless of existing human users.
In addition to Travis, you might be able to execute the tests from your `local` environment, but you can benefit from a hosted service, like [BlazeMeter](https://www.blazemeter.com/) a lot (post a comment if you know a better alternative). Why not locally? The service can make sure and can monitor that your test execution is not limited by:
 - the available bandwidth
 - the computing resources of the test executor machine
 - the geographical distance to the target

There are these and other factors that affects the realistic execution, using a service can help you to avoid these pitfalls.

## Why?

As you're reading this paragraph, likely you have your own answers, my short answer would be to be able to spot problems before it happens, such gotchas what I've seen in the past:
 - Under-performing hosting provider
 - Misconfigured Varnish
 - Not functioning anonymous page cache
 - Not scalable algorithm in custom/contrib code
 - Insufficient bandwidth available (compared to all the static assets on the site)

That's actually an exciting problem-solving game to analyze the output and understand what kind of problems are there if any.

## How?
<a name="how"></a>
Now after reading my various thoughts on stress testing, let's craft one test together against Gizra.com.

Have you noticed that we use Scala to describe the tests? Don't worry, with all the great [tutorials](https://gatling.io/docs/current/quickstart/) and [examples](https://gatling.io/docs/current/cookbook/), no Scala knowledge is needed, a little experience with functional programming is just a plus.

Let's incrementally add new pieces to a small building block together until we arrive to an executable test.

### A simple HTTP request

To issue a single static HTTP request, it can be as simple as:
```scala
val scn = scenario("Gizra")
    .exec(http("request_0")
      .get("/blog")
    )
```

Here, we issue a single HTTP request towards the host, to retrieve the [blog page](https://www.gizra.com/blog/). None of the images, CSS or JS files will be retrieved, just this single URL, nothing else. We will add the base URL handling at a later step.

### Headers

Real browsers do send various headers alongside the request, we can make it more realistic this way:_
```scala
val httpProtocol = http
  .acceptHeader("*/*")
  .acceptEncodingHeader("gzip, deflate")
  .acceptLanguageHeader("en-US,en;q=0.5")
  .doNotTrackHeader("1")
  .userAgentHeader("Mozilla/5.0 (X11; Linux x86_64; rv:58.0) Gecko/20100101 Firefox/58.0")

val headers_0 = Map(
  "Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
  "Upgrade-Insecure-Requests" -> "1")

val scn = scenario("Gizra")
    .exec(http("request_0")
      .get("/blog")
      .headers(headers_0)
    )
```

We have the ability to define global headers via the [http protocol](https://gatling.io/docs/2.3/http/http_protocol/) and also for [each request](https://gatling.io/docs/2.3/http/http_request/#headers).
Right now we did not connect the `httpProtocol` with our `scn` scenario, it will happen when we define our users.

### Dynamic HTTP request

Let's say we'd like to simulate a user who arrives to the blog page and visits the first blog entry. Then what's the URL of that first item? It's only possible to know from the response of the first query, fortunately Gatling gives us the ability to parse the result and use it in the next request this way:
```scala
  val scn = scenario("Gizra")
    .exec(http("request_0")
      .get("/blog")
      .check(css("#blog-page .content:first-of-type a", "href")).saveAs("blogentry")
    )
    .exec(http("request_1")
      .get(blogentry)
    )
```

If you test a webservice and you need to use `jsonPath` or `xPath`, that's [doable](https://gatling.io/docs/2.3/http/http_check/) as well.

### Visitors

Until now, what we did was exactly like a browser-based automated test. In the end, we defined how and what should be downloaded via HTTP requests, indeed using a novel syntax.
We have our `httpProtocol` and the `scn` scenario, we can ask Gatling to create some users and gradually put more pressure on the site and the infrastructure:
```scala
  setUp(scn.inject(
    rampUsers(10) over(10 seconds),
  )).protocols(httpProtocol)
```

We ask Gatling that during 10 seconds, add 10 users. There are many strategies that Gatling can follow when injecting new [sessions](https://gatling.io/docs/2.3/general/simulation_setup/) to the simulation.

### A simulation class

Now it's the time to use a bit more from Scala, but actually it does not vary a lot from test to test:
```scala
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class GizraCom extends Simulation {
  val testServerUrl = scala.util.Properties.envOrElse("GIZRA_COM_BASE_URL", "https://www.gizra.com")

  setUp(scn.inject(
    rampUsers(10) over(10 seconds),
  )).protocols(httpProtocol)

  val httpProtocol = http
    .acceptHeader("*/*")
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .doNotTrackHeader("1")
    .userAgentHeader("Mozilla/5.0 (X11; Linux x86_64; rv:58.0) Gecko/20100101 Firefox/58.0")

  val scn = scenario("Gizra")
    .exec(http("request_0")
      .get("/blog")
      .check(css("#blog-page .content:first-of-type a", "href")).saveAs("blogentry")
    )
    .exec(http("request_1")
      .get(blogentry)
    )
}
```

### A wrapper to execute the things locally

During the implementation of your test, you surely want to execute it locally, a little script can be convenient, especially if you are not alone on your project:
```shell
#!/bin/bash

BASE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
if [ ! -d "$BASE_DIR"/gatling-charts-highcharts-bundle-2.3.0 ]; then
  cd "$BASE_DIR" || exit 1
  wget https://repo1.maven.org/maven2/io/gatling/highcharts/gatling-charts-highcharts-bundle/2.3.0/gatling-charts-highcharts-bundle-2.3.0-bundle.zip
  unzip gatling-charts-highcharts-bundle-2.3.0-bundle.zip
  rm gatling-charts-highcharts-bundle-2.3.0-bundle.zip
  cd gatling-charts-highcharts-bundle-2.3.0 || exit 1
  ln -s "$BASE_DIR"/GizraCom.scala user-files/simulations/
fi
cd "$BASE_DIR"/gatling-charts-highcharts-bundle-2.3.0 || exit 1
./bin/gatling.sh -s GizraCom
```

### Execute it on BlazeMeter

Taurus configfile:
```yml
execution:
- executor: gatling
  scenario: sample

scenarios:
  sample:
    script: GizraCom.scala
    simulation: GizraCom
    keepalive: true
```

This is needed for BlazeMeter to be able to recognize the Gatling test, it's fully specific to this service, if you execute it locally, you simply don't need it.

After all these, you can launch the simulation:

And have the results likewise:

### Simulation recorder

There is a lazy way to be able to [record simulation](https://gatling.io/docs/2.3/http/recorder/) using a GUI, if you just start to experiment with Gatling, try it out, but for any non-trivial tests, you need to touch the Scala code. For such tests where you're interested in downloading a lots of static resources and it would be quite boring to code it manually, give it a shot, it works steadily.

## Takeaway

Stress testing has a friendly learning curve if you already have the mindset for browser-based testing, let's start it today and you can make commitments to your client that your site will scale.
