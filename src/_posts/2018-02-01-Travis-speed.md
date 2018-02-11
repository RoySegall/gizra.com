---
title: Travis - The need for speed
tags:
  - Devops
  - Travis
  - Drupal
  - Elm
  - Drupal-planet
permalink: "/content/travis-speed/"
image: "/assets/images/posts/travis-speed/car.png"
layout: post
published: true
author: AronNovak
description: "Every second matters, do not demoralize your team"
---


Chances are that you already using Travis or another Cool CI to execute your tests, therefore everyone politely waits for CI checks before even think about merging, right? After a while, this tidiness disappears and you click on the merge: it's a trivial change and I need it now. If it happens (often), it's the responsibility of those who worked on all those scripts tthat Travis crunches. What are the trivial and not so trivial options to make the team always be willing to wait for the completion?

## Caching

At start, if your `.travis.yml` lacks the `cache:` directive, you may start with the simplest form, that's about caching dependencies, for a Drupal-based projects, it's sane to think about cache all the modules and libraries that must be downloaded to build the project (it uses a buildsystem, doesn't it?). So even a variant of:
```yml
cache:
  directories:
    - $HOME/.composer/cache/files
```
or for Drush

```yml
cache:
  directories:
    - $HOME/.drush/cache
```

It's explained well in the verbose [documentation](https://docs.travis-ci.com/user/caching) at Travis-ci.com. Before your script is executed, Travis populates the cache directories automatically from a successful previous build. If your project has only a few packages, it won't help much, actually it can make the things even slower, what's critical that we need to cache slow-to-generate, easy-to-download materials. Caching a large ZIP file would not make sense for example, caching many small ones from multiple origin servers would be more sane.

From this point, you could just read the standard documentation instead of this blog post, but we have as well icing on the cake for you. A Drupal installation can take several minutes, initializing all the modules, executing the logic of the install profile and so on. Travis is kind enough to provide a bird-eye-view on what eats up build time:

{% include thumbnail.html image_path="assets/images/posts/travis-speed/travis-benchmark.gif" caption="WebdriverI/O in action"%}

Mind the bottleneck when making a decision on what to cache and how.
For us, it meant to cache the installed, initialized Drupal database and the full documentroot. Cache invalidation is hard, we cannot decline that, but it turned out to be a good compromise between complexity and execution speed gain, check our examples:
 - [`pre_cache.sh`](https://github.com/Gizra/drupal-elm-starter/blob/master/ci-scripts/pre_cache.sh)
 - [`post_cache.sh`](https://github.com/Gizra/drupal-elm-starter/blob/master/ci-scripts/post_cache.sh)

Do your homework and cache what's the most resource-consuming to generate, SQL database, built source code or compiled binary, Travis is here to assist with that.

## Software versions

## Make it parallel

## Utilize available memory

## Build your own Docker image

## +1 - Debug with ease

## Takeaway
