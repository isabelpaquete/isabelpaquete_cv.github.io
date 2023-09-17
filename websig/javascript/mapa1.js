// Create variable to hold map element, give initial settings to map
var map1 = L.map("map1", { center: [41.203818, -8.676315], zoom: 12 }); //TENTAR EDITAR

// Add OpenStreetMap tile layer to map element
var basetopo = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png");

var baserelief = L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png");

baserelief.addTo(map1);
basetopo.addTo(map1);

var baselayers = {
  "mapa 1": baserelief,
  "mapa 2": basetopo,
};

// Write function to set Properties of the Popup
var popup = L.popup();
function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent(((e.latlng.toString()).split('(')[1]).split(')')[0])
    .openOn(map1);
}

// Listen for a click event on the Map element
map1.on("click", onMapClick);

// load GeoJSON from an external file

// LIMITE CONCELHO
var concelhoAdicionado;
function addConcelho(concelhoGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  concelhoAdicionado = L.geoJson(concelhoGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Concelho: ${feature.properties.Concelho}<br>Link: <a href=${feature.properties.link} target="_blank">${feature.properties.link}</a>`);
    },
  })
  concelhoAdicionado.addTo(map1);
};

// LIMITE FREGUESIAS
var freguesiasAdicionadas;
function addFreguesias(freguesiasGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  freguesiasAdicionadas = L.geoJson(freguesiasGeoJson, {
    style: {
      color: "red",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Freguesia: ${feature.properties.Freguesia}<br>Link: <a href=${feature.properties.link} target="_blank">${feature.properties.link}</a>`);
    },
  })
  freguesiasAdicionadas.addTo(map1)
};

addFreguesias(freguesias)
addConcelho(concelho)

//Overlayers
var overlays = {
  "Concelho": concelhoAdicionado,
  "Freguesias": freguesiasAdicionadas
};

//Mudar de mapa e selecionar poligonos
L.control.layers(baselayers, overlays).addTo(map1);

// Add scalebar
var scale = L.control.scale();
scale.addTo(map1);
