module LocationsMap.Model
    exposing
        ( MapManager
        , Marker
        , ShowMap
        )


type alias GitHubName =
    String


type alias SelectedMarker =
    Maybe String


type alias ShowMap =
    Bool


type alias MapMarkers =
    List Marker


type alias Marker =
    { id : GitHubName
    , lat : Float
    , lng : Float
    }


type alias MapManager =
    { showMap : ShowMap
    , mapMarkers : MapMarkers
    , selectedMarker : SelectedMarker
    }
