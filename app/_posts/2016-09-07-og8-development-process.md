---
title: "OG8 development mindset"
tags:
  - "Drupal-planet"
  - "Organic Groups"
permalink: "/content/og8-development-mindset"
layout: post
image: "/assets/images/posts/og8-development-mindset/thumb.jpg"
published: true
---

{% include setup %}

As OG8 is steadily being built, I have noticed a certain pattern - or a mindset - we've been following which I think is worth sharing.

OG8 is the third time I've written OG for Drupal. The first OG7 version was a head jump into the Entity goodness that Drupal 7 brought along with Entity API. The second version was taking a small step back away from the Entity fiesta, but took two steps forward into the field API.

I think that as a developer I have matured since then. Edge cases are no longer my concern. I mean, I'm making sure that edge cases can be done and the API will cater to it, but I won't go too far and implement them. It's not that in OG7 we tried to tackle all of the edge cases, but in OG8 it's even less.

In fact, although we write a lot of new code as part of the porting, as the way we write modules for Drupal 8 has changed considerably, writing OG8 feels like... Well, it feels like I'm mostly _deleting_ files.

{% include thumbnail.html image_path="assets/images/posts/og8-development-mindset/image1.jpg" caption="Removing lines of code is so much better than adding" %}

## Myths Debunked

It's not too rare to hear rants about OG. Often they are not backed by actual data, or even refer to older versions.  

<!-- more -->

I was even quite surprised to find out in one of DrupalCon BOFs that an "OG alternative" module (that now seems to be without any much activity for the past year) was created by an author that never bothered to check OG 7.x-2.x. They knew OG 6 and kind of knew OG 7.x-1.x, and yet they used to bash OG pretty badly.

