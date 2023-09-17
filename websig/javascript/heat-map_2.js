// Create variable to hold map element, give initial settings to map
var map_heat2 = L.map("map_heat2", { center: [41.203818, -8.676315], zoom: 12 }); //TENTAR EDITAR

// Add OpenStreetMap tile layer to map element
var basetopo = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png");

var baserelief = L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png");

baserelief.addTo(map_heat2);
basetopo.addTo(map_heat2);

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
    .openOn(map_heat2);
}

// Listen for a click event on the Map element
map_heat2.on("click", onMapClick);

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
  concelhoAdicionado.addTo(map_heat2);
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
  freguesiasAdicionadas.addTo(map_heat2)
};

// ALOJAMENTOS LOCAIS
function addalojamentos(alojamentosGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  var arrayCoordenadas = []
  alojamentosAdicionados = L.geoJson(alojamentosGeoJson, {
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Nome: ${feature.properties.Denominaca}`);
      arrayCoordenadas.push([feature.geometry.coordinates[1], feature.geometry.coordinates[0]])
    },
  })
  console.log(arrayCoordenadas)
  alojamentosAdicionados.addTo(map_heat2);

  //add heatLayer
  var heat = L.heatLayer(arrayCoordenadas, { radius: 30, maxZoom: 14 });
  heat.addTo(map_heat2);
};

addalojamentos (aloj_local)
addFreguesias(freguesias)
addConcelho(concelho)

//Overlayers
var overlays = {
  "Concelho": concelhoAdicionado,
  "Freguesias": freguesiasAdicionadas,
  "Alojamentos Locais": alojamentosAdicionados,
};

//Mudar de mapa e selecionar poligonos
L.control.layers(baselayers, overlays).addTo(map_heat2);

// Add scalebar
var scale = L.control.scale();
scale.addTo(map_heat2);
