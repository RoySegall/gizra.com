module App.View exposing (..)

import App.Model exposing (..)
import App.Update exposing (..)
import Attribute.View exposing (viewEmptyResult)
import DictList
import EveryDict exposing (EveryDict)
import Html exposing (..)
import Html.Attributes exposing (alt, class, classList, href, id, src, style, target)
import Html.Events exposing (onClick)
import LocationsMap.View exposing (viewMap)
import Magnets.Utils exposing (getSelectedAttributesFromMagnets)
import Magnets.View
import People.Utils exposing (getAttributesFromPeople, getMapPropertiesFromPeople)
import People.View exposing (viewPerson)
import View.Extra exposing (viewHiddenIf)


view : Model -> Html Msg
view model =
    let
        selectedAttributes =
            getSelectedAttributesFromMagnets model.magnets

        filteredPeople =
            if List.isEmpty selectedAttributes then
                model.people
            else
                DictList.filter
                    (\_ person ->
                        -- Check if person has all selected attributes.
                        List.foldl
                            (\selectedAttribute accum ->
                                if accum then
                                    List.member selectedAttribute person.attributes
                                    -- We already found a non matching attribute.
                                else
                                    False
                            )
                            True
                            selectedAttributes
                    )
                    model.people

        -- Get the attributes from all the people, regardless of the filtered
        -- ones.
        allAttributes =
            getAttributesFromPeople model.people

        peopleOrEmptyResult =
            if DictList.isEmpty filteredPeople then
                viewEmptyResult selectedAttributes
            else
                div [ class "ui three stackable cards" ]
                    (List.map
                        (\( githubName, person ) ->
                            viewPerson person
                        )
                        (DictList.toList filteredPeople)
                    )

        hideMap =
            { showMap = False
            , mapMarkers = []
            }

        showMap =
            { showMap = True
            , mapMarkers = getMapPropertiesFromPeople model.people
            }
    in
        div []
            [ div
                [ id "team-toggle-view"
                , class "ui header computer only right aligned"
                ]
                [ a
                    [ onClick (ToggleMap hideMap) ]
                    [ i
                        [ class "grid layout icon" ]
                        []
                    , text "Grid View"
                    ]
                , a
                    [ onClick (ToggleMap showMap) ]
                    [ i
                        [ class "map icon" ]
                        []
                    , text "Map View"
                    ]
                ]
            , viewHiddenIf peopleOrEmptyResult (not model.showMap)
            , viewHiddenIf (Html.map MsgMagnets <| Magnets.View.view model.magnets) (not model.showMap)
            , viewMap model.showMap
            ]
