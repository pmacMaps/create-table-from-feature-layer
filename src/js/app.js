import { queryFeatures } from '@esri/arcgis-rest-feature-layer';
import {buildTable} from './ui.js'

// feature layer
const municipalFSUrl = 'https://services1.arcgis.com/1Cfo0re3un0w6a30/ArcGIS/rest/services/Municipal_Boundaries/FeatureServer/0';

queryFeatures({
    url: municipalFSUrl,
    where: "1=1",
    f: "json",
    returnGeometry: false
  }).then(response => {
        console.log(response);
        console.log(response.features);
        buildTable(document.getElementById('records'), response.features);
});