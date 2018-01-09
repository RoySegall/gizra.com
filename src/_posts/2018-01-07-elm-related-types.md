---
title: "Expressing a relationship between multiple types in Elm"
tags:
  - Elm
permalink: "/content/elm-related-types/"
layout: post
image: "/assets/images/posts/elm-related-types/thumb.jpg"
description: "What options do you have when types have something in common? Have you considered type classes?"
author: rgrempel
---

Elm's type system is sufficiently sophisticated that you'll often want to make
fine-grained distinctions between roughly similar types.  In a recent project,
for instance, we ended up with a separate type for a `Mother` and a
`Child`.[^nofathers] Now, a `Mother` is a little different than a `Child`.
Most obviously, mothers have children, whereas (at least, in our data model)
children do not. So, it was nice for them to be separate types. In fact, there
were certain operations which could be done on a `Mother` but not a `Child`
(and vice versa). So it was nice to be able to enforce that at the type level.

[^nofathers]:
    There were no fathers in our app's data model.

Yet, a `Mother` and a `Child` clearly have a lot in common as well. For this
reason, it sometimes felt natural to write functions that could accept either.  So, in
those cases, it was a little awkward for them to be separate types.  Something
was needed to express a relationship between the two types.

What alternatives are available to do this sort of thing in Elm? Which did we
end up choosing? For answers to these questions, and more, read on!

<!-- more -->

## Our data model

Before proceeding further, here's a little excerpt from our data model, to get
us started. Of course, some of this would have been a little different had we
chosen a different approach, so we'll explore that as well. But this will give
you a sense of the kind of data we were working with. (I've simplified things a
bit, compared with the actual app).


```elm
    type Gender
        = Female
        | Male

    type alias Child =
        { name : String
        , avatarUrl : Maybe String
        , motherId : MotherId
        , birthDate : NominalDate
        , gender : Gender
        }

    type alias Mother =
        { name : String
        , avatarUrl : Maybe String
        , children : List ChildId
        , birthDate : NominalDate
        }

    type MotherId =
        MotherId Int

    type ChildId =
        ChildId Int
```

You'll notice that each `Child` has a reference not to a `Mother`, but to a
`MotherId`.  Similarly, each `Mother` has a list of `ChildId`, not a list of
`Child`. The reasons we do things this way are a little subtle -- perhaps they
deserve a blog post of their own someday. (Amongst other things, it keeps the
client data model closer to the data model on the backend, which makes JSON
encoding and decoding simpler). However, it does mean that we need some kind of
"container" type in order to get actual children and mothers. In our case, the
relevant parts of that type looked something like this (again, I've simplified
a little bit compared to the actual app):

```elm
    type alias Container =
        { mothers : EveryDict MotherId Mother
        , children : EveryDict ChildId Child
        , motherMeasurements : EveryDict MotherId MotherMeasurements
        , childMeasurements : EveryDict ChildId ChildMeasurements
        }

    type alias MotherMeasurements =
        { familyPlanningMethod : List FamilyPlanningMethod
        }

    type alias ChildMeasurements =
        { height : List Height
        , weight : List Weight
        , photo : List Photo
        }
```

