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

My primary job at Gizra is working with Harvard on the OpenScholar project.
OpenScholar is a distribution for the academic institution and provides a mini 
site for each professor, faculty, department or project. I'm doing it for the 
last Four years and I love this job. You can find a good challenge in any 
issue, and as a programmer, this is what you are looking. Challenges. 

OG is one of the core modules which power OpenScholar and if you ever worked on
a Drupal site with OG you are very familiar with the notorious field page which
Amitai mentioned in the blog post [OG8 Development Mindset](http://www.gizra.com/content/og8-development-mindset/#simplifying-and-hiding-advanced-features).
One of the many things I wanted to improve in OG8 is the UX of the page, but 
because this page has no plan to appear in OG8, I was feeling pretty sad.

<!-- more -->

{% include thumbnail.html image_path="https://cloud.githubusercontent.com/assets/1222368/18803538/862c0fb2-81f9-11e6-932f-758f1bfb46d5.gif" caption="The magic of DrupalConsole" %}

## The box - get out of there
So, as a good developer, I sat down and started thinking out of the box. We need
to add OG fields quickly, but the page, as I mentioned, have no plan to debut in
any new form. I thought harder and understood one of the fundamental principles 
in any project - who is your audience? Amm... Developers! What developers are 
using the most? CLI. 

If you used Drupal 8 before you know that DrupalConsole is a powerful tool, Very
similar to yo generator, DrupalConsole asks you questions about the task:
if you wanted to create a module, it would start to ask you the name, path,
dependencies and more. The coolest trick is the completion feature which gives 
you autocomplete from a pre-defined array of values.

## DrupalConsole as a service
You can use DrupalConsole to create a custom command. Each command will be a 
service thus giving us the option to re-use the logic anywhere we desire, swap 
injected services to the command or even take over a particular command.

The first command I decided to tackle is the command to attach audience field to
an entity. DrupalConsole created the [service](https://github.com/Gizra/og/blob/8.x-1.x/og.services.yml#L46)
with elegance and I filled in the [business logic](https://github.com/Gizra/og/blob/8.x-1.x/src/Command/OgAddFieldCommand.php).
After I saw everything works I created a [test](https://github.com/Gizra/og/blob/8.x-1.x/tests/src/Kernel/Console/DrupalConsoleAddFieldTest.php)
and by that, I ensure my work won't break in the future. I ask from any 
developer who contribute: Write QA test for your work.

## Take it from here boys
A question that might pop into your head is why to use DrupalConsole commands 
for my Drupal project rather than a Drush command? Well, you should and should
not. Drush commands have integration similar to DrupalConsole, but DrupalConsole
have better interaction with the user is far better than what Drush provide.

Drush aliases supported by Pantheon or Acquia hosting services while there is no
support for DrupalConsole aliases for now. Which lead us to the next conclusion 
- we need to use both tools.
