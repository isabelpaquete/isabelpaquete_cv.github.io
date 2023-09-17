// Create variable to hold map element, give initial settings to map
var map_cluster = L.map("map_cluster", { center: [41.203818, -8.676315], zoom: 12 }); //TENTAR EDITAR

// Add OpenStreetMap tile layer to map element
var basetopo = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png");

var baserelief = L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png");

baserelief.addTo(map_cluster);
basetopo.addTo(map_cluster);


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
    .openOn(map_cluster);
}
// Listen for a click event on the Map element
map_cluster.on("click", onMapClick);

// load GeoJSON from an external file

// EXEMPLOS PONTOS
var pontosAdicionados;
function addPontos(processosGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  var markers = L.markerClusterGroup();
  pontosAdicionados = L.geoJson(processosGeoJson,{
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Nº do processo: ${feature.properties.NPROC}<br>Tipo de processo: ${feature.properties.TPROC}`);
    }
  })
  markers.addLayer(pontosAdicionados); // add it to the cluster group
  map_cluster.addLayer(markers);		// add it to the map
  map_cluster.fitBounds(markers.getBounds()); //set view on the cluster extend
};

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
  concelhoAdicionado.addTo(map_cluster);
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
  freguesiasAdicionadas.addTo(map_cluster)
};

addPontos (processos)
addFreguesias(freguesias)
addConcelho(concelho)

//Overlayers
var overlays = {
  "Concelho": concelhoAdicionado,
  "Freguesias": freguesiasAdicionadas,
};

//Mudar de mapa e selecionar poligonos
L.control.layers(baselayers, overlays).addTo(map_cluster);

// Add scalebar
var scale = L.control.scale();
scale.addTo(map_cluster);

