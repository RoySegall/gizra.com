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
In case you hasn't noticed we are on the verge of a new era - the bot era!!
** Dramatic music in the background **

Sort of... [Mark Zuckerberg](https://www.youtube.com/watch?v=4na-wZte6Co) showed
us what it could really be. Though, we need to put our minds into our heads and
understand that bot, for now, would be more like what Dries showed us in his
Keynote at [DrupalCon Baltimore](https://youtu.be/q25eaJHpXFo?t=1h7m30s).

## Ro-bot - easy 101
So what is a bot? If you said `Hey Siri`, `OK Google`, `Hey Cortona`, or
`Alexa.` Then you interacted with a bot. That bot received an input, returned an
output (and even said it) and did it - wake you up, remind you, send an email or
order your new book from Amazon and, if you got lucky, a Drone delivered it for
you (but, that out of the blog's post scope).

## Platforms and technologies
After understanding what is a bot let's start and see how we can write one. Now,
any chat platform have provided bots in some way or another, and there are two
ways for bots to communicate:
1. Websockets - Though we use this technology to push events to the user's
browser, platforms provides a WebSocket channel and push events when something
happen in a channel(s) your bot is listening to.
2. Webhooks - In this case, you'll get http requests with the information on
events - similar to Webhooks.

Slack, Facebook Messenger, Skype, Telegram provides integration with a bot in
some way or another but, in this blog post, we will focus on Slack.

## Write your first bot is easy than you think, right?
So, you want to write your first bot - You came to the right place. What do we
need for that? First, go and create a bot in your team. You can do it under
`http://yourteam.slack.com/apps` and create a custom bot integration.

The next thing you need to start and use a library. There's something like a
quadrillions libraries - PHP, NodeJS, Python and couple in Go lang. But, what do
we need from a library? We need an easy setup, listening to events and acting:
understanding from the text what kind of task the user asks us to do and
a lot more than that(cron tasks for reminders, incoming webhooks, DB layer).
Sound a bit frustrating, no? You are right!

When I came to write the first task, I saw that analyze the text is more than
just find the matching function to the text - when having a lot of tasks
our code will get long and messy. And that's why I created Nuntius. A PHP
framework based on Symfony components which helped me organize the code.

## Introducing Nuntius
Though [Nuntius](http://nuntius.xyz) is well-documented let's start and see how
easy is to set a task. After
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
