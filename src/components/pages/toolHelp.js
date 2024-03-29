import React from 'react'

const ToolHelp = ({ children }) => (
  <div>
    <h3>Tool Help</h3>
    <p>The following tools are featured in this application:</p>
    <ul>
        <li><a href="#Zoom">Zoom Controls</a></li>
        <li><a href="#Search">Quick Search</a></li>
        <li><a href="#Year">Quick Filter (by Decade)</a></li>
        <li><a href="#Collection">Collection Filter</a></li>
        <li><a href="#BM">Basemap Toggle</a></li>
        <li><a href="#Legend">Layer List</a></li>
        <li><a href="#Popup">Feature Popup</a><ul>
            <li><a href="#View">View Photo</a></li>
            <li><a href="#DL">Download Photo</a></li>
            </ul></li>
    </ul>
    <b id="Zoom">Zoom Controls:</b>
    <p>There are two ways to zoom in and out of the map: using the mouse wheel or the zoom controls at the top-left corner. As the zoom is adjusted layers will switch from hidden to visible this will be discussed in the <i>Layer List</i> section.</p>
    <b id="Search">Quick Search:</b>
    <p>Searching for a location or a specific Photo is achieved through the Search tool at the top-right corner of the map. The down arrow will show options for selecting what your search is for, options are: ArcGIS World Geocoding Service, Roll Search and Photo Search. The ArcGIS World Geocoding Service searches any location on Earth and will drop a dark dot in the selected location. The Roll and Photo searches will search the index of Trent's Airphotos.</p>
    <p><i>Roll Example</i>=&#62; <i>NAPL</i>: A18757 || <i>MNRF</i>: R001-4427</p>
    <p><i>Photo Example</i>=&#62; <i>NAPL</i>: A01054-030 || <i>MNRF</i>: R073-4425-033</p>
    <b id="Year">Quick Filter (by Decade):</b>
    <p>When expanded, the Quick Filtler will display a list of all available decades. When a decade is selected the map layers will only display photo locations from that decade. To clear the filter and show all photo locations, simply select the top "Filter by Decade" option.</p>
    <b id="Collection">Collection Filter:</b>
    <p>When expanded, the Collection Filtler will display a list of the available Air Photo Collections. When a decade is selected the map layers will only display photo locations from that Collection. To clear the filter and show all photo locations, simply select the top "Collection" option.</p>
    <b id="BM">Basemap Toggle:</b>
    <p>The basemap can be switched from the default Topographic map to the Esri Imagery Service basemap by clicking the Basemap Toggle at the bottom-left of the map.</p>
    <b id="Legend">Layer List:</b>
    <p>Located at the bottom-right of the map, the Layer List shows all map layers present on the map. Layer visibility changes depending on the zoom level of the map, visible layers will show as black text and non-visible layers will be greyed out. When adding Airphotos to the map, an item will be added to this list. Any layer in the list can be toggled on and off by clicking the layer name.</p>
    <b id="Popup">Feature Popup:</b>
    <p>When a feature (Airphoto point or Flightline) is selected from either the Search results or by clicking on the map, a Popup will appear on the right side of the map (at the bottom if using on a mobile browser). This Popup contains relevant data to that particular Airphoto or Flightline. This data can be used to populate a Citation or to refine searching parameters. If multiple features are within the selection area, there will be an option to cycle through the selected features at the top-right of the popup. By clicking the centre of the multiple features box, you will access a list of the features presented in the Popup. Also along the top of the Popup will be options to View or Download a selected Photo.</p>
    <b id="View"><i>Popup - View Photo:</i></b>
    <p>For available Photo years (listed in the header of the Beta application) Airphotos can be added to map by clicking the View button. This will add a layer to the Layer List with the name of the Photo.</p>
    <b id="DL"><i>Popup - Download Photo:</i></b>
    <p>For available Photo years (Listed in the header of the Beta application) Airphotos can be downloaded by clicking the Download button. This will prompt a download in a new tab and will download the image in a TIFF format projected in the WGS84 Web Mercator (Auxiliary Sphere), EPSG: 3857 projection.</p>
    <div>{children}</div>
  </div>
)

export default ToolHelp