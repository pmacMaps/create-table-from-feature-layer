import { queryFeatures } from '@esri/arcgis-rest-feature-layer';
import {buildTable, generateErrorMsg} from './ui.js'

// feature layer - public complaints
const vcComplaints = 'https://services1.arcgis.com/1Cfo0re3un0w6a30/ArcGIS/rest/services/survey123_a8e8ca4ac60841d4ab21dd74cf3cbeb4_fieldworker/FeatureServer/0';

// get features from service
queryFeatures({
    url: vcComplaints,
    where: "1=1",
    f: "json",
    returnGeometry: false
  }).then(response => {
    // populate rows in table
    buildTable(document.getElementById('records'), response.features);
}).catch(error => {
  console.log(`Error fetching service: ${error}`)
  generateErrorMsg(document.getElementById('error'), error);
});