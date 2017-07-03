---
title: "Yesod (and Haskell) from a Drupal (and PHP) Perspective"
tags:
  - "Drupal-planet"
  - "Yesod"
  - "Haskell"
permalink: "/content/haskell-yesod-php-drupal/"
layout: post
image: "/assets/images/posts/yesod-drupal/thumb.jpg"
description: "Should you use Yesod or Drupal? You can actually enjoy both worlds."
---



In Gizra, we run an unusual stack. Drupal, our bread and butter, serves as the backend and is complimented by [Elm](http://elm-lang.org/) for the front end, and as of recently [Yesod](http://www.yesodweb.com/) - a Haskell framework.  
Before Yesod, we were running NodeJs as our proxy server for light tasks or real-time messages.

But ever since I came across Elm, Javascript and I are hardly friends. I respect it, but can no longer turn my eye from its shortcomings. Functional programming has caught my heart and mind.

In this post I'm not going to try and present strong points on why _you_ should adapt this stack, but rather share with you the unique path we are paving.

## Elm

Elm was my first dip into the functional programming (FP) world. I recommend starting from there. It's way more gentle than Haskell, and it has, of course, one important advantage - it helps you build rock solid, crazily fast, joy-filling, web apps.

Maybe this [post and video]({{ site.url }}/content/faithful-elm-amazing-router/) will get you excited as well.

## Gentle Intro to Haskell

A good way to start explaining what's so special about Haskell is to dive directly into Haskell. While PHP is defined (by some) as a "productive" language, Haskell is often blamed (by some) as being an "academic language". Both statements are probably wrong.

Often when mentioning Haskell, we talk about the compiler and the type system. They are truly marvelous tools. For the type system, I think the Elm post I lined above should be enough to get the hang of it. But I'd like to continue and reveal a bit more by highlighting mini examples on how Haskell makes us approach development tasks differently.

### Lists

Below are examples from the REPL (the interactive shell for Haskell)

```haskell
> [1, 2] ++ [3, 4]

[1, 2, 3, 4]
```

What we have here are two lists of integers that are appended to each other. A list of integers is represented as `[Int]` in Haskell. The `++` is the operation that causes those two lists to be grouped into a single one.

Haskell comes with some handy shortcuts.

<!-- more -->

```haskell
> [1..5] ++ [6, 7]

[1, 2, 3, 4, 5, 6, 7]
```

And even ones that can save a few lines of `foreach`:

```haskell
> [x * 2 | x <- [1..3]]

[2, 4, 6]
```

The above is asking Haskell to generate a list of `Int` from 1 to 3, and feed it into `x * 2`. We can also do fancier stuff here, like take a list from 1 to 10, but use only the even numbers:

```haskell
> [x | x <- [1..10], rem x 2 == 0]

[2 ,4 ,6, 8, 10]
```

A `String` in Haskell is actually a list of `Char` (`[Char]` in Haskell talk). So this may seem a little surprising, but we can actually act on the list of chars in the same way we did with numbers.

```haskell
> ['a'..'e']

"abcde"


> ['a'..'e'] ++ ['f'..'h']

"abcdefgh"

> "Hello " ++ ['w', 'o', 'r', 'l', 'd']

"Hello world"
```

### Abstractions

So far, nothing here is overly complicated or life changing. When I gave this talk in Gizra, even the non-devs weren't alarmed at this point. No glazing eyes (yet).

Now we can start looking at how Haskell brings a different approach to programming. One that, as Drupal developers, we are not too familiar with.

The fine folks of Haskell looked at the appending of the lists, and probably told themselves "Hey, there's a pattern here, and it can be satisfied by a set of rules". The pattern they recognized is the fact that we need to append variables of the same type. That is, two lists of integers can be added together and form a longer list of integers. The type doesn't change, just the number of members inside of it.

The `++` operation we saw can be generalized and called `mappend`. All the following will have the same result:

```haskell
> [1, 2] ++ [3, 4]
> mappend [1, 2] [3, 4]

-- The backtick sign (`) means we can use the mappend between both arguments.
> [1, 2] `mappend` [3, 4]

[1, 2, 3, 4]
```

So, trick question: with the above abstraction in mind, what would you expect the result of appending two integers be?

```haskell
> 5 `mappend` 6`
```

Should it be 11 (5 + 6)? In that case why wouldn't it be 30 (5 * 6)?  
Or maybe even 56 (smashing the two digits together)?

It's unclear. However, Haskell has a solution. We can use types to explain to the computer what our _intention_ is. So we have two types `Sum` and `Product`:

```haskell
> Sum 5 `mappend` Sum 6

11

> Product 5 `mappend` Product 6

30
```

### Monoid

Hope you are not too afraid of the above title. `Monoid` is the name of the abstraction we just briefly went over. It should not be confused with the dreadful `Monad` term, which I have no intention to cover.

In PHP talk, a Monoid class is like an `interface` that has two methods: `mappend` and `mempty`.

The `mempty` defines an "empty" value. What is the empty value in the case of the above `Sum`?

```haskell
Sum 5 `mappend` mempty = Sum 5
```
`mempty` would be `Sum 0` (because 5 + 0 = 5).

And what would it be in the `Product` case?

```haskell
Product 5 `mappend` mempty = Product 5
```

`mempty` would be `Product 1` (because 5 * 1 = 5).

For completeness - the second and the last rule for a Monoid is that `mappend x y` should be equal to `mappend y x` (5 + 6 == 6 + 5).

That is it. You are on the path to Monoid zen. Now, let's put our knowledge to use, and try to implement an example.

