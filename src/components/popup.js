// Used mainly for simply popups with no actions

var rollTemplate ={
    title: "Roll <b>{ROLL}</b> caputred in <b>{YEAR}</b>",
    content: [
        {
            type: "fields",
            fieldInfos: [
                {
                    fieldName: "ROLL",
                    label: "Roll ID"
                },{
                    fieldName: "YEAR",
                    label: "Year"
                },{
                    fieldName: "PROVINCE",
                    label: "Province"
                }
            ]
        }
    ]
};

export { rollTemplate }

/* var photoContent = {
    textElement.text = 
    "<table><tr><th>Roll</th><td>{ROLL}</td></tr>" +
    "<tr><th>Photo</th><td>{PHOTO}</td></tr>" +
    "<tr><th>Capture Date</th><td>{NAPL_DATE}</td></tr>" +
    "<tr><th>Line Number</th><td>{LINE_NO}</td></tr>" +
    "<tr><th>Centre</th><td>{CNTR_LAT}, {CNTRE_LON}</td></tr>" +
    "<tr><th>Altitude</th><td>{ALTITUDE}</td></tr>" +
    "<tr><th>Scale</th><td>{SCALE}</td></tr>" +
    "<tr><th>Camera</th><td>{CAMERA}</td></tr>" +
    "<tr><th>Lens</th><td>{LENS_NAME}</td></tr>" +
    "<tr><th>Focal Length</th><td>{FOCAL_LEN}</td></tr>" +
    "<tr><th>Film Type</th><td>{FILM_TYPE}</td></tr>" +
    "<tr><th>Film size</th><td>{FILM_SIZE}</td></tr>" +
    "<tr><th>Photo Dimensions</th><td>{WIDTH} x {HEIGHT}</td></tr>" +
    "<tr><th>File Name</th><td>{PHOTOID}</td></tr></table>"
}; */


/* funtion photoDetails(feature) {
    const attachmentsElement = new AttachmentsContent({
        displayType: "table"
    });
    const textElement = new TextContent();
    const status = feature.graphic.attributes.STATUS;
    const georef = "<b><span style='color:green'>" + status + "</span></b>";
    const scanned = "<b><span style='color:yellow'>" + status + "</span></b>";
    const hardCopy = "<b><span style='color:red'>" + status + "</span></b>";
    switch (status) {
        case "Georeferenced":
        textElement.text = "This photo has been " + georef + " and is available to view and download.";
        return [textElement, attachmentsElement];
        break;
        case "Scanned":
        textElement.text = "This photo has been " + scanned + " but not Georeferenced yet. View and Download not currently available.";
        return [textElement, attachmentsElement];
        break;
        case "Hard Copy":
        textElement.text = "This photo is only available as a " + hardCopy + " and not available online yet. View and Download not currently available.";
        return [textElement, attachmentsElement];
        break;
    }
}; */

/* var photoTemplate ={
    title: "Photo <b>{ROLL}-{PHOTO}</b> caputred on <b>{NAPL_DATE}</b>:",
    content: [
        {
            type: "fields",
            fieldInfos: [
                {
                    fieldName: "ROLL",
                    label: "Roll"
                },{
                    fieldName: "PHOTO",
                    label: "Photo"
                },{
                    fieldName: "BOX",
                    label: "Box"
                },{
                    fieldName: "STATUS",
                    label: "Status"
                },{
                    fieldName: "NAPL_DATE",
                    label: "Date Captured"
                },{
                    fieldName: "ALTITUDE",
                    label: "Altitude"
                },{
                    fieldName: "SCALE",
                    label: "Scale"
                },{
                    fieldName: "CAMERA",
                    label: "Camera"
                },{
                    fieldName: "CNTR_LAT",
                    label: "Centroid (Lat)"
                },{
                    fieldName: "CNTR_LON",
                    label: "Centroid (Lon)"
                },{
                    fieldName: "DownloadURL",
                    label: "Download Image"
                },{
                    fieldName: "DownloadMeta",
                    label: "Download Metadata"
                }
            ]
        }
    ],
    actions: [
        {
            id: "download-photo",
            image: {dl},
            title: "Download"
        }
    ]
}; */

// Add image to Popup
/*    creator: function() {
        promiseUtils.after(5).then(() => {
            const image = document.createElement("img");
            image.src = {imageURL};
            image.width = 100;
            return image;
        })
    },
*/

// Fully custom formating
/* var popupTemplate ={
    title: "Title {Field}",
    fieldInfos:[
        {
            fieldName: "name",
            label: "label",
            format: {
                places: #,
                digitSeperator: bool
            }
        },{
            ...
        }
    ],
    content:
        "<b><a href='link'>Heading:</a></b>" +
        "{field} info... <br>" +
        "more html, possibly custom table..."
};
*/

// download image with actions
/*  mapView.when(function () {
        mapView.popup.watch("selectedFeature", function (graphic) {
            if (graphic) {
                var graphicTemplate = graphic.getEffectivePopupTemplate();
                graphicTemplate.actions.items[0].visible = graphic.attributes.DownloadURL ? true : false;
            }
        });
    });
    mapView.when(function() {
        var popup= mapView.popup;
        popup.viewModel.on("trigger-action", function(event) {
            if (event.action.id === "download-photo") {
                var attributes = popup.viewModel.selectedFeature.attributes;
                var info = attributes.DownloadURL;
                if (info) {
                    window.open(info.trim());
                }
            }
        });
    });
*/
