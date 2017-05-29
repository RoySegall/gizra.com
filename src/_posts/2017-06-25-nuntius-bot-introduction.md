---
title: "Write Your First Bot Using Nuntius"
tags:
  - Drupal-planet
  - Slack-bot
permalink: "/content/write-your-first-bot-using-nuntius/"
layout: post
image: "/assets/images/posts/nuntius-bot/thumb.jpg"
author: RoySegall
published: true
description: "The bot revolution has started. Writing your first bot is easy
than you think."
---
In case you haven't noticed, we are on the verge of a new era - the bot era!!

[*Dramatic music in the background*]

Sort of... [Mark Zuckerberg](https://www.youtube.com/watch?v=4na-wZte6Co) showed
us what it can really be though we need to put our minds into our heads and
understand that bot, for now, would be more like what Dries showed  in his
Keynote at [DrupalCon Baltimore](https://youtu.be/q25eaJHpXFo?t=1h7m30s).

## Ro-bot 101
So what is a bot? If you've ever said `Hey Siri`, `OK Google`, `Hey Cortona`, or `Alexa`,
then you have interacted with a bot. That bot received an input, returned an output
 - it woke you up, reminded you of something, sent an email, or ordered
a new book from Amazon - and you if you're lucky, a drone delivered it!

## What are the Platforms and Technologies
Now that we understand what a bot is, let's see how can we write one. Chat platform 
provide bots in one of two ways:

1. **Web sockets** - Though we use this technology for push events to the user's
browser, platforms provide a web socket channel and push events when something
happens in a channel in which your bot is listening.
2. **Web hooks** - In this case you'll get http requests with the information on
events.

Slack, Facebook Messenger, Skype, and Telegram all provide integrations with bots in
one way or another, but in this post we will focus on Slack.

## Write your first bot is easy than you think, right?
So, you want to write your first bot - You came to the write place. What do we
need for that? First, go and create a bot in your team. You can do it under
`http://yourteam.slack.com/apps` and create a custom bot integration.

The next thing you need to start and use a library. There are something like a
quadrillions libraries - PHP, NodeJS, Python and couple in Go lang. But, what do
we need from a library? We need an easy set up, listening to events and acting,
understanding from the text what kind of task the user asks from us to do and
a lot more than that. Sound a bit frustrating, no? You are right!

When I came to write the first task I saw that analyze the text is more that
just find the a matching function to the text because when having a lot of tasks
our code will get long and messy. And that's why I created Nuntius. A PHP
framework based on Symfony components which organize the code.

## Introducing Nuntius
Though [Nuntius](http://nuntius.xyz) is well documented let's start and see how
easy is to set a task. After
[settings up nuntius](http://nuntius.xyz/Nuntius_Slack_Bot.html) we need to
write the first command.

## Hooks? Event dispatching?
No and no. In order to make things easy Nuntius does not use hooks or events
dispatching to integrate with custom commands. Instead, all of the integrations
defined in a YML file.

In our `hooks.local.yml` we will add a custom task:
<script src="https://gist.github.com/RoySegall/8b6f57d49281352b6f5217c902d2c023.js"></script>

Our task will be located at `src/Custom/LookForAPicture.php`:
<script src="https://gist.github.com/RoySegall/2bf556c2994b0bc89bc5ede26605f366.js"></script>

## External services

Wit.io, api.ai
