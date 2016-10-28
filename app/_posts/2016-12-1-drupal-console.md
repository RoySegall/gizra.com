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

My primary job at Gizra is working with Harvard on a project called OpenScholar.
OpenScholar is a distribution for the academic institution and provides a mini 
site for each professor, faculty, department or projects. I'm doing it for the 
last Four years and I love this project. You can find a challenge good in any 
issue, and as a programmer, this is what you are looking. Challenges. 

OG is one of the main modules which power OpenScholar And if you ever worked on a 
Drupal site with OG you are very familiar with the notorious field page which
Amitai mentioned in a blog post which talks about 
[OG8 Development Mindset](http://www.gizra.com/content/og8-development-mindset/#simplifying-and-hiding-advanced-features).
One of the many things I wanted to improve in OG8 is the UX of the page, but 
because this page has no plan to appear in OG8, I was feeling pretty sad.

So, as a good developer, I sat down and started thinking out of the box. We need
to add OG fields quickly, but the page, as I mentioned, have no plan to debut in
any new form. I thought harder and understood one of the fundamental principles 
in any project - who is your audience? Amm... Developers! What developers are 
using the most? CLI. 

If you used Drupal 8 before you know that DrupalConsole is a powerful tool, Very
similar to yo generator, DrupalConsole asks you questions about the operation: if 
you wanted to create a module it will start to ask you the name, future path, 
depandecies and more. The coolest trick is the completion feature which gives you
autocomplete from a pre-defined array of values.

<!-- more -->
