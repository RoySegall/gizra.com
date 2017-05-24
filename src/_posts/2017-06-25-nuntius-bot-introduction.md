---
title: "Write your first bot using Nuntius"
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
In case you havn't noticed we are on the verge of a new era - the bot era!!
** Dramatic music in the background **

Sort of... [Mark Zuckerberg](https://www.youtube.com/watch?v=4na-wZte6Co) showed
us what it can really be though we need to put our minds into our heads and
understand that bot, for now, would be more like what Brice showed us in his
Keynote at [DrupalCon Baltimore](https://youtu.be/q25eaJHpXFo?t=1h7m30s).

## Ro-bot - easy 101
So what is a bot? If you said `Hey siri`, `OK Google`, `Hey Cortona`, or `Alexa`
then you interacted with a bot. That bot received an input, returned an output
(and even said it) and did it - wake you up, remind you, send an email or order
your new book from Amazon and you if you got lucky, a Drone delivered it for
you(but, that out of the blog post scope).

## What are the platforms and technologies
After understanding what is a bot let's start and see how can we write one. Now,
any chat platform have provide bot in some way or another and there are two
ways:
1. Websockets - Though we use this technology for push events to the user's
browser, platforms provides a websocket channel and push events when something
happen in a channel(s) your bot is listening.
2. Webhooks - In this case you'll get http requests with the information on
events - similar to Webhooks.

Slack, Facebook Messagner, Skype, Telegram provides a integration with bot in
some way or another but, in this blog post we will focus on Slack.

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

After implementing the task we can start and code. So what this task should do?
Get a keyword, look for image which relate to that keyword and then send it as
an attachment to the message. Basically, when you feeling down you could as for
a picture of a cute kitten which will take away your sorrow.

We will need to search for pictures via a REST request. I found a nice service
for that - [pixabay](https://pixabay.com). You'll need to register and get an
API key for that.

After acquiring the access token we need to store it somewhere. The best place
would be in the `credentials.local.yml`:

<script src="https://gist.github.com/RoySegall/53be42b81314186a5e308cb8fad3cad3.js"></script>

Let's have a look on the code to get the picture:

<script src="https://gist.github.com/RoySegall/d648637cf5518ab3f5e06dec704d2621.js"></script>

 What we need to do is to return the image url and that's it! And this the full
 code:

<script src="https://gist.github.com/RoySegall/94a3fbae852dbbfa26c0bbfe20436472.js"></script>

And this the result:

![Why Drupal?](/assets/images/posts/nuntius-bot/result.png)

## External services

Wit.io, api.ai

# Is that the end?

Now, this is just the start. Just like QA moved to automated combined with
manual tests the bot revolution will look just the same. Eventually, someone
will need to code the bots. no?
