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
`Child`.
[^nofathers] Now, a `Mother` is a little different than a `Child`.
Most obviously, mothers have children, whereas (at least, in our data model)
children do not. So, it was nice for them to be separate types. In fact, there
were certain operations which could be done on a `Mother` but not a `Child`
(and vice versa). So it was nice to be able to enforce that at the type level.

[^nofathers]:
    There were no fathers in our app's data model.

Yet, a `Mother` and a `Child` clearly have a lot in common as well. For this
reason, it sometimes felt natural to write functions that could accept.  So, in
those cases, it was a little awkward for them to be separate types.  Something
was needed to express a relationship between the two types.

What alternatives are available to do this sort of thing in Elm? Which did we
end up choosing? For answers to these questions, and more, read on!

<!-- more -->

## Our data model

Before proceeding further, here's a little excerpt from our data model, to get
us started.[^datamodel] Of course, some of this would have been a little
different had we chosen a different option, so we'll explore that as well. But
this will give you a sense of the kind of data we were working with.

[^datamodel]:
    I have made some slight modifications to the data model in order to avoid
    some complications that aren't relevant here.

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

    type alias MotherId =
        MotherId Int

    type alias ChildId =
        ChildId Int
```

Now, you'll notice that each `Child` has a reference not to a `Mother`, but to
a `MotherId`.  Similarly, each `Mother` has a list of `ChildId`, not a list of
`Child`. The reasons we do things this way are a little subtle -- perhaps they
deserve a blog post of their own someday. (In short, it keeps the client data
model closer to the data model on the backend, which makes JSON encoding and
decoding simpler). However, it does mean that we need some kind of "container"
type in order to get actual children and mothers. In our case, the relevant
parts of that type looked something like this (again, I've simplified a little
bit compared to the actual app):

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
        , muac : List Muac
        , nutrition : List Nutrition
        }
```

Now, what are all these "measurements"? They were essentially the point of the
app we were working on -- we were collecting and displaying those measurements.
And, they themselves are an example of related types. You might say that
`ChildMeasurements` is to `Child` as `MotherMeasurements` is to `Mother`. In
fact, we needed another couple of types to represent the various measurements
at the data level (rather than just the type level) ... something like:[^singleton]

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
        | MeasureMuac
        | MeasureNutrition

    type MotherActivity
        = RecordFamilyPlanningMethod
```

Now, these types would work OK at some level without more. However, there
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
    getActivities : Person -> List Activity

    getAvatarUrl : Person -> Maybe String

    getBirthDate : Person -> NominalDate

    getChildren : PersonId -> Container -> List ChildId

    getMotherId : PersonId -> Container -> Maybe MotherId

    getName : Person -> String

    hasPendingActivity : PersonId -> Activity -> Container -> Bool

    iconClass : Person -> String

    toChildId : PersonId -> Maybe ChildId

    toMotherId : PersonId -> Maybe MotherId

    getMeasurements : PersonId -> Container -> Measurements
```

So, what approaches are possible? I can think of four:

1. Sum types
2. Type classes
3. Just don't do it
4. Extensible records

## Sum Types

This is generally the simplest approach, and is the first answer you should
look for.

```elm
    type Person
        = Child Child
        | Mother Mother
```

And, in fact, this is what we tried first -- we had a prototype that used this
approach. However, it led to a variety of problems, because it was difficult
to properly represent the *other* associated types.

Consider, for instance, how you'd have to implement something like
`hasPendingActivity`.

...

So, something a little more sophisticated was called for.

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

