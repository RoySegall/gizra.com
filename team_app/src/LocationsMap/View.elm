module LocationsMap.View exposing (viewMap)

import Html exposing (..)
import Html.Attributes exposing (class, id, src)
import LocationsMap.Model exposing (ShowMap)


viewMap : ShowMap -> Html msg
viewMap showMap =
    let
        mapEl =
            if showMap then
                div [ id "map" ] []
            else
                span [] []
    in
        div []
            [ mapEl ]
