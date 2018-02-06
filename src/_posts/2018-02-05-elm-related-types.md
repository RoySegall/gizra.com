---
title: "Expressing a Relationship between Multiple Types in Elm"
tags:
  - Elm
permalink: "/content/elm-related-types/"
layout: post
image: "/assets/images/posts/elm-related-types/thumb.jpg"
description: "What options do you have when Elm types have something in common? Have you considered type classes?"
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

## Our Data Model

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
than just the type level)...something like:[^singleton]

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
the sort of work that we wanted to do with these types -- in other
words, the functions we wanted to be able to write. In pseudo-code, here
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

If what we want is to define a type that can either by a `Child` or a
`Mother`, the simplest way of doing it is via a tagged type (sometimes
referred to as a sum type, union type, or algebraic data type). That is the
most basic way in which we can define something which might be one sort of
thing or another sort of thing. So, a `Person` could be defined in this way:

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
    Mother`, where the first `Mother` is a tag and the second `Mother` is a type.
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

            PersonIdMother id ->
                Just id

    getChildren : PersonId -> Container -> List ChildId
    getChildren personId container =
        getMotherId personId container
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
        = MotherMeasurements MotherMeasurements
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
of `hasPendingActivity` to return a `Maybe` (or a `Result`)...something like:

```elm
    hasPendingActivity : PersonId -> Activity -> Container -> Maybe Bool
```

That way, we could return `Nothing` in cases where there is a mis-match between
our parameters. This would be technically correct at some level, but is really
ugly. Perhaps we can do better!

## Type Classes

What if we conceived of the `Person` type not as a "wrapper" for `Child` and
`Mother`, but instead as a set of requirements that we must fulfill in order to
deal with a type as a person? In Elm, we could express those requirements in
the form of a record, along these lines (with some omissions):

```elm
    type alias Person p =
        { getAllActivities : p -> List Activity
        , getAvatarUrl : p -> Maybe String
        , getBirthDate : p -> NominalDate
        , getName : p -> String
        , iconClass : p -> String
        }
```

Then, we need to fill in the record for `Child` and for `Mother`, something
like this:

```elm
    childPerson : Person Child
    childPerson =
        { getAllActivities =
            always <|
                List.map ChildActivity
                    [ TakePhoto
                    , MeasureHeight
                    , MeasureWeight
                    ]
        , getAvatarUrl = .avatarUrl
        , getBirthDate = .birthDate
        , getName = .name
        , iconClass = always "child"
        }


    motherPerson : Person Mother
    motherPerson =
        { getAllActivities =
            always <|
                List.map MotherActivity
                    [ RecordFamilyPlanningMethod
                    ]
        , getAvatarUrl = .avatarUrl
        , getBirthDate = .birthDate
        , getName = .name
        , iconClass = always "mother"
        }
```

So `Person` now describes a class of types (or, perhaps, a "typeclass") with
certain capabilities. If we're writing a function that needs to make use of one
of those capabilities, we no longer have to specify exactly which type
it takes. Instead, we can ask for any type that has the capability we need.

Consider, for instance, a function to view a person. In our first attempt at
this, with a tagged type for `Person`, a simple version might look something
like this.

```elm
    viewPerson : Person -> Html a
    viewPerson person =
        div []
            [ h4 [] [ text <| getName person ]
            , getAvatarUrl person
                |> maybeViewImage (iconClass person)
            ]
```

Using `Person` as a typeclass instead would look something like this:[^haskelldeclaration]

[^haskelldeclaration]:
    If you happen to be familiar with languages like Haskell which have explicit
    support for typeclasses, the declaration of this kind of function wouldn't
    actually look much different. Instead of `viewPerson : Person p -> p -> Html
    a`, you'd have something like `viewPerson :: Person p => p -> Html a`.

```elm
    viewPerson : Person p -> p -> Html a
    viewPerson personConfig person =
        div []
            [ h4 [] [ text <| personConfig.getName person ]
            , personConfig.getAvatarUrl person
                |> maybeViewImage (personConfig.iconClass person)
            ]
