module App.Model
    exposing
        ( emptyModel
        , Flags
        , Msg(..)
        , Model
        )

import Attribute.Model exposing (Attribute)
import DictList exposing (DictList)
import EveryDict exposing (EveryDict)
import GizraTeam exposing (mapManager, people)
import LocationsMap.Model exposing (MapManager, Marker, MarkersLocations, ShowMap)
import Magnets.Model exposing (Magnets, Msg)
import People.Model exposing (GitHubName, Person)


type Msg
    = MsgMagnets Magnets.Model.Msg
    | ToggleAttribute Attribute
    | ToggleMap MapManager


type alias Flags =
    { randomNumbers : List Int }


type alias Model =
    { magnets : Magnets
    , people : DictList GitHubName Person
    , mapManager : MapManager
    }


emptyModel : Model
emptyModel =
    { magnets = EveryDict.empty
    , people = people
    , mapManager = mapManager
    }
