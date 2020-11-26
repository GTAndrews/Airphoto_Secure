import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '@esri/calcite-components';
import { loadReCaptcha } from 'react-recaptcha-v3';
import { loadModules, setDefaultOptions } from 'esri-loader';
import { esriVersion } from 'config';
import Header from 'components/header';
import Cookies from 'components/cookies';
import { rollTemplate } from 'components/popup';

import './App.scss';

// configure esri-loader to use version 4.16 from the ArcGIS CDN
// NOTE: make sure this is called once before any calls to loadModules()
setDefaultOptions({
  version: esriVersion,
  css: true,
});

console.log(Header); // should be included in Modal popup

export default class App extends Component {

  componentDidMount = () => {
    //loadReCaptcha('6Lcg4s4ZAAAAAB-TWHuox2PbiRAdV-ynnZLXyq4l') // localhost dev reCAPTCHA
    loadReCaptcha('6LfAU7wUAAAAAHvGI0EUUruTd5AXr282zg6EXZdS') // MaDGIC reCAPTCHA
    loadModules([
      'esri/Map', 
      'esri/views/MapView',
      'esri/widgets/Home',
      'esri/widgets/BasemapToggle',
      'esri/layers/FeatureLayer',
      'esri/layers/ImageryLayer',
      'esri/popup/content/TextContent',
      'esri/popup/content/AttachmentsContent',
      'esri/tasks/QueryTask',
      'esri/tasks/support/Query',
      'esri/widgets/Search',
      'esri/widgets/LayerList',
      'esri/widgets/Expand'])
      .then(([Map, MapView, Home, BasemapToggle, FeatureLayer, ImageryLayer, TextContent, AttachmentsContent, QueryTask, Query, Search, LayerList, Expand]) => {
        let photoLayerView;

        const map = new Map({
          basemap: 'topo-vector',
        });

        // eslint-disable-next-line no-unused-vars
        const view = new MapView({
          map: map,
          container: 'mapContainer',
		    // basemap: 'gray-vector', // this is a nice basemap for basic apps
          basemap: 'topo-vector',
          center: [-78.3, 44.3],
          zoom: 8,
          popup: {
            dockEnabled: true,
            dockOptions: {
              buttonEnabled: false,
              breakpoint: false
            }
          }
        });

        const envelopesLayer = new FeatureLayer({
          url:
            "http://madgic.trentu.ca/arcgis/rest/services/airphoto2020/Airphoto2020/MapServer/3",
            outFields: ["*"],
            title: "Generalized Footprint",
            opacity: 0.65,
            maxScale: 6000000,
            listMode: "hide",
            popupEnabled: false
        });
        map.add(envelopesLayer, 0);
        envelopesLayer.load().then(function(){
          console.log("Envelopes loaded successfully.");
        });

        const footprintsLayer = new FeatureLayer({
          url:
            "http://madgic.trentu.ca/arcgis/rest/services/airphoto2020/Airphoto2020/MapServer/2",
            outFields: ["*"],
            title: "Refined Footprint",
            opacity: 0.65,
            minScale: 6000000,
            maxScale: 100000,
            popupEnabled: false
        });
        map.add(footprintsLayer, 0);
        footprintsLayer.load().then(function(){
          console.log("Footprints loaded successfully.");
        });

        const flightLineLayer = new FeatureLayer({
          url:
          "http://madgic.trentu.ca/arcgis/rest/services/airphoto2020/Airphoto2020/MapServer/1",
          outFields: ["YEAR", "ROLL", "PROVINCE"],
          opacity: 0.75,
          popupTemplate: rollTemplate,
          minScale: 1200000,
          maxScale: 50000,
          title: "Flight Lines"
        });
        map.add(flightLineLayer, 0);
        flightLineLayer.load().then(function(){
          console.log("Flightlines loaded successfully.");
        });

        // Set custom popup content for Photo Layer
        const textElement = new TextContent();
        const photoContent = 
          textElement.text = 
            "<table class='esri-widget__table'><tr><th>Roll</th><td>{ROLL}</td></tr><tr><th>Photo</th><td>{PHOTO}</td></tr><tr><th>Capture Date</th><td>{NAPL_DATE}</td></tr><tr><th>Line Number</th><td>{LINE_NO}</td></tr><tr><th>Collection</th><td>{Collection}</td></tr><tr><th>Centre (<i>WGS 1984</i>)</th><td>{CNTR_LAT}, {CNTR_LON}</td></tr><tr><th>Altitude (<i>ft</i>)</th><td>{ALTITUDE}</td></tr><tr><th>Scale (<i>relative</i>)</th><td>{SCALE}</td></tr><tr><th>Camera</th><td>{CAMERA}</td></tr><tr><th>Lens</th><td>{LENS_NAME}</td></tr><tr><th>Focal Length (<i>mm</i>)</th><td>{FOCAL_LEN}</td></tr><tr><th>Film Type</th><td>{FILM_TYPE}</td></tr><tr><th>Film size (<i>mm</i>)</th><td>{FILM_SIZE}</td></tr><tr><th>Photo Dimensions (<i>in</i>)</th><td>{WIDTH} x {HEIGHT}</td></tr><tr><th>Box</th><td>{BOX}</td></tr><tr><th>File Name</th><td>{PHOTOID}</td></tr><tr style='display:none;'><th>Photo Year</th><td>{Year_}</td></tr><tr style='display:none;'><th>Raster ID</th><td>{RASTERID}</td></tr><tr style='display:none;'><th>Download URL</th><td>{DownloadURL}</td></tr></table>"

        const clusterConfig = {
          type: "cluster",
          clusterRadius: "10px",
          visible: false,
          // {cluster_count} is an aggregate field containing
          // the number of features comprised by the cluster
          labelingInfo: [
            {
              deconflictionStrategy: "none",
              labelExpressionInfo: {
                expression: "Text($feature.cluster_count, '##')"
              },
              symbol: {
                type: "text",
                font: {
                  weight: "bold",
                  family: "Noto Sans",
                  size: "10px"
                },
                haloSize: 1,
                haloColor: "white"
              },
              labelPlacement: "center-center"
            }
          ]
        };

        const photoCluster = new FeatureLayer({
          url: "https://madgic.trentu.ca/arcgis/rest/services/airphoto2020/Airphoto2020/MapServer/0",
          outFields: ["*"],
          opacity: 0,
          minScale: 60000,
          maxScale: 1,
          title: "Airphoto Clusters",
          featureReduction: clusterConfig,
          listMode: "hide",
          popupEnabled: false
        });

        map.add(photoCluster);
        photoCluster.load().then(function(){
          console.log("Photo Clusters loaded successfully.");
        });

        const photoLayer = new FeatureLayer({
          url: "https://madgic.trentu.ca/arcgis/rest/services/airphoto2020/Airphoto2020/MapServer/0",
          outFields: ["*"],
          opacity: 0.75,
          popupTemplate:{
            title: "Photo <b>{ROLL}-{PHOTO}</b> caputred on <b>{NAPL_DATE}</b>",
            actions: [
              {
                id: "view-photo",
                className: "esri-icon-visible",
                title: "View"
              },{
                id: "download-photo",
                className: "esri-icon-download",
                title: "Download"
              }
            ],
            content: photoContent,
            fieldInfos: [
              {
                fieldName: "ROLL"
              },{
                fieldName: "PHOTO"
              },{
                fieldName: "BOX"
              },{
                fieldName: "STATUS"
              },{
                fieldName: "NAPL_DATE"
              },{
                fieldName: "Collection"
              },{
                fieldName: "ALTITUDE"
              },{
                fieldName: "SCALE"
              },{
                fieldName: "CAMERA"
              },{
                fieldName: "CNTR_LAT"
              },{
                fieldName: "CNTR_LON"
              },{
                fieldName: "FOCAL_LEN"
              },{
                fieldName: "LINE_NO"
              },{
                fieldName: "FILM_TYPE"
              },{
                fieldName: "FILM_SIZE"
              },{
                fieldName: "LENS_NAME"
              },{
                fieldName: "WIDTH"
              },{
                fieldName: "HEIGHT"
              },{
                fieldName: "BOX"
              },{ // custom format to hide this
                fieldName: "DownloadURL"
              },{
                fieldName: "Year_"
              },{
                fieldName: "RASTERID"
              },{
                fieldName: "PHOTOID"
              }
            ]
          },
          minScale: 150000,
          maxScale: 1,
          title: "Airphoto Points"
        });

        map.add(photoLayer);
        photoLayer.load().then(function(){
          console.log("Photos loaded successfully.");
        });

        view.when(function () {
          // Watch for when features are selected
          view.popup.watch("selectedFeature", function (graphic) {
            if (graphic) {
              // Set the action's visible property to true if the 'DownloadURL' field value is not null, otherwise set it to false
              var graphicTemplate = graphic.getEffectivePopupTemplate();
              if (graphicTemplate.title === "Photo <b>{ROLL}-{PHOTO}</b> caputred on <b>{NAPL_DATE}</b>") {
                console.log(graphic.attributes.DownloadURL)
                graphicTemplate.actions.items[1].disabled = graphic.attributes
                .DownloadURL
                ? false
                : true;
              }
            };
          });
        });
        
        view.when(function () {
          var popup = view.popup;
          popup.viewModel.on("trigger-action", function (event) {
            // Attributes used for both Viewing and Downloading photos
            var attributes = popup.viewModel.selectedFeature.attributes;
            var photoID = attributes.RASTERID;
            // Download photo operation to hit the Download URL
            if (event.action.id === "download-photo") {
              // Get the 'Download URL' field attribute
              var info = attributes.DownloadURL;
              // Make sure the 'Download URL' field value is not null
              if (info) {
                // Open up a new browser using the Download URL value
                window.open(info.trim());
                console.log(photoID + " successfully downloaded.")
                // Add error Handling
              }
            } else if (event.action.id === "view-photo") {
              // Collect relevant attributes to populate the Service URL for the specific photo
              var layerID = attributes.PHOTOID;
              var yearStr = attributes.Year_;
              var year = parseInt(yearStr);
              console.log(year);
              var serviceURL = "https://madgic.trentu.ca/arcgis/rest/services/airphoto/y" + yearStr + "_Ref/ImageServer";
              var defExp = "OBJECTID = " + String(photoID);
              if (year > 1970) {
                // Insert Error or disable View button
                console.log("Viewing is not active for this photo.")
              } else {
                const photoView = new ImageryLayer({
                  url:
                    serviceURL,
                    definitionExpression: defExp,
                    title: layerID
                });
                map.add(photoView, 0);
                map.reorder(photoView, 1);
                photoView.load().then(function(){
                  console.log(layerID + " added to map successfully.");
                });
              }
            }
          });
        });

        function defineActions(event) {
          var item = event.item;
          if (item.title === "Airphoto Points") {
            item.actionsSections = [
              {
                title: "Increase opacity",
                className: "esri-icon-up",
                id: "increase-opacity"
              },
              {
                title: "Decrease opacity",
                className: "esri-icon-down",
                id: "decrease-opacity"
              }
            ];
          }
        };

        // Layer List Widget
        view.when(function () {
          var layerList = new LayerList({
            view: view,
            // add Legend to Layer List for Photo Points
            listItemCreatedFunction: function (event) {
              const item = event.item;
              if (item.layer.title === "Airphoto Points") {
                // don't show legend twice
                item.panel = {
                  content: "legend",
                  open: false
                };
              }
            }, defineActions
          });

          layerList.on("trigger-action", function (event) {
            // Capture the action id.
            var id = event.action.id;

            if (id === "increase-opacity") {
              if (photoLayer.opacity < 1) {
                photoLayer.opacity += 0.25;
              }
            } else if (id === "decrease-opacity") {
              if (photoLayer.opacity > 0) {
                photoLayer.opacity -= 0.25;
              }
            }
          });
          // Add widget to the bottom right corner of the view
          view.ui.add(layerList, "bottom-right");
        });

        //const yearNode = document.querySelectorAll('.year-item');
        const yearElement = document.getElementById("year-filter");

        yearElement.addEventListener("click", filterByYear);

        function filterByYear(event) {
          const selectedYear = event.target.getAttribute("data-year");
          photoLayerView.filter = {
            where: "Year_ like '" + selectedYear + "%'"
          };
          console.log(photoLayerView.filter.where)
        }

        view.whenLayerView(photoLayer).then(function (layerView) {
          photoLayerView = layerView;
          yearElement.style.visibility = "visible";
          const yearExpand = new Expand({
            view: view,
            expandTooltip: "Filter by Decade",
            collapseTooltip: "Clear Filter",
            content: yearElement,
            expandIconClass: "esri-icon-filter",
            group: "top-left"
          });
          yearExpand.watch("expanded", function () {
            if (!yearExpand.expanded) {
              photoLayerView.filter = null;
            }
          });
          view.ui.add(yearExpand, "top-left");
        })

        // Standard Home Widget
        const homeWidget = new Home({
          view: view,
          container: document.createElement("div")
        });
        view.ui.add(homeWidget, {
          position: "top-left"
        });

        const searchWidget = new Search ({
          view: view,
          allPlaceholder: "Search Location or Photo",
          sources: [
            {
              layer: photoLayer,
              searchFields: ["ROLL"],
              suggestionTemplate: "{ROLL} - {PHOTO}, year: {Year_}",
              exactMatch: false,
              outFields: ["*"],
              name: "Roll Search",
              placeholder: "example: A23979",
              zoomScale: 30000
            },{
              layer: photoLayer,
              searchFields: ["PHOTOID"],
              suggestionTemplate: "{PHOTOID}, year: {Year_}",
              exactMatch: false,
              outFields: ["*"],
              name: "Photo Search",
              placeholder: "example: A13111-096",
              zoomScale: 30000
            }
          ]
        });
        view.ui.add(searchWidget, {
          position: "top-right"
        });

        // Standard Basemap Toggle
        const toggle = new BasemapToggle ({
          view: view,
          nextBasemap: "hybrid",
          container: 'widgetView'
        });
        view.ui.add(toggle, {
          position: "bottom-left"
        });

        map.reorder(footprintsLayer, 0); // Move Generalized Footprint to top of Layer List
      })

      .catch((err) => {
        console.error(err);
      });
  };

