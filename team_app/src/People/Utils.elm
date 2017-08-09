module People.Utils
    exposing
        ( getAttributesFromPeople
        , getMapPropertiesFromPeople
        )

import Attribute.Model exposing (Attribute(..))
import DictList
import List.Extra exposing (unique)
import LocationsMap.Model exposing (MapMarkers)
import People.Model exposing (People)


{-| We return a list of `String`s instead of a single `String`, since some
values can be multiple. For example the `Food` attributes can have multiple
values.
-}
getAttributesFromPeople : People -> List Attribute
getAttributesFromPeople people =
    DictList.foldl
        (\_ person accum ->
            List.foldl
                (\val uniqueAccum ->
                    -- Make list unique.
                    if List.member val uniqueAccum then
                        uniqueAccum
                    else
                        val :: uniqueAccum
                )
                []
                (List.append person.attributes accum)
        )
        []
        people


{-| We return a list of map markers containing the properties important for the
markers.
-}
getMapPropertiesFromPeople : People -> MapMarkers
getMapPropertiesFromPeople people =
    DictList.foldl
        (\gitHubName person accum ->
            let
                mapProperties =
                    [ { id = gitHubName
                      , name = person.name
                      , title = person.title
                      , image = person.image
                      , coordinates = person.coordinates
                      }
                    ]
            in
                (List.append mapProperties accum)
        )
        []
        people