```

This leads to a corresponding difference in how you would call the two
functions. In our previous case, assuming you knew you had a `Child`, you'd
need to wrap it up as a `Person`...something like `viewPerson (Child child)`.
Using typeclasses, you can simply supply the child itself, along with the
implementation which allows you to treat a child as a person...something like
`viewPerson childPerson child`.

Now, so far, we haven't actually gained a lot by using `Person` as a typeclass
instead of a tagged type -- it's just an alternate idiom, so far. The
compelling advantage comes when dealing with additional related types. Consider
something like `getAllActivities` and `hasPendingActivity`. Instead of dealing
with a wrapped `Activity` type, they can now deal directly with the exact type
that expresses the activities which are relevant to this kind of person. This
can be expressed in Elm as additional type parameters to the `Person` record,
along these lines:

```elm
    type alias Person p a id m =
        { getAllActivities : p -> List a
        , getAvatarUrl : p -> Maybe String
        , getBirthDate : p -> NominalDate
        , getChildren : id -> Container -> List ChildId
        , getMotherId : id -> Container -> Maybe MotherId
        , getName : p -> String
        , hasPendingActivity : id -> a -> Container -> Bool
        , iconClass : p -> String
        , getMeasurements : id -> Container -> m
        }
```

You might call this a "multi-parameter type class", if you were so inclined.

Adding these additional type parameters neatly solves our difficulty with
implementing `hasPendingActivity`, since we can now depend on getting an
activity of the appropriate type -- the compiler will complain if we don't. So,
we can do something like:

```elm
    motherConfig : Person Mother MotherActivity MotherId MotherMeasurements
    motherConfig =
        { hasPendingActivity = hasPendingMotherActivity
        , ...
        }

    childConfig : Person Child ChildActivity ChildId ChildMeasurements
    childConfig
        { hasPendingActivity = hasPendingChildActivity
        , ...
        }

    hasPendingChildActivity : ChildId -> ChildActivity -> Container -> Bool
    hasPendingChildActivity childId childActivity container =
        ...

    hasPendingMotherActivity : MotherId -> MotherActivity -> Container -> Bool
    hasPendingMotherActivity motherId motherActivity container =
        ...

```

There can no longer be any mismatches between the `id` and the `activity`
supplied to `hasPendingActivity`, since the compiler is aware of all the
related types and will complain if any of them are wrong.

So, while you might have heard that Elm lacks typeclasses, my own experience is
that I use them (at least somewhere) in pretty much every app. You can also
find examples of this technique in packages such as
[elm-sortable-table](http://package.elm-lang.org/packages/evancz/elm-sortable-table/1.0.1),
where the `Config data msg` in `view : Config data msg -> State -> List data ->
Html msg` is a kind of typeclass.

There are a few limitations of typeclasses in Elm which I should
mention.  One is that you must explicitly mention the typeclass implemenation
when you call a function that requires one. So, for instance, to call the
`viewPerson` function sketched above, you need to explicitly refer to the
typeclass...something like `viewPerson childConfig child`, or `viewPerson
motherConfig mother`.  In some languages, the compiler can deduce that if
you're supplying a `child` to `viewPerson`, you must want to use the
`childConfig`, so you don't have to mention it explicitly. That is a
convenience, but it is often confusing to try to follow the compiler's
reasoning about which typeclass instance it will deduce. It may not be
such a terrible thing to just say which one you want. Saying which typeclass
you want also makes it easy to construct typeclasses at run-time, which is
occasionaly handy, and is more convoluted (but not impossible) in languages
like Haskell.

A bigger difficulty is Elm's lack of higher-kinded polymorphism. What this
means is that type parameters cannot be used as wrappers -- they can only be
wrapped. So, in the example above, we definitely need to say `List p`...the
`p` can be a parameter, but we have to make a definite choice about `List`. To
put it another way, you must always choose concrete "container" types. So,
there are some relationships between types that you won't be able to model
accurately. However, that still leaves a lot of room for this technique to be
useful.

Finally, there are cases in which you really do want a tagged type. Consider a
case where you might want to include both children and mothers in the same
list.

- You can say `List p`, but that is either a list of all mothers, or all
  children, not a list that can include both.

- You could do something fancy with existential types (or rank-n types),
  but Elm doesn't have those.

So, if you need a list that can include both mothers and children, you're pretty
much going to need a tagged type. In our app, it turned out that we didn't need
that for mothers and children, but there were cases in which we wanted lists
of activities. So, in addition to the `Person` record, we also had a tagged type
for activities.

```elm
    type Activity
        = MotherActivity MotherActivity
        | ChildActivity ChildActivity