(And just to prevent any mistake, but still not call out loud the module name. I am not referring to the Group module. The above section is about another module. About my positive and negative [critique](http://www.gizra.com/content/og-message-stack-drupal8/) to Group you can read here)

Being in that BOF was both funny, and a little sad at the same time.

Now, don't get me wrong. There's nothing bad with alternatives. In fact Message and RESTful modules have grown as alternatives to existing solutions, but they all grew after a deep understanding of all the existing solutions.

So, just for the fun, here are the rants ordered by popularity:

> OG is complicated

It is. After all, it's dealing with a complicated problem. Just like many other important contrib modules, it does the heavy lifting so that you and I won't have to do it when we build our sites. OG is dealing mostly with access - so no easy shortcuts can be taken.

With that said, the concept itself along with the implementation is quite easy to explain. In fact, in OG8 we've simplified it even more. That is, we've somewhat reduced the flexibility in order to reduce the complexity; but while doing so, made sure edge cases can still hook into the process.

I always find that doing sketches by hand, can show that ideas are actually easier then what they might seem. Here's OG in free hand format:

{% include thumbnail.html image_path="assets/images/posts/og8-development-mindset/image2.jpg" caption="Concepts should be expressed as easily as possible. Circles made with a small glass, and straight lines with a business card that was on my desk" %}

Seriously, I can't think of a simpler solution that will still allow a robust group site:

1. The reference between a group content to a group is done by core's entity reference.
1. The reference between a user and a group is done by the `OgMembership` entity, that can hold aside from the association, also metadata such as the created time and the state of the membership (active, pending, or blocked).
1. An `OgMembership` can also reference an `OgRole`, which is a role that applies inside the group.

> OG adds a lot of overhead

I used Blackfire.io to check the performance of a clean Drupal 8 installation with 1000 users and 5000 nodes. Then I ran the same test on the nodes being also an OG "group" (i.e. OG uses it as the "container" of other "group content"). Profiling was done on an out of the box `Basic page` node view. When OG was enabled, it was tested with a user that had 15 groups (which is more than the typical use case).

|          | Clean Drupal | Drupal with OG | Difference        |
|----------|--------------|----------------|-------------------|
| Time     | 440 ms       | 468 ms         | +28.3 ms (+6.43%) |
| I/O Wait | 21.1 ms      | 21.1 ms        | +44.2 µs (+0.21%) |
| CPU Time | 419 ms       | 447 ms         | +28.2 ms (+6.74%) |
| Memory   | 36.5 MB      | 39.5 MB        | +2.98 MB (+8.16%) |

The gist of it: OG added merely 28 ms to the request, and 3 MB more in memory. And for the record, we have not started doing optimizations yet!


> Module X is much [ simpler | faster | betterer | awesomer ]

Does that module work for you, and you are happy with it? Is it well tested and the maintainer does a good job?

Awesome, stay with that module. OG is just a tool - not a life choice :)

## Correctness

I have a healthy obsession over quality and the idea of "correctness." How can you move forward quickly with your software, but have enough guarantees that you are not breaking existing code. Since PHP is lacking a compiler, it leaves us with a few other good options.

### Data integrity

Here's one of my favorite images, a Drupal 8 developer sees on a daily basis.

{% include thumbnail.html image_path="assets/images/posts/og8-development-mindset/exception.jpg" caption="Better have an error than wrong data" %}

It's an exception thrown by code that was not satisfied with the data it received. It's not a notice, appearing in a red box on top of your page, which your brain has learned to ignore. It's an "in your face" error message that makes sure you stop being lazy, and go fix your code.

OG8 is applying this same approach. Are you trying to create an OG permission with illegal value? Sorry, this won't work, and we make sure you know about it. Silent errors are risky and can be easily overlooked and pushed to production.  
Are you trying to save an OG membership for an anonymous user? Once again, we will throw an exception. This will make sure you won't have a security issue, where suddenly anonymous users might get too much access on your site.

### Automatic Testing

As good as exceptions are, they are just safeguards. Tests are what will make you and I sleep better at night. But of course, this really depends on the quality and quantity of your tests.

If I would tell you that OG8 has about 50 files, you might refer me to the "OG is complicated" section above, and gently imply that it sounds like a lot of files.

But sorry, I lied, as in fact OG8 has currently 120 files. However, 50 of those files are under the `tests` folder.

You see, OG, like any other good module out there has the life above the surface and below the surface. As a site builder or a dev you interact with that part. But the side below is responsible for asserting that we are not breaking the existing functionality or open up security holes. That's the side we - the OG developers - interact with locally or on Travis-CI.

As you can imagine, this is very time consuming. In fact, it's not rare that developing the tests can take more time than the actual code. Just Look at this example: the [unsubscribe](https://github.com/Gizra/og/blob/6bc7a861cdc5ded1b77c717a5397af0dabdd6345/src/Controller/SubscriptionController.php#L146-L177) controller, responsible for checking if a user can unsubscribe from a group is about 15 LOC (lines of code). The [unit test](https://github.com/Gizra/og/blob/6bc7a861cdc5ded1b77c717a5397af0dabdd6345/tests/src/Unit/SubscriptionControllerTest.php) that covers this method has 230 LOC. In fact it's even not the only test that covers this functionality, as there is also a [Functional](https://github.com/Gizra/og/blob/6bc7a861cdc5ded1b77c717a5397af0dabdd6345/tests/src/Functional/GroupSubscribeTest.php) test to assert it.

That's a lot of tests! And even though it's time consuming, it actually allows us to move fast and save time in the long run. Because when you have the confidence that the system is well tested, you are not afraid to continuously iterate, rewrite, and polish existing work.

I think there is another hidden merit in tests. By taking the time to carefully go over your own code - and using it - you give yourself some pause to think about the necessity of your recently added code. Do you _really_ need it? If you are not afraid of writing code and then throwing it out the window, and you are true to yourself, you can create a better, less complex, and polished module.

## Simplifying and hiding advanced features

One of the mistakes that I feel made in OG7 was exposing a lot of the advanced functionality in the UI. It's not a terrible mistake (ponder on the amount of complex stuff Views UI allows you to do), but I think that it contributed to feeling people had that things are complex.

This notorious administration page allowed you to add OG related fields to different entities. It also allowed you to add different field instances of the same type, as for example you can have multiple OG audience fields on the same bundle.

{% include thumbnail.html image_path="assets/images/posts/og8-development-mindset/image3.jpg" caption="Don't worry kids, the beast is gone." %}

But these are all advanced use cases. When thinking about how to port them to OG8, I think found the perfect solution: we did't port it. It might sound a bit funny, but I think there are important advantages in doing so:

1. Less code to write and maintain.
1. Less complexity in the system.
1. Lower the barrier for site builders. They will have just a single page to set a bundle as related to OG.

{% include thumbnail.html image_path="assets/images/posts/og8-development-mindset/image4.jpg" caption="Adding any OG related field will be done via a simple UI" %}

Obviously, the more advanced features (such as the above-mentioned multiple OG audience fields) remain in the code, so advanced developers can use them when needed via code:

```php
<?php
// Make an bundle a "group"
\Drupal\og\Og::addGroup('node', 'page');

// Add OG audience field to a "group content"
\Drupal\og\Og::createField(\Drupal\og\OgGroupAudienceHelper::DEFAULT_FIELD, 'node', 'article');
```

Excited? So are we! Come and [join us](https://github.com/Gizra/og), we have low-hanging-fruit issues you can start with, and you'll find yourself writing features and tests in no time!