  componentWillUnmount() {
    if (this.view) {
      // destroy the map view
      this.view.container = null;
    }
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <div id='year-filter' className='esri-widget'>
          <div className='year-item visible-year' data-year='192'>1920s</div>
          <div className='year-item visible-year' data-year='193'>1930s</div>
          <div className='year-item visible-year' data-year='194'>1940s</div>
          <div className='year-item visible-year' data-year='195'>1950s</div>
          <div className='year-item visible-year' data-year='196'>1960s</div>
          <div className='year-item visible-year' data-year='197'>1970s</div>
          <div className='year-item visible-year' data-year='198'>1980s</div>
          <div className='year-item visible-year' data-year='199'>1990s</div>
        </div>
        <div id='mapContainer' className='esri-widget'/>
        <Cookies />
      </div>
    );
  }
}

// logo: <img src={logo} alt="Trent University Library & Archives" /> 

/*** QUERY TASK ***/
/*var qTask = new QueryTask({
  url: photoLayer
});
var params = new Query({
  returnGeometry: true,
  outFields: ["*"]
});

view.when(funciton() {
  view.ui.add("optionsDiv", "bottom-right");
  document.getElementById("doBtn").addEventListener("click", doQuery);
});
var yearSel = document.getElementById("yearSelection");
var rollSel = document.getElementById("rollSelection");
var photoSel =document.getElementById("photoSelection");

function doQuery() {
  resultsLayer.removeAll();
  params.where = yearSelection.value + rollSelection.value + photoSelection.value;
  qTask.execute(params).then(getResults).catch(promiseRejected);
}

function getResults(response) {
  var photoResults = response.features.map(function (feature) {
    feture.symbol = {
      type: "point",
      symbolLayers: [
        {
          ***Define 2D symbol for results***
        }
      ]
    };
    feture.popupTemplate = popupTemplate;
    return feature;
  });
  resultsLayer.addMany(photoResults);
  view
    .goTo(photoResults)
    .then(funtion () {
      view.popup.open({
        features: photoResults,
        featureMenuOpen: true,
        updateLocationEnabled: true
      });
    })
    .catch(feature (error) {
      if (error.name != "AbortError") {
        console.error(error);
      }
    });
  document.getElementById("printResults").innerHTML =
    photoResults.length + " results found!";
}

funtion promiseRejected(error) {
  console.error("Promise rejected: ", error.message);
}
*/