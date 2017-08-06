module LocationsMap.Model
    exposing
        ( MapManager
        , MapMarkers
        , Marker
        , ShowMap
        )


type alias Url =
    String


type alias GitHubName =
    String


type alias ShowMap =
    Bool


type alias MapMarkers =
    List MarkerInfo


type alias Marker =
    { lat : Float
    , lng : Float
    }


type alias MarkerInfo =
    { id : GitHubName
    , name : String
    , image : Url
    , coordinates : Marker
    }


type alias MapManager =
    { showMap : ShowMap
    , mapMarkers : MapMarkers
    }
