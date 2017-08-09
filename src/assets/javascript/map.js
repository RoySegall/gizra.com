"use strict";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomNumbers = [];

for (var i = 0; i < 300; i++) {
  randomNumbers.push(getRandomInt(0, 1000));
}


var node = document.getElementById('team-app');
var elmApp = Elm.Main.embed(node, {
  randomNumbers: randomNumbers,
  showMap: false
});

// Maintain the map and marker state.
var mapEl = undefined;
var markersEl = {};

elmApp.ports.mapManager.subscribe(function(model) {
  // We use timeout, to let virtual-dom add the div we need to bind to.
  setTimeout(function () {
    if (!model.showMap && !!mapEl) {
      mapEl.remove();
      mapEl = undefined;
      markersEl = {};
      return;
    }

    mapEl = mapEl || addMap();

    model.mapMarkers.forEach(function(marker) {
      if (!markersEl[marker.id]) {
        markersEl[marker.id] = L.marker([marker.coordinates.lat, marker.coordinates.lng]).addTo(mapEl);
      }
      else {
        markersEl[marker.id].setLatLng([marker.coordinates.lat, marker.coordinates.lng]);
      }

      var icon = L.icon({
        iconUrl: '/assets/images/team/members/' + marker.image,
        iconSize: [35, 52],
        popupAnchor:  [0, -25]
      });

      // Set the marker's icon.
      markersEl[marker.id].setIcon(icon);

      var popupHtml = "<div class=\"ui items\"><div class=\"item\"><div class=\"content\"><div class=\"header\">" + marker.name + "</div><div class=\"meta\">" + marker.title + "</div></div></div></div>"

      // Add a popup to the marker.
      markersEl[marker.id].bindPopup(popupHtml);
    });
  }, 50);

});

/**
 * Initialize a Leaflet map.
 */
function addMap() {
  // Leaflet
  var mapEl = L.map('map').setView([45, -25], 3);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={access_token}', {
    access_token: 'pk.eyJ1IjoiZ2l6cmEiLCJhIjoiWlNyQ2FsayJ9.bFV68ExxW9TFTVQxtbI_Fw',
    maxZoom: 15,
    id: 'mapbox.streets'
  }).addTo(mapEl);

  return mapEl;
}
