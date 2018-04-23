---
title: "Stripped Down to the Essence - Value-Driven Development is Harsh"
tags:
  - The Gizra Way
permalink: "/content/creating-value/"
layout: post
author: RachelBaram
image:  "/assets/images/posts/year-in-review/thumb.jpg"
description: "Recognizing the effort it takes to commit to Value-driven development, along with practical steps."
---

“You shouldn’t develop that.”

For just a moment, I can see the client’s excitement shift to disbelief, deflated at the understanding that I am suggesting that the list of the meticulously defined features in the 30 page requirements document, well, should be scrapped. I promise the client a different way of doing things - value-driven development. I couldn’t think of a less markety way to say value-driven development -- please forgive me -- but essentially in Gizra, it means that we strive to only develop what provides real value.

The client completely embraces this way of doing things, we join hands, walk into the sunset, and the website lives happily ever [record scratch]...

Nah. In theory, value-driven development sounds nice and agreeable by all.  Unfortunately for most development projects, inertia wins over value. It takes a certain mindset and discipline to accomplish, and this process can be ruthless.

Implementing this in our projects is a defining moment in the relationship with our clients.  I really like this moment - this is when things can really click (or go terribly wrong). Together we enjoy those small wins when we simplify a feature or scrap it all together freeing up development resources for something more impactful.

## If I Had More Time, I Would Have Written a Shorter Letter

As my English teacher loved to remind me, a short essay is more difficult to write than a long one. <strike>A short essay is precise and requires editing to cut out extraneous stuff - omitting needless words so the remaining text is impactful. Getting to the heart of the matter requires a great deal of careful thought.  It also requires a certain ruthlessness. The writer has to be willing to get rid of a great deal of their material. Writers become attached to their thoughts and ideas and have a difficult time pruning away what is.</strike> because it is about including only the most pertinent information necessary to make your point.

Our approach to development is pretty much the same.

In an environment of abundance (of information, features, and possibilities) and short attention spans (of end users, stakeholders, and markets) the key to creating value is the strict filtering, like editing to shorten an essay, of what is developed.

So, yada, yada, still sounds nice but how do we actually do this?

## The Business Goal is Our Beacon

Before a project begins or even a price estimate written, we seek to understand: what is the business goal and how do we measure it?

Take for example:
<p style="margin-left: 40px">A newly established professional association quickly spun up a small site to provide information and allow for membership payments. That worked and now they have some members - so now they need to provide an additional feature that demonstrates that membership has value.  Their idea: individual member pages on the organization site to promote themselves and be matched with potential clients.

Great idea, there are familiar patterns for how to achieve this, we have some experience building this kind of thing, and most importantly, it can be measured. Success is evaluated by the number of member business pages created on the website and analytics that show that potential clients are finding members through the association website.
</p>
Once the business goal is established, we ask some questions about how the features to support this goal should be developed:

**Is it Required Right Now?** Sometimes it helps to reframe the question to: until there are 100 users, can you manage without this feature?

<p style="margin-left: 40px">In this context, until there are 100 member pages, let’s not even consider major development on any other parts except this functionality. This means that initially the admin experience will be limited, and without efficiencies like automatic emails (yes, the admin will send them one by one).  On the front-end, social login, chatbots, and showing member search results on a map instead of a simple list are superfluous.
</p>

**Translating to Cost** The time-boxed effort of a feature is translated to cost so it can be evaluated - is the impact of this scope worth the cost? A price tag provides perspective early on and meets the client exactly where value is determined.

<p style="margin-left: 40px"> Completely customized capabilities for member pages could cost $100K. Does that make sense? Maybe a few templates at less than a quarter of that will have just as much of a positive impact?
</p>

**Edging out the Edge Case** Catch edge cases and eliminate them. In almost every case, developing a solution for a small percentage of non-critical users does not provide value to a project.  So, another good habit is to ask - how many users will this support? And how often does this occur?

This seems obvious but when you are caught up in the project, it is easy to forget. I admit, that on several occasions I wasted time debating a feature, that if I had just asked these two questions, would have ended the debate before it even started. Grrrr.

<p style="margin-left: 40px">The association’s website admin would really like robust rich-text-editing functionality for laying out and editing the simple pages like the ‘about us’ and ‘founders’ pages.
</p>

Many times a simple business decisions can eliminate edge case for you. In this case, spend some time up front to make sure those static pages are truly polished. If absolutely necessary, take a few hours of developer time to make page changes you can’t make with the editing capabilities. It will be a lot less expensive - and in the future, when there are more pages to edit, we can add that capability.

**Sticking to Simplicity** A feature should be pared down to its most basic version and we should get it to real users for testing as soon as possible.  This eliminates the potential heavy cost of guessing.

<ul type="disc">
    <li>We will see how many people try using the contact form to understand if this is useful to them. If it is, then it will be valuable to put more resources to that feature.</li>
    <li>We can determine whether member locations are really important (this client serves a relatively small geographic area).  If this search criteria was used by few users, then developing a map display would probably be a waste of resources.</li>
    <li>And with an easy way for members to provide their input, we can understand how important, if at all, for them to have a lot of flexibility on their business pages. We may find out that they are quite happy to have minimal requirements to get their page spun up and that they enjoy the even playing field created by standard fields and design. Or maybe, not.</li>
</ul>

## Staying Uncomfortable

Value-driven development, is simple; but actualizing it, is tough.  It requires discipline and a change in perspective. In Gizra, we keep on our toes by embracing the uncomfortable. We try to be a client's guide in this uncomfortable, but truly valuable journey.
