import React, { useState, useEffect } from 'react';
import { loadReCaptcha } from 'react-recaptcha-v3';
import { loadModules, setDefaultOptions } from 'esri-loader';
import { esriVersion } from "config";
import Collection from 'components/collection';
import { rollTemplate, photoTemplate } from 'components/popup';
import App from './App';

import './App.scss';

setDefaultOptions({
    version: esriVersion,
    css: true,
  });

const map = App.map


var footprintsLayer = new FeatureLayer({
    url:
      "http://madgic.trentu.ca/arcgis/rest/services/NAPLIndex/NAPLIndex/MapServer/2",
      outFields: ["*"]
  });
  map.add(footprintsLayer, 0);
  footprintsLayer.load().then(function(){
    console.log("Footprints loaded successfully.");
  });