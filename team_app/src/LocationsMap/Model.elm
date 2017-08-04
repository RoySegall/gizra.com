module LocationsMap.Model
    exposing
        ( MapManager
        , MarkersLocations
        , SelectedMarker
        , ShowMap
        , Marker
        )


type alias MapManager =
    { showMap : ShowMap
    , markersLocations : MarkersLocations
    , selectedMarker : SelectedMarker
    }


type alias GitHubName =
    String


type alias SelectedMarker =
    Maybe String


type alias ShowMap =
    Bool


type alias MarkersLocations =
    List Marker


type alias Marker =
    { id : GitHubName
    , lat : Float
    , lng : Float
    }