```

Once you have that, constructing a `List Activity` is straightforward. We also
added something to `Person` so that we could convert (when necessary) from its
generic activity type to the more concrete `Activity`, along these lines:

```elm
    type alias Person p a id m =
        { ...
        , wrapActivity : a -> Activity
        }

    childConfig : Person Child ChildActivity ChildId ChildMeasurements
    childConfig =
        { ...
        , wrapActivity = ChildActivity
        }

    motherConfig : Person Mother MotherActivity MotherId MotherMeasurements
    motherConfig =
        { ...
        , wrapActivity = MotherActivity
        }
```

This allows you to use both approaches (tagged types and typeclasses) together,
in cases where you need both. However, it is often the case that just one or the
other approach is fine on its own.

## Just Don't Do It

A question which may have occurred to some readers by now is whether we have
really gained anything by expressing a relationship between `Mother` and
`Child` (whether by tagged types or typeclasses). What if we didn't bother?
What if we just let mothers be mothers and children be children, without
bothering with unifying types? After all, when writing Elm code, the right
answer to some of our impulses is "just don't do it" -- especially when the
impulse is towards greater abstraction.

Consider the `hasPendingActivity` function I've sketched above. No matter how
we structure things, we still need the more concrete `hasPendingChildActivity`
and `hasPendingMotherActivity` anwyway. So, what exactly do we gain by also
having the more abstract version at our disposal?

One way of addressing this question is to look at the `viewPerson` function
which I sketched out above:

```elm
    -- With tagged types
    viewperson : person -> html a
    viewperson person =
        div []
            [ h4 [] [ text <| getname person ]
            , getavatarurl person
                |> maybeviewimage (iconclass person)
            ]

    -- With type classes
    viewPerson : Person p -> p -> Html a
    viewPerson personConfig person =
        div []
            [ h4 [] [ text <| personConfig.getName person ]
            , personConfig.getAvatarUrl person
                |> maybeViewImage (personConfig.iconClass person)
            ]
```

What if we didn't have a `Person` type at all -- just `Mother` and `Child`. Then,
we'd end up with something like this:

```elm
    viewMother : Mother -> Html a
    viewMother mother =
        div []
            [ h4 [] [ text mother.name ]
            , maybeViewImage "mother" mother.avatarUrl
            ]

    viewChild : Child -> Html a
    viewChild child =
        div []
            [ h4 [] [ text child.name ]
            , maybeViewImage "child" child.avatarUrl
            ]
```

I suppose it's true that we're repeating ourselves a little bit here.  However,
if our `view` function really were this simple, it would be obviously better to
repeat ourselves rather than engage in the complexity of constructing a type
class. That is, you wouldn't want to use type classes to avoid this little bit
of repitition -- the repitition would be less painful (and, fewer lines of
code) than the type classes.

Of course, in our real app, the `view` function was much more complex than this.
It's always difficulty writing about programming techniques that only make sense
in the presence of complexity, since it would be tedious, and distracting, to
actually provide all the complexity. But, consider the following sort of pseduo-code
that is somewhat typical:

```elm
    viewMother : Mother -> Html a
    viewMother mother =
        let
            nameBlock =
                viewName mother.name

            imageBlock =
                maybeViewImage "mother" mother.avatarUrl

            part3 =
                ...

            part4 =
                ...

            part5 =
                ...

            part6 =
                ...
        in
        div []
            [ nameBlock
            , imageBlock
            , part3
            , part4
            , part5
            , part6
            ]
```

Now, suppose you want to be able to view a `Child` in a roughly similar way,
while avoiding as much code repitition as is reasonable. One way is to
generalize the whole function, using tagged types or type classes (the
approaches we've considered so far). But that's not the first technique I'd
actually reach for. The first technique I'd reach for is generalizing the
**parts** of the function. So, you could imagine something like this for
`viewChild`:

```elm
    viewChild : Child -> Html a
    viewChild child =
        let
            nameBlock =
                viewName child.name

            imageBlock =
                maybeViewImage "child" child.avatarUrl

            part3 =
                ...

            part4 =
                ...

            part5 =
                ...

            part6 =
                ...
        in
        div []
            [ nameBlock
            , imageBlock
            , part3
            , part4
            , part5
            , part6
            ]