Now, what are all these "measurements"? They were the main point of the app we
were working on -- we were collecting and displaying those measurements (and a
few others I've omitted for the sake of simplicity).

Note that these measurments are themselves an example of related types. You
could, for instance, say that `ChildMeasurements` is to `Child` as
`MotherMeasurements` is to `Mother`. Furthermore, we needed another couple of
related types to represent the various measurements at the data level (rather
than just the type level) ... something like:[^singleton]

[^singleton]:
    You might think it odd that the `MotherMeasurements` and `MotherActivty`
    types have just one alternative (`familyPlanningMethod` and
    `RecordFamilyPlanningMethod` respectively). The explanation is that they
    could eventually have more, so it was nice to start with a structure that
    would accommodate that.

``` elm
    type ChildActivity
        = TakePhoto
        | MeasureHeight
        | MeasureWeight

    type MotherActivity
        = RecordFamilyPlanningMethod
```

Now, these types are all reasonably sensible on their own. However, there
is clearly some kind of relationship amongst them. You could even imagine
giving names to some of those relationships:

- `Child` and `Mother` could both be a kind of `Person`.
- `ChildMeasurements` and `MotherMeasurements` could both be a kind of `Measurement`.
- `ChildActivty` and `MotherActivity` could both be a kind of `Activity`.

But how can we express those kind of relationships in Elm's type system? Or,
to put it another way, how might you fill in the gaps in this pseudo-code:

```elm
    type Person = ???

    type Measurement = ???

    type Activity = ???
```

To evaluate the available alternatives, you'll need to know a little more about
the kinds of manipulations which we wanted to do with these types -- in other
words, the sort of functions we wanted to be able to write. In pseudo-code, here
are some example function signatures that we ended up needing. (You can probably
form an intuition about why we'd want most of these things, and we'll discuss
some of them in more detail below).

```elm
    getAllActivities : Person -> List Activity

    getAvatarUrl : Person -> Maybe String

    getBirthDate : Person -> NominalDate

    getChildren : PersonId -> Container -> List ChildId

    getMotherId : PersonId -> Container -> Maybe MotherId

    getName : Person -> String

    hasPendingActivity : PersonId -> Activity -> Container -> Bool

    iconClass : Person -> String

    getMeasurements : PersonId -> Container -> Measurements
```

So, what approaches are possible? I can think of four:

1. Tagged types
2. Type classes
3. Just don't do it
4. Extensible records

## Tagged Types

If what we want is to define a type that can either by a `Child` or a `Mother`,
the simplest way of doing it is via a tagged type (sometimes referred to as a
sum type or algebraic data type). That is the basic way in which we can define
something which might be one sort of thing or another sort of thing. So, a
`Person` could be defined in this way:

```elm
    type Person
        = Mother Mother
        | Child Child
    
    type PersonId
        = PersonIdMother MotherId
        | PersonIdChild ChildId
```

What we have here is a kind of "wrapper" type (`Person`), which can be one of
two things (either a `Child` or a `Mother`). To identify which it is, we re-use
the words `Child` and `Mother` as "tags" which identify, for a particular
`Person`, what sort of person it is.[^tagsandtypes]

[^tagsandtypes]:
    Elm can distinguish tags from the types by context, so you can re-use the
    type names as tag names if you like. This is what we do with `Mother
    Mother`, where the first `Mother` is a tag and the second `Mother` a type.
    Or, you can invent arbitrary tags. This is necessary for `PersonIdMother
    MotherId` -- we can't just say `MotherId MotherId` because we've already
    used `MotherId` as a tag when we defined `type MotherId = MotherId Int`. At
    least, we can't do it in the same module, since the two uses of `MotherId`
    as a tag would clash.

Now, this will no doubt be very familiar to you, and it is certainly the first
thing you ought to think about when expressing this kind of relationship
between types. It is the simplest approach, and often fits the bill admirably.
Consider, for instance, how we might implement a few of the functions we
sketched above:

```elm
    getAvatarUrl : Person -> Maybe String
    getAvatarUrl person =
        case person of
            Child child ->
                child.avatarUrl

            Mother mother ->
                mother.avatarUrl

    iconClass : Person -> String
    iconClass person =
        case person of
            Child _ ->
                "child"

            Mother _ ->
                "mother"

    getMotherId : PersonId -> Container -> Maybe MotherId
    getMotherId personId container =
        case personId of
            PersonIdChild id ->
                EveryDict.get id container.children
                    |> Maybe.map .motherId

            MotherId id ->
                Just id    
    
    getChildren : PersonId -> Container -> List ChildId
    getChildren personId container =
        getMotherId personId
            |> Maybe.andThen (\id -> EveryDict.get id container.mothers)
            |> Maybe.map .children
            |> Maybe.withDefault []
```

That all works very well. However, this approach turned out to have some
pitfalls in our app, especially when we started implementing functions which
depended on additional related types. Consider how one might express those other
types:

```elm
    type Measurements
        = MotherMeasurements MotherMeasurments
        | ChildMeasurements ChildMeasurements

    type Activity
        = MotherActivity MotherActivity
        | ChildActivity ChildActivity

```

So far, so good, and some additional functions can be implemented in a perfectly
reasonable way, e.g.:

```elm
    getAllActivities : Person -> List Activity
    getAllActivities person =
        case person of
            Mother _ ->
                List.map MotherActivity
                    [ RecordFamilyPlanningMethod ]

            Child _ ->
                List.map ChildActivity
                    [ TakePhoto
                    , MeasureHeight
                    , MeasureWeight
                    ]
```

However, we start to run into some trouble when implementing functions that
depend on multiple related types. Consider how we might implement
`hasPendingActivity`. The original implementation looked something roughly like
this (simplified a little compared to the actual app):

```elm
    hasPendingActivity : PersonId -> Activity -> Container -> Bool
    hasPendingActivity personId activity container =
        case ( personId, activity ) of
            ( PersonIdMother id, MotherActivity motherActivity ) ->
                hasPendingMotherActivity id motherActivity container

            ( PersonIdChild id, ChildActivity childActivity ) ->
                hasPendingChildActivity id childActivity container

            _ ->
                -- Hmm. If we get here, we've got a mis-match between the
                -- personId type and the activity type ... one is suitable for
                -- a mother, but the other is suitable for a child. So, what
                -- answer should we give?
                Debug.crash "Mismatched parameters"
```

Now, whenever you're writing code and you think to yourself "we shouldn't get
here", that's a clue that you haven't structured your types quite as well as
you might.  Ideally, you should be able to prove to the compiler that you can't
get there, so you don't have to write the code at all. Or, you should at least
be able to prove to yourself that you can't get there, even if it's hard to
convince the compiler (that's one reasonable case for `Debug.crash` in
production code).  However, in this case we can do neither. It's perfectly
possible to call the function with a mis-match between the `PersonId` and the
`Activity`, so we have to figure out what answer to give in that case.

You might be thinking that it would be perfectly reasonable to answer `False`
instead of using `Debug.crash`. After all, a `Mother` presumably doesn't have a
pending `ChildActivity`. Yet there are a couple of problems with this. Calling
the function with these mis-matched parameters presumably indicates a bug of
some kind in your program logic. It would be better to prevent this bug with
appropriately designed types, rather than acting as though there were some
reasonable way to continue. Furthermore, what happens if you apply a `not` to
the result of calling `hasPendingActivity`? All of a sudden, it doesn't seem so
reasonable to have returned `False` to a non-sensical question.

Now, I suppose one option to deal with this would be to change the signature
of `hasPendingActivity` to return a `Maybe` (or a `Result`) ... something like:

```elm
    hasPendingActivity : PersonId -> Activity -> Container -> Maybe Bool
```

That way, we could return `Nothing` in cases where there is a mis-match between
our parameters. This would be technically correct at some level, but is really
ugly. Perhaps we can do better!

## Type Classes

You may be aware that Elm does not have type classes. But what, exactly, are
type classes anyway?

... insert discussion here ...

In fact, the need to be explicit about type-class selection in Elm is actually
sometimes a bit of an advantage, compared to languages like Haskell or
Purescript that handle it automatically. It's sometimes not easy to keep the correct
mental model of how those languages go about selecting a type class instance where
one is needed. In Elm, it's a no-brainer -- you just say which instance you want.
Plus, this makes things like constructing an instance on the fly trivial -- something
which would be an advanced feature in other languages.[^onthefly]

[^onthefly]:
    Normally, you should try to avoid constructing instances on the fly,
    but occasionaly it is useful.

One extension to Elm that would help when using manual type classes would be
higher-kinded polymorphism.

## Just Don't Do It

Now, I should digress for a moment to ask why we want to represent a
relationship between these types at all. After all, when writing Elm code, the
right answer to some of our impulses is "just don't do it" -- especially when
the impulse is towards greater abstraction.

So, how do some of the functions I've been talking about get used? What would
our code look like if we didn't bother with them?

... insert discussion here ...

## Extensible Records

Finally, I should at least mention one option which we never seriously tried,
but which could be interesting in some cases: extensible records.

... insert discussion ...

-----

## Notes

