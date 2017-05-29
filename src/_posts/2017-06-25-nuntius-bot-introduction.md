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
us what it could really be. Though, we need to put our minds into our heads and
understand that bot, for now, would be more like what Dries showed us in his
Keynote at [DrupalCon Baltimore](https://youtu.be/q25eaJHpXFo?t=1h7m30s).

## Ro-bot 101
So what is a bot? If you've ever said `Hey Siri`, `OK Google`, `Hey Cortona`, or `Alexa`,
then you have interacted with a bot. That bot received an input, returned an output - 
it woke you up, reminded you of something, sent an email, or ordered
a new book from Amazon - and you if you're lucky, a drone delivered it!

## Platforms and technologies
After understanding what is a bot let's start and see how we can write one. Now,
any chat platform have provided bots in some way or another, and there are two
ways for bots to communicate:

1. **Web sockets** - Though we use this technology for push events to the user's
browser, platforms provide a web socket channel and push events when something
happens in a channel in which your bot is listening.
2. **Web hooks** - In this case you get http requests with the information on
events.

Slack, Facebook Messenger, Skype, and Telegram all provide integrations with bots in
one way or another, but in this post we will focus on Slack.

## Writing Your First Bot is Easier than You Think
 First, create a bot in your team. You can do it under
`http://yourteam.slack.com/apps` and create a custom bot integration.

Next you;ll need to start and use a library. There's something like a
quadrillion libraries - PHP, NodeJS, Python and couple in Go lang. For 
our purposes, we need an easy setup, listening to events and acting - for instance,
understanding from the text what kind of task the user requires, and even
more (cron tasks for reminders, incoming web hooks, DB layer, etc.).
Sounds a bit daunting, no? You are right!

When I came to write the first task, I saw that analyzing the text is more than
just matching a function to the text - when there are a lot of tasks,
the code will get long and messy. And that's why I created Nuntius: a PHP
framework based on Symfony components that helped me organize the code.

## Introducing Nuntius
Though [Nuntius](http://nuntius.xyz) is well-documented let's start and see how
easy is to set up a task. After
[settings up nuntius](http://nuntius.xyz/Nuntius_Slack_Bot.html) we need to
write the first task.

## Hooks? Event dispatching?
No and no. To make things easy, Nuntius does not use hooks or events
dispatching to integrate with custom code. Instead, all of the integrations
defined in a YML file.

In our `hooks.local.yml` we will add a custom task:
<script src="https://gist.github.com/RoySegall/8b6f57d49281352b6f5217c902d2c023.js"></script>

Our task will be located at `src/Custom/LookForAPicture.php`:
<script src="https://gist.github.com/RoySegall/2bf556c2994b0bc89bc5ede26605f366.js"></script>

After implementing the task, we can start and code. So, what this task should
do? Get a keyword, look for an image which relates to that keyword and sends it
as an attachment to the message. When you are feeling down you could ask for a
picture of a cute kitten which will take away your sorrow.

We will need to search for pictures via a REST request. I found a nice service
for that - [pixabay](https://pixabay.com). You'll need to register and get an
API key for that.

After acquiring the access token, we need to store it somewhere. The best place
would be in the `credentials.local.yml` which located under the `settings`
library:

<script src="https://gist.github.com/RoySegall/53be42b81314186a5e308cb8fad3cad3.js"></script>

Let's have a look on the code to get the picture:

<script src="https://gist.github.com/RoySegall/d648637cf5518ab3f5e06dec704d2621.js"></script>

 What we need to do is to return the image URL, and that's it! This the full
 code:

<script src="https://gist.github.com/RoySegall/94a3fbae852dbbfa26c0bbfe20436472.js"></script>

And this is the result:

![Embed image in slack](/assets/images/posts/nuntius-bot/bad_kitten_image.jpg)

## But wait, there's more!
Slack was kind for us and embedded the picture for us. But that is not the best
practice. One of slack best practices are the attachments. Attachment makes the
message much more reach and eventually will give us something like that:

![Improved embed image in slack](/assets/images/posts/nuntius-bot/good_kitten_image.jpg)

The code is a bit complex than the simple URL we returned:
<script src="https://gist.github.com/RoySegall/b872dccfb12c01cbd2fa080c27fd281b.js"></script>

## External services

Your mind was blown, I know. But what next? If you thought that this branch of
development left without any SAAS solution, you are wrong. Since bots need to
interact with people who require deep learning and natural language analyze.
There are two famous players in the market(for now) -
[api.ai](https://api.ai) and [wit.ai](https://wit.ai).

In a nutshell, they will give you informative object which you could interact
with and could be trained with deep learning.

# Is that the end?
No. Skynet is not around the corner, and HAL 9000 isn't going to be in NASA's
new spaceships. This is just the beginning. Unless you are a big company like
Apple, Google or Facebook you probably won't provide a solution like Siri and
other bots.

Bots, as I can see it, will be another interaction with the product and can
provide a simple way to get information:
* When are you going lunch the new version.
* Tell users the site is under maintenance for now or when it's back.
* Notify the user when a new season of a TV show is going to lunch(I was
  informed about Silicon Valley new season via Facebook Messenger.)

Don't forget that QA was pretty much manually. Now, QA is automated but still
need to be written and maintained. We might be killing one field but creating a
new field.