```

Here, we're identifying multiple "helper" functions, like `viewName` and
`maybeViewImage`, which we can re-use **inside** our two distinct functions,
rather than trying to create a single, master function. Now, this does leave
some repitition in `viewChild` and `viewMother`. However, the guts of the logic
is not repeated, since it is broken out into multiple functions that both
`viewChild` and `viewMother` can call. Depending on what kind of computation
goes into `part3`, `part4`, `part5` and `part6`, we may have many more
opportunities to create additional helper functions.

Why is this often a preferable approach? One reason is that the helper
functions often make a great deal of sense in their own right -- you'd probably
want to create them anyway. One of the main questions I ask myself when
structuring code is: how can I structure this in a way that I can be confident
that it's finished -- that I won't have to revisit it? That is a lot easier to
do for `viewNameBlock` than it is for `viewMother`. Well, I suppose you might
want to change the way the name is viewed at some point. But it's a small,
well-defined function that you may be able to just leave alone for quite a
while. That's the kind of function I like.

The other reason is that the similarities between `viewChild` and `viewMother`
may not be as profound as you initially thought. What if the product manager
comes back to you tomorrow, humble developer, and says that children ought to
be viewed in a subtly different way than mothers? (They are known to do such
things).  If you've created a `viewPerson` function that handles both mothers
and children, you can deal with that by creating some sort of configuration in
your `Person` type -- for instance, something like the `iconClass` I use above.
However, if you have to do too much of that, your `viewPerson` function can
become convoluted and tricky to understand. It might have been better to break
out a bunch of helper functions, so that you can make more comprehensible
changes in separate `viewChild` and `viewMother` functions.

Now, in the case of the app I was working on, I was pretty confident that the
view for children was going to stay structurally similar to the view for
mothers, as we continued to develop the app. So, it seemed worthwhile to
construct a unified `viewPerson` function using type classes. But, you can
never be entirely sure -- you have to rely on an intuition as to which
techniques best fit which situation.  After all, you can't really sketch out
each approach in detail and see which is nicer -- it would take too long!
(Unless you're writing a blog post!).  Instead, you need to think about the
app's requirements now, and what they are likely to become, and make the best
choice you can.

## Extensible Records

Finally, I should at least mention one option which we never seriously tried,
but which could be interesting in some cases: extensible records.

When you have two related types that are both "record" types, and they share
some field definitions in common, it is possible to use Elm's record syntax to
work with just those fields. Consider a `getName` function which we want to use
with both `Mother` and `Child`. Each of those has a field `name : String`. So,
we could define a `getName` function like this:

```elm
    getName : { a | name : String } -> String
    getName thingWithAName =
        thingWithAName.name

    -- Or, more succintly
    getName2 : { a | name : String } -> String
    getName2 =
        .name
```

Either of those functions can be called with a `Mother` or a `Child`, because
both a `Mother` and a `Child` have the required `name` field. (The `a` type
parameter tells the compiler that the argument can have other fields as well,
in addition to `name`).

Now, as the second version of the example points out, you don't really even
need to define `getName`, since Elm will magically build it for you if you say
`.name`. But, this can get more interesting where two types share multiple
fields. It becomes possible to define a type that expresses all the fields
that the two types have in common. For instance, you could imagine a `Person`
type that contains the fields that `Child` and `Mother` have in common:

```elm
    type alias Person a =
        { a
            | name : String
            , avatarUrl : Maybe String
            , birthDate : NominalDate
        }
```

Then, you could almost write the sinplest version of our `viewPerson` function
in a way that will accept either a `Child` or a `Mother` as an argument.

```elm
    viewPerson : Person a -> Html b
    viewPerson person =
        div []
            [ h4 [] [ text person.name ]
            , maybeViewImage "?" person.avatarUrl
            ]
```

This can be a useful technique in simple cases. However, even our simplest
version of `viewPerson` isn't quite simple enough. We want to associate a
different `iconClass` with mothers and children, for use in `maybeViewIamge`.
Extensible records don't, by themselves, provide a mechanims for doing that.
So, you'll often need more complex techniques than extensible records. However,
in cases where extensible records are sufficient, they are very convenient.

## Notes

