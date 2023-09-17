// Create variable to hold map element, give initial settings to map
var map3 = L.map("map3", { center: [41.203818, -8.676315], zoom: 12 }); //TENTAR EDITAR

// Add OpenStreetMap tile layer to map element
var basetopo = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png");

var baserelief = L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png");

baserelief.addTo(map3);
basetopo.addTo(map3);

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
    .openOn(map3);
}

// Listen for a click event on the Map element
map3.on("click", onMapClick);

// load GeoJSON from an external file
// 1 - LIMITE CONCELHO
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
  concelhoAdicionado.addTo(map3);
};

// 2 - PDM1992 - Área de Equipamento
var PDM92equiAdicionado;
function addPDM92equi(PDM92equiGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  PDM92equiAdicionado = L.geoJson(PDM92equiGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe PDM92: ${feature.properties.DESCRICAO}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  PDM92equiAdicionado.addTo(map3);
};

// 3 -	PDM1992 - Área de Serviços
var PDM92servAdicionado;
function addPDM92serv(PDM92servGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  PDM92servAdicionado = L.geoJson(PDM92servGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe PDM92: ${feature.properties.DESCRICAO}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  PDM92servAdicionado.addTo(map3);
};

// 4 -	PDM1992 - Área de Serviços de Armazenagem
var PDM92armazAdicionado;
function addPDM92armaz(PDM92armazGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  PDM92armazAdicionado = L.geoJson(PDM92armazGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe PDM92: ${feature.properties.DESCRICAO}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  PDM92armazAdicionado.addTo(map3);
};

// 5 -	PDM1992 - Área Exclusiva de Moradia isolada
var PDM92morAdicionado;
function addPDM92mor(PDM92morGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  PDM92morAdicionado = L.geoJson(PDM92morGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe PDM92: ${feature.properties.DESCRICAO}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  PDM92morAdicionado.addTo(map3);
};

// 6 -	PDM1992 - Área industrial
var PDM92indAdicionado;
function addPDM92ind(PDM92indGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  PDM92indAdicionado = L.geoJson(PDM92indGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe PDM92: ${feature.properties.DESCRICAO}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  PDM92indAdicionado.addTo(map3);
};

// 7 -	PDM1992 - Área Residencial
var PDM92resAdicionado;
function addPDM92res(PDM92resGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  PDM92resAdicionado = L.geoJson(PDM92resGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe PDM92: ${feature.properties.DESCRICAO}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  PDM92resAdicionado.addTo(map3);
};

// 8 -	PDM1992 - Área Verde
var PDM92averdeAdicionado;
function addPDM92averde(PDM92averdeGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  PDM92averdeAdicionado = L.geoJson(PDM92averdeGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe PDM92: ${feature.properties.DESCRICAO}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  PDM92averdeAdicionado.addTo(map3);
};

// 9 -	PDM1992 - Conjunto Arquitetónico / Paisagístico a Salvaguardar
var PDM92arqAdicionado;
function addPDM92arq(PDM92arqGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  PDM92arqAdicionado = L.geoJson(PDM92arqGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe PDM92: ${feature.properties.DESCRICAO}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  PDM92arqAdicionado.addTo(map3);
};

// 10 -	PDM1992 - Sem classificação
var PDM92semclaAdicionado;
function addPDM92semcla(PDM92semclaGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  PDM92semclaAdicionado = L.geoJson(PDM92semclaGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe PDM92: ${feature.properties.DESCRICAO}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  PDM92semclaAdicionado.addTo(map3);
};

// 11 -	PDM2019 - Espaços Agrícolas
var PDM2019espagrAdicionado;
function addPDM2019espagr(PDM2019espagrGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  PDM2019espagrAdicionado = L.geoJson(PDM2019espagrGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe PDM2019: ${feature.properties.designaç}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  PDM2019espagrAdicionado.addTo(map3);
};

// 12 -	PDM2019 - Espaços Centrais
var PDM2019espcentAdicionado;
function addPDM2019espcent(PDM2019espcentGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  PDM2019espcentAdicionado = L.geoJson(PDM2019espcentGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe PDM2019: ${feature.properties.designaç}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  PDM2019espcentAdicionado.addTo(map3);
};

// 13 -	PDM2019 - Espaços de Atividades Económicas - Áreas de Atividades Económicas
var PDM2019ativeconAdicionado;
function addPDM2019ativecon(PDM2019ativeconGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  PDM2019ativeconAdicionado = L.geoJson(PDM2019ativeconGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe PDM2019: ${feature.properties.designaç}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  PDM2019ativeconAdicionado.addTo(map3);
};

// 14 -	PDM2019 - Espaços de Atividades Económicas - Áreas de Logística
var PDM2019arealogAdicionado;
function addPDM2019arealog(PDM2019arealogGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  PDM2019arealogAdicionado = L.geoJson(PDM2019arealogGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe PDM2019: ${feature.properties.designaç}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  PDM2019arealogAdicionado.addTo(map3);
};

// 15 -	PDM2019 - Espaços de Atividades Económicas - Áreas de Atividades Económicas e Estrutura Verde Urbana
var PDM2019estrverAdicionado;
function addPDM2019estrver(PDM2019estrverGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  PDM2019estrverAdicionado = L.geoJson(PDM2019estrverGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe PDM2019: ${feature.properties.designaç}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  PDM2019estrverAdicionado.addTo(map3);
};

// 16 -	PDM2019 - Espaços Florestais
var PDM2019espflorAdicionado;
function addPDM2019espflor(PDM2019espflorGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  PDM2019espflorAdicionado = L.geoJson(PDM2019espflorGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe PDM2019: ${feature.properties.designaç}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  PDM2019espflorAdicionado.addTo(map3);
};

// 17 -	PDM2019 - Espaços Naturais e Paisagísticos
var PDM2019naturpaisAdicionado;
function addPDM2019naturpais(PDM2019naturpaisGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  PDM2019naturpaisAdicionado = L.geoJson(PDM2019naturpaisGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe PDM2019: ${feature.properties.designaç}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  PDM2019naturpaisAdicionado.addTo(map3);
};

// 18 -	PDM2019 - Espaços Verdes
var PDM2019espverAdicionado;
function addPDM2019espver(PDM2019espverGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  PDM2019espverAdicionado = L.geoJson(PDM2019espverGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe PDM2019: ${feature.properties.designaç}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  PDM2019espverAdicionado.addTo(map3);
};

// 19 -	PDM2019 - Espaços Urbanos de Baixa Densidade
var PDM2019espbaidensAdicionado;
function addPDM2019espbaidens(PDM2019espbaidensGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  PDM2019espbaidensAdicionado = L.geoJson(PDM2019espbaidensGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe PDM2019: ${feature.properties.designaç}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  PDM2019espbaidensAdicionado.addTo(map3);
};

// 20 -	COS15 - Massas de Água
var COS15masaguAdicionado;
function addCOS15masagu(COS15masaguGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  COS15masaguAdicionado = L.geoJson(COS15masaguGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe COS15: ${feature.properties.CLASSE}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  COS15masaguAdicionado.addTo(map3);
};

// 21 -	COS15 - Áreas Agrícolas
var COS15areagriAdicionado;
function addCOS15areagri(COS15areagriGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  COS15areagriAdicionado = L.geoJson(COS15areagriGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe COS15: ${feature.properties.CLASSE}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  COS15areagriAdicionado.addTo(map3);
};

// 22 -	COS15 - Áreas Florestais
var COS15areflorAdicionado;
function addCOS15areflor(COS15areflorGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  COS15areflorAdicionado = L.geoJson(COS15areflorGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe COS15: ${feature.properties.CLASSE}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  COS15areflorAdicionado.addTo(map3);
};

// 23 -	COS15 - Áreas Arenosas
var COS15arearenAdicionado;
function addCOS15arearen(COS15arearenGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  COS15arearenAdicionado = L.geoJson(COS15arearenGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe COS15: ${feature.properties.CLASSE}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  COS15arearenAdicionado.addTo(map3);
};

// 24 -	COS15 - Rede Viária
var COS15redviaAdicionado;
function addCOS15redvia(COS15redviaGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  COS15redviaAdicionado = L.geoJson(COS15redviaGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe COS15: ${feature.properties.CLASSE}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  COS15redviaAdicionado.addTo(map3);
};

// 25 -	COS15 - Territórios Artificializados
var COS15terartAdicionado;
function addCOS15terart(COS15terartGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  COS15terartAdicionado = L.geoJson(COS15terartGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe COS15: ${feature.properties.CLASSE}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  COS15terartAdicionado.addTo(map3);
};

// 26 -	COS15 - Áreas Industriais
var COS15areindAdicionado;
function addCOS15areind(COS15areindGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  COS15areindAdicionado = L.geoJson(COS15areindGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe COS15: ${feature.properties.CLASSE}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  COS15areindAdicionado.addTo(map3);
};

// 27 -	COS21 - Massas de Água
var COS21masaguAdicionado;
function addCOS21masagu(COS21masaguGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  COS21masaguAdicionado = L.geoJson(COS21masaguGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe COS21: ${feature.properties.CLASSE}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  COS21masaguAdicionado.addTo(map3);
};

// 28 -	COS21 - Áreas Agrícolas
var COS21areagriAdicionado;
function addCOS21areagri(COS21areagriGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  COS21areagriAdicionado = L.geoJson(COS21areagriGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe COS21: ${feature.properties.CLASSE}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  COS21areagriAdicionado.addTo(map3);
};

// 29 -	COS21 - Áreas Florestais
var COS21areflorAdicionado;
function addCOS21areflor(COS21areflorGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  COS21areflorAdicionado = L.geoJson(COS21areflorGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe COS21: ${feature.properties.CLASSE}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  COS21areflorAdicionado.addTo(map3);
};

// 30 -	COS21 - Áreas Arenosas
var COS21arearenAdicionado;
function addCOS21arearen(COS21arearenGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  COS21arearenAdicionado = L.geoJson(COS21arearenGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe COS21: ${feature.properties.CLASSE}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  COS21arearenAdicionado.addTo(map3);
};

// 31 -	COS21 - Rede Viária
var COS21redviaAdicionado;
function addCOS21redvia(COS21redviaGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  COS21redviaAdicionado = L.geoJson(COS21redviaGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe COS21: ${feature.properties.CLASSE}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  COS21redviaAdicionado.addTo(map3);
};

// 32 -	COS21 - Territórios Artificializados
var COS21terartAdicionado;
function addCOS21terart(COS21terartGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  COS21terartAdicionado = L.geoJson(COS21terartGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe COS21: ${feature.properties.CLASSE}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  COS21terartAdicionado.addTo(map3);
};

// 33 -	COS21 - Áreas Industriais
var COS21areindAdicionado;
function addCOS21areind(COS21areindGeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  COS21areindAdicionado = L.geoJson(COS21areindGeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Classe COS21: ${feature.properties.CLASSE}<br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  COS21areindAdicionado.addTo(map3);
};

// 34 -	2015 - Áreas Construídas
var const2015Adicionado;
function addconst2015(const2015GeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  const2015Adicionado = L.geoJson(const2015GeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Área construída 2015 <br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  const2015Adicionado.addTo(map3);
};

// 35 -	2015 - Áreas não Construídas
var naoconst2015Adicionado;
function addnaoconst2015(naoconst2015GeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  naoconst2015Adicionado = L.geoJson(naoconst2015GeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Área não construída 2015 <br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  naoconst2015Adicionado.addTo(map3);
};

// 36 -	2021 - Áreas Construídas
var const2021Adicionado;
function addconst2021(const2021GeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  const2021Adicionado = L.geoJson(const2021GeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Área construída 2021 <br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  const2021Adicionado.addTo(map3);
};

// 37 -	2021 - Áreas não Construídas
var naoconst2021Adicionado;
function addnaoconst2021(naoconst2021GeoJson) {
  // add GeoJSON layer to the map once the file is loaded
  naoconst2021Adicionado = L.geoJson(naoconst2021GeoJson, {
    style: {
      color: "black",
      weight: 2,
      dashArray: "5, 10"
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`Área não construída 2021 <br>Área: ${(Number(feature.properties.AREA_HECT)).toFixed(2)} Hectares`);
    },
  })
  naoconst2021Adicionado.addTo(map3);
};

addConcelho(concelho)
addPDM92equi(PDM_92_area_equip)
addPDM92serv(PDM_92_area_serv)
addPDM92armaz(PDM_92_serv_arm)
addPDM92mor(PDM_92_area_mor_isol)
addPDM92ind(PDM_92_area_ind)
addPDM92res(PDM_92_area_res)
addPDM92averde(PDM_92_area_ver)
addPDM92arq(PDM_92_conj_arq)
addPDM92semcla(PDM_92_sem_clas)
addPDM2019espagr(PDM_2019_esp_agr)
addPDM2019espcent(PDM_2019_esp_cent)
addPDM2019ativecon(PDM_2019_ativ_econ)
addPDM2019arealog(PDM_2019_area_logist)
addPDM2019estrver(PDM_2019_ativ_econ_est_ver)
addPDM2019espflor(PDM_2019_esp_flor)
addPDM2019naturpais(PDM_2019_nat_pais)
addPDM2019espver(PDM_2019_esp_ver)
addPDM2019espbaidens(PDM_2019_esp_urb_bai_dens)
addCOS15masagu(COS15_massas_agua)
addCOS15areagri(COS15_area_agric)
addCOS15areflor(COS15_area_flor)
addCOS15arearen(COS15_area_aren)
addCOS15redvia(COS15redviaAdicionado)
addCOS15terart(COS15_territ_artif)
addCOS15areind(COS15_area_indus)
addCOS21masagu(COS21_massas_agua)
addCOS21areagri(COS21_area_agric)
addCOS21areflor(COS21_area_flor)
addCOS21arearen(COS21_area_aren)
addCOS21redvia(COS21redviaAdicionado)
addCOS21terart(COS21_territ_artif)
addCOS21areind(COS21_area_indus)
addconst2015(area_const_15)
addnaoconst2015(area_nao_const_15)
addconst2021(area_const_21)
addnaoconst2021(area_nao_const_21)

//Overlayers
var overlays = {
  "Concelho": concelhoAdicionado,
  "PDM1992 - Área de Equipamento": PDM92equiAdicionado,
  "PDM1992 - Área de Serviços": PDM92servAdicionado,
  "PDM1992 - Área de Serviços de Armazenagem": PDM92armazAdicionado,
  "PDM1992 - Área Exclusiva de Moradia isolada": PDM92morAdicionado,
  "PDM1992 - Área industrial": PDM92indAdicionado,
  "PDM1992 - Área Residencial": PDM92resAdicionado,
  "PDM1992 - Área Verde": PDM92averdeAdicionado,
  "PDM1992 - Conjunto Arquitetónico / Paisagístico a Salvaguardar": PDM92arqAdicionado,
  "PDM1992 - Sem classificação": PDM92semclaAdicionado,
  "PDM2019 - Espaços Agrícolas": PDM2019espagrAdicionado,
  "PDM2019 - Espaços Centrais": PDM2019espcentAdicionado,
  "PDM2019 - Espaços de Atividades Económicas - Áreas de Atividades Económicas": PDM2019ativeconAdicionado,
  "PDM2019 - Espaços de Atividades Económicas - Áreas de Logística": PDM2019arealogAdicionado,
  "PDM2019 - Espaços de Atividades Económicas - Áreas de Atividades Económicas e Estrutura Verde Urbana": PDM2019estrverAdicionado,
  "PDM2019 - Espaços Florestais": PDM2019espflorAdicionado,
  "PDM2019 - Espaços Naturais e Paisagísticos": PDM2019naturpaisAdicionado,
  "PDM2019 - Espaços Verdes": PDM2019espverAdicionado,
  "PDM2019 - Espaços Urbanos de Baixa Densidade": PDM2019espbaidensAdicionado,
  "COS15 - Massas de Água": COS15masaguAdicionado,
  "COS15 - Áreas Agrícolas": COS15areagriAdicionado,
  "COS15 - Áreas Florestais": COS15areflorAdicionado,
  "COS15 - Áreas Arenosas": COS15arearenAdicionado,
  "COS15 - Rede Viária": COS15arearenAdicionado,
  "COS15 - Territórios Artificializados": COS15terartAdicionado,
  "COS15 - Áreas Industriais": COS15areindAdicionado,
  "COS21 - Massas de Água": COS21masaguAdicionado,
  "COS21 - Áreas Agrícolas": COS21areagriAdicionado,
  "COS21 - Áreas Florestais": COS21areflorAdicionado,
  "COS21 - Áreas Arenosas": COS21arearenAdicionado,
  "COS21 - Rede Viária": COS21arearenAdicionado,
  "COS21 - Territórios Artificializados": COS21terartAdicionado,
  "COS21 - Áreas Industriais": COS21areindAdicionado,
  "2015 - Áreas Construídas": const2015Adicionado,
  "2015 - Áreas não Construídas": naoconst2015Adicionado,
  "2021 - Áreas Construídas": const2021Adicionado,
  "2021 - Áreas não Construídas": naoconst2021Adicionado,
};

//Mudar de mapa e selecionar poligonos
L.control.layers(baselayers, overlays).addTo(map3);

// Add scalebar
var scale = L.control.scale();
scale.addTo(map3);
