module People.Model exposing (..)

import Attribute.Model exposing (..)
import DictList exposing (DictList)
import PeopleMap.Model exposing (Marker)


type alias GitHubName =
    String


type alias Url =
    String


type alias People =
    DictList GitHubName Person


type SocialNetwork
    = Drupal String
    | Email String
    | Github String
    | Twitter String


type alias Person =
    { name : String
    , image : Url
    , socialNetworks : List SocialNetwork
    , title : String
    , attributes : List Attribute
    , location : Marker
    }
