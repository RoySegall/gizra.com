module LocationsMap.View exposing (viewMap)

import Html exposing (..)
import Html.Attributes exposing (alt, class, classList, href, id, src, style, target)
import People.Model exposing (People)
import LocationsMap.Model exposing (ShowMap)


viewMap : People -> ShowMap -> Html msg
viewMap people showMap =
    let
        mapEl =
            if showMap then
                div [ id "map" ] []
            else
                span [] []
    in
        div []
            [ mapEl ]
