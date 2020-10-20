import { Component } from 'react';
import { loadReCaptcha } from 'react-recaptcha-v3';
import { loadModules, setDefaultOptions } from 'esri-loader';
import { esriVersion } from "config";

import './airphoto.scss';

// configure esri-loader to use version 4.16 from the ArcGIS CDN
// NOTE: make sure this is called once before any calls to loadModules()
setDefaultOptions({
  version: esriVersion,
  css: true,
});

export default class napl extends Component {
  componentDidMount = () => {
    loadReCaptcha('6Lcg4s4ZAAAAAB-TWHuox2PbiRAdV-ynnZLXyq4l') // localhost dev reCAPTCHA
    loadModules([
      'esri/Map', 
      'esri/views/MapView',
      'esri/widgets/Home',
      'esri/widgets/Search',
      'esri/widgets/BasemapToggle',
      'esri/layers/FeatureLayer'])
      .then(([Map, MapView, Home, Search, BasemapToggle, FeatureLayer]) => {
        const map = new Map({
          basemap: 'topo-vector',
        });

        // eslint-disable-next-line no-unused-vars
        const mapView = new MapView({
          map: map,
          container: 'mapContainer',
		    // basemap: 'gray-vector', // this is a nice basemap for basic apps
          basemap: 'topo-vector',
          center: [-78.3, 44.3],
          zoom: 8
        });

        const footprintsLayer = new FeatureLayer({
          url:
            "http://madgic.trentu.ca/arcgis/rest/services/NAPLIndex/NAPLIndex/MapServer/2",
            outFields: ["*"]
        });
        map.add(footprintsLayer, 0);
        footprintsLayer.load().then(function(){
          console.log("Footprints loaded successfully.");
        });

        const flightLineLayer = new FeatureLayer({
          url:
          "http://madgic.trentu.ca/arcgis/rest/services/NAPLIndex/NAPLIndex/MapServer/1",
          outFields: ["YEAR", "ROLL"],
          opacity: 0.75,
          popupTemplate:{
            title: "{YEAR}",
            content: "Flightline {ROLL} from the year: {YEAR}."
          },
          minScale: 1200000,
          maxScale: 50000
        });
        map.add(flightLineLayer, 0);
        flightLineLayer.load().then(function(){
          console.log("Flightlines loaded successfully.");
        });

        const photoLayer = new FeatureLayer({
          url:
          "http://madgic.trentu.ca/arcgis/rest/services/NAPLIndex/NAPLIndex/MapServer/0",
          outFields: ["*"],
          opacity: 0.75,
          popupTemplate:{
            title: "{ROLL}-{PHOTO} caputred on {NAPL_DATE}:",
            content: "stuff..."
          },
          minScale: 150000,
          maxScale: 1
        });
        map.add(photoLayer);
        photoLayer.load().then(function(){
          console.log("Photos loaded successfully.");
        });

        const homeWidget = new Home({
          view: mapView,
          container: document.createElement("div")
        });
        mapView.ui.add(homeWidget, {
          position: "top-left"
        });

        const searchWidget = new Search ({
          view: mapView
        });
        mapView.ui.add(searchWidget, {
          position: "top-right"
        });

        const toggle = new BasemapToggle ({
          view: mapView,
          nextBasemap: "hybrid",
          container: 'widgetView'
        });
        mapView.ui.add(toggle, {
          position: "bottom-left"
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
}