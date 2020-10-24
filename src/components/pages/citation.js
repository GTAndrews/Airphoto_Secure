import React from 'react';
import citation from 'files/citing_air_photos.pdf';

const Citation = ({ children }) => (
    <div>
      <h3>Airphoto Citation</h3>
      <p><a href={citation} alt='Citing Air Photos' target='_blank' rel='noopener noreferrer'>Citing Airphotos Documentation</a> can be downloaded via this link.</p>
      <h4>General aerial photograph citation format:</h4>
      <p>Source. [<i>Title</i>] [format]. Scale. Line/roll number. Photo number. Place of publication: Publisher, Date. <i>Copyright</i>. <i>Post-processing details.</i>.</p>
      <ul>
          <li>Source - The author / organization that produced the photos</li>
          <li>[<i>Title</i>] - A named place associated with the photo(s), if any.</li>
          <li>[format] - The media type of the photo (e.g. air photo or digital air photo)</li>
          <li>Scale - The scale of the air photo (e.g. 1:50,000)</li>
          <li>Line/roll number - Depending on the collection, the photo will have a roll or flight line number, or both (e.g.&#60;roll&#62; &#60;flight number&#62; A27252 1E). </li>
          <li>Photo number - The photo number(s)</li>
          <li>Place of publication - The name of the city/province(state) where the resource was published (e.g. for NAPL photos we use Ottawa because it is a federal dataset)</li>
          <li>Publisher - The name of the company or organization that published the photos (e.g. Ontario Ministry of Natural Resources)</li>
          <li>Date - The date that the photo was published, which for air photos is the year the photo was taken.</li>
          <li><i>Copyright</i> - If applicable. (e.g. © Her Majesty the Queen in Right of Canada 1975).</li>
          <li><i>Post-processing details</i> - If applicable.  Indicate manipulations done to the source data. (e.g. Georeferenced and mosaicked by the Maps, Data and Government Information Centre, June 2015)</li>
      </ul>
      <b><i>Examples:</i></b>
      <p><u>Single scanned and georeferenced aerial photograph:</u><br/>
      Ontario Ministry of Natural Resources and Forestry. [<i>Douro</i>] [air photo]. Scale 1:10,000. 78-4424-51 photo 12. Toronto, Ontario: Ontario Ministry of Natural Resources, 1978. <i>Scanned and georeferenced by the Map, Data and Government Information Centre at Trent University. © Queen's Printer for Ontario 1978.  All rights reserved.</i>
      </p>
      <p><u>Mosaic of scanned and georeferenced aerial photographs:</u><br/>
      National Air Photo Library. [<i>Peterborough</i>] [air photo]. Scale 1:50,000. A1053 photo 56-59; A1055 photo 47-50.  Ottawa, Ontario: Department of Energy, Mines and Resources, 1975. <i>Mosaic, Georeferencing and Clipping completed by the Map, Data and Government Information Centre at Trent University on October 27, 2015. © Her Majesty the Queen in Right of Canada 1975.</i>
      </p>
      <div>{children}</div>
    </div>
  )
  
  export default Citation
