---
title: "Selling an Item for $1.6M with Elm and Headless Drupal"
tags:
  - Elm
  - Headless Drupal
  - "Drupal-planet"
permalink: "/content/selling-item-for-millions-elm-headless-drupal/"
layout: post
image: "/assets/images/posts/elm-circuit/thumb.jpg"
description: "Elm and Headless Drupal help drive live auction sales"
---

If you happen to know Brice - my colleague and Gizra's CEO - you probably have picked up that he doesn't get rattled too easily. While I find myself developing extremely annoying ticks during stressful situations, Brice is a role model for stoicism.

Combine that with the fact that he knows I dislike speaking on the phone, let alone at 6:53pm, almost two hours after my work day is over, you'd probably understand why I was surprised to get a call from him. "Surprised" as in, immediately getting a stomach ache.

The day I got that call from him was a Sale day. You see, we have this product we've developed called ״Circuit Auction״, which allows auction houses to manage their catalog and run live, real-time, auction sales - the "Going once, Going twice" type.


`-` "Listen Bruce," (that's how I call him) "I'm on my way to working out. Did something crash?"
I don’t always think that the worst has happened, but you did just read the background.  
`-` "No."

I was expecting a long pause. In a way, I think he kind of enjoys those moments, where he knows I don't know if it's good or bad news. In a way, I think I actually do somehow enjoy them myself. But instead he said, "Are you next to a computer?"

`-` "No. I'm in the car. Should I turn back? What happened?"

I really hate to do this, but in order for his next sentence to make sense I have to go back exactly 95 years, to 1922 Tokyo, Japan.

<!-- more -->

Professor Albert Einstein was visiting there, and the story tells that he scribbled a note in German and handed it to a bellboy after he did not have cash for a tip:

"A calm and modest life brings more happiness than the pursuit of success combined with constant restlessness," it reads.

I wonder if it's really the way it went. I'd like to believe it is. Seriously, just imagine that event!

Anyway, back to late October of 2017. Professor Einstein is long dead. The bellboy, even if still alive, is surely no longer a bellboy. Me, in my car, waiting for the light to turn Green - it's either a left to go workout, or a u-turn back home. And the note. The note!

That note was up for sale that day. The opening price was $2,000, and it was estimated to be sold between $5,000 to $8,000.

`-` "It's just passed a million dollars!"

That's what he said next. Mind the exclamation mark. Brice almost never pronounces it, but this time I could swear I heard it. Heck, if we were next to each other we might have ended up hugging and crying together, and marvelling at how something we've created ended up selling a note for $1.6M!

Yes, the same note that reads "A calm and modest life brings more happiness than the pursuit of success combined with constant restlessness" was finally purchased after a hectic thirty minutes bidding war for lots and lots of money. I always enjoy good irony as much as I enjoy a good story. And by the way - it [totally happened](https://www.nytimes.com/2017/10/25/world/middleeast/einstein-theory-of-happiness.html).


{% include thumbnail.html image_path="/assets/images/posts/elm-circuit/winners.jpg" caption="Screenshot of the live sale" %}

We're now launching a new version of the webapp. It has Headless Drupal in the backend, Elm in the client, and it's sprinkled with Pusher and Serverless for real-time response.


## Elm

Even after almost three years, [Elm](http://elm-lang.org/) doesn't seize to amaze me. I honestly don’t get why people are still directly JSing without at least TypeScript, to get a taste of something better and move on to a better solution. For our needs, Elm is definitely the right solution. If rewriting 60 flies with zero bugs once it compiles doesn't impress you, then probably nothing I'll present here will.

There are many advantages to Elm, and one of the bigger ones is how we can help the compiler help us using types. Here's an example of how we model the notion of an Item status. When selling an item it transitions through many different states. Is it open for sale? Is it the currently selected item? Was it withdrawn by the auctioneer? Is it Active, Going, Gone?

Below is our way of telling the compiler what are the allowed states. You can not have a `Going` status, while the Item is actually `Withdrawn` as that would be an "impossible state". Having impossible states is the holy grail of webapps. If you don’t allow certain states to happen, it means you simply don't have to think about certain edge cases or bugs as they cannot be written!

<script src="https://gist.github.com/amitaibu/abcea7a114b213df48689e662a58f79d.js"></script>

## Drupal

We decided to go with a super complex Drupal 8 setup. The kind that you at home probably don't have, and never will. It's a super secret branch that …

No, just kidding, It's Drupal 7. With [RESTful 1.x](https://github.com/RESTful-Drupal/restful/tree/7.x-1.x), and just the custom code we need along with some key modules such as Entity API, Message, Features and it is all tested with a large amount of SimpleTests.

Here is a short Q&A to questions no one really asked me, probably because I offer an answer before they are asked:

__Q__: Why not Drupal 8?  
__A__: Could you also ask me why not Haskell? It would be easier to answer both these questions together.

__Q__: Why not Haskell?  
__A__: Great questions! I'll start with the latter. We've been dabbling with Haskell for some time now, and after doing Elm for so long we can definitely appreciate the language. However, our team was missing two important things: experience and mastery.

I think that often time, in the (silly) arguments of which is the best framework/ system, we are presented with the language’s features. But we need to also take into account experience. After 10 years with Drupal, there are very few problems we haven't encountered, and we have had a chance to iterate and improve those solutions. We have the manpower in Gizra that is most experienced with Drupal, so scaling the dev team is easier. Combine it with a big ecosystem such as Panteon for hosting, Blackfire.io integrated in our CI to prevent regression in performance, Drupal was in the end the budget correct choice.

So back to Drupal 8. I've never been too shy on my opinion of Drupal 8. It's probably the best CMS out there, but from my Drupal 7 perspective and current needs, it doesn't offer anything that is much better. For example, we've never had config problems in Drupal 7 we couldn't solve, so Drupal 8's config feature that everybody raves around isn't that appealing. Also, Drupal 8's DX is indeed better, but at a cost of way more complexity. In the end, the way I see it - if you scratch Drupal 8 in some part, you will find Drupal 7 buried.

So Drupal 8 is on one hand not so far from Drupal 7, and in the other not radically different enough to be worth the learning curve.

Don't get me wrong, we do develop on Drupal 8 for clients in Gizra. But for new projects, we still recommend starting with Drupal 7. And for non-CMS (similar to our [Circuit Auction](http://www.circuitauction.com/) webapp), we're looking to start using Yesod - a Haskell framework.

If I had to choose one topic I'm proud of in this project on the Drupal side, I'd have to pick our attention to docs and automatic testing.


{% include thumbnail.html image_path="/assets/images/posts/elm-circuit/php-docs.jpg" caption="The PHPDocs are longer than the actual code" %}

{% include thumbnail.html image_path="/assets/images/posts/elm-circuit/travis.jpg" caption="CI testing is extensive" %}

## Static data with S3 & Lazy Loading with Pusher

Drupal, with PHP 7 isn't slow. It actually performs quite well. But it is probably not as scalable as we'd get from working with Haskell. But even if we would go with a super fast solution, we've realized that all clients hitting the server at the same time could and should be avoided.

As we're dealing with a real-time app, we know all the bidders are looking at the same view -- the live sale. So, instead of having to load the items ahead of time, we've taken a different path.
The item is actually divided into static and dynamic info. The static info holds the item's name, uuid, image, description, etc. We surely can generate it once, upload it to S3, and let Amazon take the hit for pennies.

As for the calculated data (minimum price, starting price, etc), Drupal will serve it via RESTful. However, the nifty feature we've added is, once a Clerk hits the `Gone` button on an item, and the sale jumps to the next Item, we don't let the clients ask the item from the server, but rather let the server send a single message to [Pusher](https://pusher.com/), which will in turn distribute it to all the clients. Again, Drupal is not taking the hit, and the cost is low.

It's actually a bit more complicated than that as different people should see slightly different data. A winning bidder should see different info, for example a “You are the highest bidder” message, but that winning bidder can change any second. So, caching or Varnish wouldn't cut it. Instead, we're actually using Pusher's public and private channels, and make sure to send different messages to the right people. It's working really fast, and the Drupal server stays clam.

## Keen.io & Serverless

We're using [keen.io](https://keen.io/) to get analytics. It's pretty exciting to see the reactions of the clients - the auction house owners, when we tell them about this. Because they can suddenly start getting answers for questions they didn't know they could ask.

`-` "Which user hovered over the Place Bid button but didn't press it?"  
`-` "Who used the carousel, and to which item did they they scroll?"  
`-` "Do second time bidders bid more?"  
`-` "When do most bidders join the sale?"

Keen.io is great, since it allows us to create analytics dashboards per auction house, without them having any access to others auction houses.

{% include thumbnail.html image_path="/assets/images/posts/elm-circuit/keen.jpg" caption="Showing the number of hovers over the `Place bid` button a user did" %}

[Serverless](https://serverless.com/) is useful when we want to answer some of those questions in real time. That is, the question "Which user hovered over the Place Bid button but didn't press it?" is useful for some post-sale conclusions, but what if we wanted to ask "Which user is _currently_ hovering over the Place Bid button?", so the auctioneer could stall the sale, giving a hesitating bidder a chance to place their bid.

Even Though the latency of keen is quite low (about 30 sec), it's not good enough for real-time experience -- certainly where each items sale can be even less than a minute. This is where Serverless comes in. It acts as a proxy server, where each client sends `MouseIn`, `MouseOut` events, and Serverless is responsible to Broadcasting it via Pusher to the Auctioneers' private channel.

Setting up Serverless was lots of fun, and knowing there's zero thought we need to give to the infrastructure, along with its cost - made it fit nicely into our product.
