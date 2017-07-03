---
title: "Yesod forms, and API first"
tags:
  - Yesod
permalink: "/content/yesod-forms-restful/"
layout: post
image:  "/assets/images/posts/yesod-forms-restful/thumb.jpg"
description: "Create a Yesod entity that can be created and validated by forms and RESTful using the same validations handlers."
---

We have had a few entrepreneur projects in Gizra along the years, but as of last year one of them
started picking up. [Circuit Auction](http://www.circuitauction.com/) is all in one solution for auctions houses: from a back office to manage their catalogs, to online site to show it and a web app for real time
auctions.

Lets talk about the real time part. Up until now we've had Drupal serve the backend of that web app. Drupal and real time - I hope the comedy relief doesn't go unnoticed.

I will repeat what I've been seeing for a long time now. Drupal is an amazing CMS, which comes with a lot of benefits, but it's not fast enough to serve real time content - there are better solutions for that.

Yesod is one of those solutions. And one that makes me feel much safer than the more popular alternatives (read as NodeJs)

## Single File App

Our Yesod projects start from a [scaffolded](http://www.yesodweb.com/book/scaffolding-and-the-site-template) project that already comes with lots of different parts to get
us up to speed, however I wanted to isolate my use case. To good thing is that Yesod allows us to have our app defined in a single file, so we can concentrate on a clean installation, instead of chasing different files.

Follow the [README](https://github.com/Gizra/yesod-form-restful-example#installation) to see how to run this locally.

. In fact it even allows us to have the [dependency declared](https://github.com/Gizra/yesod-form-restful-example/blob/8863f70bba4ece37c2aa50ceb0a8e207c6189ebb/Item.hs#L2-L8) as-well, so Stack - Haskell's build too, can build it for us.

Declare our [model](https://github.com/Gizra/yesod-form-restful-example/blob/8863f70bba4ece37c2aa50ceb0a8e207c6189ebb/Item.hs#L36-L40). It's a simple one `Item` has only a single property that accepts only `Int` values.

Declare our [routes](https://github.com/Gizra/yesod-form-restful-example/blob/8863f70bba4ece37c2aa50ceb0a8e207c6189ebb/Item.hs#L43-L47):

For example in `/ ItemR GET POST` we say:

The `/` (root) route should allow the `GET` method (for showing the form) and `POST` (for sumbmitting it). It's handler is called ItemR (The suffix R indicated it is a handleR). With this declaration in place, our Yesod will now call `getItemR` and `postItemR` respectivly.

## Goals & Validations

We would like to allow admins to insert an item via UI, but provide also a RESTful interface, so our Elm web-app can interact with it.

We would of course want, and this was the essence of this excercise, provide the validation logic that will apply to both interfaces - the form, and the RESTful.

The validations rules are simple:
Price should be an Integer. That's actually easy. By defining price as `Int` we have this part covered.

2nd rule, the price should be above zero:

```haskell
validateMinimumPrice :: Int -> Either Text Int
validateMinimumPrice price =
    if (price <= 0)
        then Left "Price should be above 0"
        else Right price
```

Let's break this down. We have a function called `validateMinimumPrice` that will get an `Int` value and return an `Either` value. First, lets emphasize that it can only get an `Int`, so we now have type-safety. Compiler will simply not allow us to write any code that will violate that.

Next, we say that we return an `Either` value. That is, if there is an error, we will return `Left` with some string. If the price is valid, we will return it wrapped with `Right`. `Either` is a generic way to have valid, invalid values along with some meta-data that explains why it's invalid.

In fact, the string that is wrapped with `Left` is the one we will use as an error message, both in the form and in the RESTful response.

This validation is quite simple. There is no need to interact with the outside world, no need to do any DB query, or ask for a user's input. We just check the number is above 0.

The 3rd rule however, does require an interaction with the DB. This is why you will notice the signature is slightly more complicated.

```haskell
validateNoExistingPrice :: Int -> Handler (Either Text Int)
validateNoExistingPrice price = do
    existing <- runDB $ count [ItemPrice ==. price]
    return $ if (existing > 0)
        then Left "Price already exists"
        else Right price
```

As you can see, the return value is now wrapped with a `Handler`. Without getting into scary words like Monad and IO, it's enough to understand that by simply having this `Handler` in place, means our function is now capable to interact with our HTTP requests, user session, DB, etc'.

And indeed, on the first line we do a count query, to return all the items that already have the given price. Again, talking about type safety, this query isn't just a regukar query. It's a type-safe query, that will not compile if we give it wrong values. That `ItemPrice`

<!-- more -->

{% include thumbnail.html image_path="assets/images/posts/yesod-forms-restful/validation-error.jpg" caption="Validation errors" %}
