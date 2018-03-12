---
title: "Distractions and the art of being focused."
tags:
  - Productivity
permalink: "/content/distractions-and-the-art-of-being-focused/"
layout: post
image: "/assets/images/posts/working-without-automatic-tests/thumb.jpg"
description: "Small steps to improve your workflow."
author: mariano-dagostino
---

# Distractions

Before sending my CV to Gizra, I remember reading the [Gizra Way
Book](https://www.thegizraway.com/), not once but twice. At that point, one of
the most interesting quotes I remember was from chapter [Escalation and
Timeboxing](https://www.thegizraway.com/escalation_and_timeboxing.html).

> Yes, take breaks as needed but when you work, be focused.

It turns out that being focused is something that may be much harder than you would
expect...

## Turn off distractions

It is a known practice when trying to be productive to turn off
distractions including slack, twitter, email, all those things that take away your
focus. But there are more. Maybe hidden in your current workflow.

For me for example, a big distraction came from not having the right tools for the job. I learned that
spending some time now to configure my environment correctly can save me a lot of
hours of distractions in the future.

If you are a drupal developer, make sure you understand and make use of at least
these three things:

- Drush aliases. https://pantheon.io/blog/drush-aliases-available
- SSH keys. https://help.github.com/articles/connecting-to-github-with-ssh/
- Bash aliases. https://davidwalsh.name/alias-bash

## There may be a better way.

It may just sound obvious, but do not insist on something that doesn't work for you.

For example, a week before I joined Gizra, I decided to try i3wm windows
manager. It was a joy. I believed that I would not have to think about where to place a window
anymore. But after four weeks of using it and configuring it, I realized that
I was wasting a lot of time just trying to remember how to open new windows, so
I returned to XFCE. However I did adopt some key shortcuts from i3wn, like opening
a terminal with Command + Enter, that turned out to be really helpful.

Listening to your coworkers advice is a good thing too. I been working with Drupal
the last ten years, and that implies doing things in the wrong way, for a long
of period of time... The point here is being enough humble to listen other ways
to do things, and make them part of your current workflow.

## Keep track of what you do

Eventually, you will get time to work on some task. Then you need to find a way
to prevent yourself of spending too much time focused. Your health is important
and taking enough breaks make your life more pleasant.

For me the pomodoro technique is a good way to find a balance between working
and resting. There are a lot of cellphone apps to track this, but all of them
requires to have your phone close enough to check it. And the phone is another
source of distraction.

So I thought about another way to track time, and built a pomodoro timer using
an arduino.

## Pomoduino

There are several schematics of how to build a timer. Lot of them are just to
simple, I needed a way to track how much time I sent working, because reporting
hours is a crucial part of the Gizra way.

+{% include thumbnail.html image_path="assets/images/posts/distractions/pomoduino.png" caption="Pomodoro made with arduino" %}

It just have two buttons, one of them starts a new work session, the other one
a rest session.

Each time you complete a set of 4 periods of work or rest, a new light is
turned on in the matrix, so you can track an entire working day sesion using
a 8x8 led matrix.

## It is all about finding your way to improve yourself

When I was in college, there was a phrase from one of my teachers.

> You cannot improve what you can't measure.

The challenge then is to be aware of what is bothering you, takes notes, and
try small things to make them better.

After few weeks of working in Gizra, I sent an email with a recap of a lot of
different things I thought could be improved. And guess what... They have
changed over the time, so talking to your managers really works. (I was
a technical manager last year, so trust me, it works).

And then, you will be able to enjoy the the benefits of [Work Life
Balance](https://www.thegizraway.com/work_life_balance.html). Just make sure
you are aware how stay focussed and take actions to change what bothers you.
