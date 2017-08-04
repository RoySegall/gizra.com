module PeopleMap.Model
    exposing
        ( ShowMap
        , Marker
        )


type alias GitHubName =
    String


type alias ShowMap =
    Bool


type alias Marker =
    { id : GitHubName
    , lat : Float
    , lng : Float
    }
