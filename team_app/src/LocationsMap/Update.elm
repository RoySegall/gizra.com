port module LocationsMap.Update exposing (..)

import LocationsMap.Model exposing (MapManager, SelectedMarker, ShowMap)


-- interactions with Leaflet


port mapManager : MapManager -> Cmd msg


port showMap : ShowMap -> Cmd msg


port selectMarker : (Maybe String -> msg) -> Sub msg
