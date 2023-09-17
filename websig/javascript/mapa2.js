// Create variable to hold map element, give initial settings to map
var map2 = L.map("map2", { center: [41.203818, -8.676315], zoom: 12 }); //TENTAR EDITAR

// Add OpenStreetMap tile layer to map element
var basetopo = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png");

var baserelief = L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png");

baserelief.addTo(map2);
basetopo.addTo(map2);

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
    .openOn(map2);
}

// Listen for a click event on the Map element
map2.on("click", onMapClick);

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
  concelhoAdicionado.addTo(map2);
};


// LIMITE LOTEAMENTOS
var loteamentosAdicionados;
function addLoteamentos(loteamentosGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  loteamentosAdicionados = L.geoJson(loteamentosGeoJson, {
    style: {
      color: "darkblue",
      weight: 2
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Nº de alvará de loteamento: ${feature.properties.N_ALVARA}<br>Freguesia: ${feature.properties.FREGUESIA}`);
    },
  })
  loteamentosAdicionados.addTo(map2)
};

// LIMITE LOTES
var lotesAdicionados;
function addLotes(lotesGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  lotesAdicionados = L.geoJson(lotesGeoJson, {
    style: {
      color: "purple",
      weight: 1
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Nº do lote: ${feature.properties.N_LOTE}<br>Nº do alvará de loteamento: ${feature.properties.N_ALVARA}<br>Área: ${(Number(feature.properties.AREA_M2)).toFixed(2)}m&sup2`);
    },
  })
  lotesAdicionados.addTo(map2)
};

// LIMITE ZONA VERDE LOTEAMENTOS
var zonasVerdesAdicionadas;
function addZonasVerdes(zonasVerdesGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  zonasVerdesAdicionadas = L.geoJson(zonasVerdesGeoJson, {
    style: {
      color: "green",
      weight: 1
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`${feature.properties.CLASSE}<br>Nº do alvará de loteamento: ${feature.properties.N_ALVARA} <br>Área: ${(Number(feature.properties.AREA_M2)).toFixed(2)}m&sup2`);
    },
  })
  zonasVerdesAdicionadas.addTo(map2)
};

addConcelho(concelho)
addLoteamentos (loteamentos)
addLotes (lotes)
addZonasVerdes(zv_lote)

//Overlayers
var overlays = {
  "Concelho": concelhoAdicionado,
  "Espaços Verdes Loteamentos": zonasVerdesAdicionadas,
  "Loteamentos": loteamentosAdicionados,
  "Lotes": lotesAdicionados
};

//Mudar de mapa e selecionar poligonos
L.control.layers(baselayers, overlays).addTo(map2);

// Add scalebar
var scale = L.control.scale();
scale.addTo(map2);
