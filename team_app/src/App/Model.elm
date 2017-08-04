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
import GizraTeam exposing (people)
import Magnets.Model exposing (Magnets, Msg)
import People.Model exposing (GitHubName, Person)
import PeopleMap.Model exposing (Marker, ShowMap)


type Msg
    = MsgMagnets Magnets.Model.Msg
    | ToggleAttribute Attribute


type alias Flags =
    { randomNumbers : List Int
    , selectedMarker : Maybe String
    }


type alias Model =
    { magnets : Magnets
    , people : DictList GitHubName Person
    , showMap : ShowMap
    }


emptyModel : Model
emptyModel =
    { magnets = EveryDict.empty
    , people = people
    , showMap = True
    }
