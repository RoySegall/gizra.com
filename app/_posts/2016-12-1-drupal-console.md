---
title: Improve Drupal 8 project using DrupalConsole
tags:
  - Drupal-planet
  - RESTful
permalink: "/content/og-8-drupal-console"
layout: post
author: RoySegall
image: /assets/images/posts/drupal-console/console.jpg
description: "Normally in Drupal we don’t need to worry about authentication. This post
explains how to handle authentication for decoupled sites with Angular JS."
---

{% include setup %}

My main job at Gizra is working with Harvard on a project called OpenScholar.
OpenScholar is distirbution for academic instotution and provide mini site for 
each proferssor, faculty, department or projects. I'm been doing it for the last
4 years and I love this project. You can find a challenge good in any issue, and
as a programmer this is what you looking for. Challenges. 

OG is one of the main modules which power OpenScholar And if you ever worked on a 
Drupal site with OG you are very familiar with the notorious field page which
Amitai mentioned in a blog post which talks about 
[OG8 Development Mindset](http://www.gizra.com/content/og8-development-mindset/#simplifying-and-hiding-advanced-features).
One of the many things I wanted to improve in OG8 is the UX of the page, but 
since this page have no plan to appear in OG8 I was feeling pretty sad.

So, as good developer I sat down and start thinking out of the box. We need to
add OG fields easilly, but the page, as I mentioned, have no plan to debut in 
any new form. I thought harder and understand one of the key principles in any 
project - what is your target crowed? Amm... Developers! What developers are 
using the most? CLI. 

If you used Drupal 8 before you know that DrupalConsole is a powerful tool. Very
similar to yo generator, DrupalConsole ask you question about the operation: if 
you wanted to create a module it will start to ask you the name, future path, 
depandecies and more. The coolest trick is the completion feature which give you
autocomplete from a pre defined array of values.

<!-- more -->