## 12 Hour Clock

Here's a nice Monoid example I came across. Let's say we have an old clock with 12 hours. No AM or PM. Something like this

{% include thumbnail.html  image_path="assets/images/posts/yesod-drupal/monoid.jpg" caption="In case you missed out life in the past century, this is a clock" %}

So let's say that time now is 10. What time will it be in 4 hours from now?

We cannot say 14, because inside the clock there are only 12 hours. We already know will happen - it's simply going to pass the 12 hours and "reset". That is, the answer is 2.

Inside this clock we can continue adding numbers, but our logic will never fail. Any number we add will never fall outside of the clock, thus causing the universe to collapse into itself.

Monoid can help us accomplish this behavior because we are able to define our own completely arbitrary new type, and have a standardized way to explain to the computer how numbers are to be appended.


```haskell
data Clock12Hours = Clock12Hours Int
    deriving (Show)

instance Monoid Clock12Hours where
    mappend (Clock12Hours x) (Clock12Hours y) = Clock12Hours $ (x + y) `mod` 12
    mempty = Clock12Hours 12
```

Don't bother too much with the above code's syntax. What's important here is to understand that after defining this Haskell `instance`  - or in PHP talk say that `Clock12Hours` is implementing the `Monoid` interface - we can use the same `mappend` we used above with integers and chars.

```haskell
> Clock12Hours 4 `mappend` Clock12Hours 10

Clock12Hours 2
```

### So What?


How would we do this in PHP? That is, if we had something like:

```php
<?php

$hour1 = new Clock12Hour(4);
$hour2 = new Clock12Hour(10);
```

How can we add 10 + 4 in this PHP example? The idea of appending items, as seen in this example, was not generalized in PHP, so we are bound to think about this task differently.

My point here is that the language we're using for development is dictating the way we are able to articulate the problem, and the way we model the solution. I don't think, necessarily, one is better than the other (well actually I do, but I'm not here for the flame wars), but rather looking to emphasize that Haskell is different enough from most other languages. Just by learning it - similar to learning Elm - can have a positive impact on our developers' skills.

## Yesod

Ok, back to web-development. That Haskell thingy we just saw? Yesod is built on top of it.

Haskell has a big learning curve. Admittedly, it took me more months than I'd be happy to share, to understand some of the basic concepts. And I still don't understand many.

However, even though it's based on Haskell, in the day to day tasks, you don't really need to deal with all those abstractions. Your route will respond to some arguments, get data from the DB, massage the data, and send it to the templating system to be rendered.

It's hard to explain without providing lots of points why a framework is great. So I won't try, and instead
I'll give an anecdotal example that I love, because it illustrates to what degree of guarantees - that is, shifting run time errors to compilers errors - Yesod has reached.

In our Yesod website if we want to add Bootstrap CSS file, we write `addStylesheet $ StaticR css_bootstrap_css`.

We don't have a `static` folder in Drupal, but it can be roughly translated into `drupal_add_css('static/css/bootstrap.css');` which isn't something to brag about. We're just loading the CSS.

Well, not really. You see, in Yesod, if you will notice, we don't write `StaticR css/bootstrap.css` but rather use `css_bootstrap_css`. That string, as the docs [explain](https://github.com/yesodweb/yesod-scaffold/blob/9c6c7e0a59bdf56427ca7dcbf24afab7d0a31a67/Settings/StaticFiles.hs#L6), is a reference to the actual file.

This means that if the CSS file doesn't exist, the compiling will fail! You will get a big fat error message telling you to go and add the missing file because you probably don't want to deploy your website without its CSS.

Pushing code to production without all the necessary assets isn't something I've done many time, but it has happen in the past. I wouldn't mind if it was guaranteed not to ever happen again, without me needing to put any cognitive effort into it.

## Unfair Comparisons

Coming from a full blown CMS, frameworks tend to look appealing at times. They are so light, and so much faster.

Then, I find myself hand coding flag like functionality, which in Drupal is just a case of downloading a well tested module, enabling, and configuring.

In Yesod, I had to [write](https://github.com/Gizra/yesoders/pull/5/files) it myself. There are some Yesod packages out there, but nowhere as near as what Drupal offers.

On the other hand, a lot of Drupal's modules are of low quality or very specific, so quantity doesn't necessarily mean much. We usually just need a tiny subset of it.

And that flag functionality I wrote - well, my local server spit the JSON response back within 6ms.

{% include thumbnail.html  image_path="assets/images/posts/yesod-drupal/flag.gif" caption="Flagging a user" %}

6ms! The same JSON response took about 200ms on my local coming from Drupal.

"But that is not fair!", you may say, "the comparison isn't right. Drupal does so much more out of the box!"

You are, of course, right. But on the other hand - 6ms. When I clicked the flag link, I didn't need the other stuff Drupal brought (and bootstraps on each request). I just needed my item to be flagged. And it was. In 6ms.  

Our users don't care about the underlying technology. They just want it fast. But then again, it's very hard to compete with Drupal's community, maturity, eco-system, hosting providers, etc.

It's up to us to select the right tool for the job, and that's why I love web development and my job so much.

## How to start

If I got you interested, here are some good resources:

* [Elm guide](https://guide.elm-lang.org/)
* [Real World Haskell](http://book.realworldhaskell.org/) - Free book.
* [Haskell book](http://haskellbook.com/) - Costs money. Worth every dollar.
* [Yesod book](http://www.yesodweb.com/) - I wish all frameworks came with such great documentation and real world examples.
