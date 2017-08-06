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
  selectMarker: null,
  showMap: false
});

// Maintain the map and marker state.
var mapEl = undefined;
var markersEl = {};

// var defaultIcon = L.icon({
//   iconRetinaUrl: 'default@2x.png',
//   iconSize: [35, 46]
// });
//
// var selectedIcon = L.icon({
//   iconRetinaUrl: 'selected@2x.png',
//   iconSize: [35, 46]
// });


// setTimeout(function () {
//   addMap();
// }, 50);

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
      markersEl[marker.id].setLatLng([marker.lat, marker.lng]);

      var icon = L.icon({
        iconUrl: '/assets/images/team/members/' + marker.id + '.jpg',
        iconSize: [35, 52],
        popupAnchor:  [0, -25]
      });

      // Set the marker's icon.
      markersEl[marker.id].setIcon(icon);

      // Add a popup to the marker.
      markersEl[marker.id].bindPopup("<b>Hello world!</b><br>I am a popup.");
    });
  }, 50);

});

/**
 * Initialize a Leaflet map.
 */
function addMap() {
  // Leaflet
  var mapEl = L.map('map').setView([45, 0], 2);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={access_token}', {
    access_token: 'pk.eyJ1IjoiZ2l6cmEiLCJhIjoiWlNyQ2FsayJ9.bFV68ExxW9TFTVQxtbI_Fw',
    maxZoom: 10,
    id: 'mapbox.streets'
  }).addTo(mapEl);

  return mapEl;
}
