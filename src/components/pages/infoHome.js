import React from 'react';

const Home = ({ children }) => (
  <div>
    <h3>Airphoto Help</h3>
    <p>The Maps, Data and Government Information Centre (<a href='https://www.trentu.ca/library/madgic' alt='MaDGIC homepage' target='_blank' rel='noopener noreferrer'><i>MaDGIC</i></a>) at Trent University presents this all-in-one application for locating, viewing and downloading airphotos from our holdings. These holdings include airphotos from the National Air Photo Library (<i>NAPL</i>) and the Ontario Ministry of Natural Resources and Forestry (<i>MNRF</i>) airphoto collections. This is a <i><b>secure</b></i> application and contains all photos in the MaDGIC Airphoto Collection. The content in this information panel will guide you through the usage and functionality of the application as well as information on contacting MaDGIC.</p><br/>
    <p>Enjoy.</p>
    <div>{children}</div>
  </div>
)

export default Home