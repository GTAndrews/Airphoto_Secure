import React from 'react'

const Home = ({ children }) => (
  <div>
    <h3>Airphoto Help</h3>
    <p>The Maps, Data and Government Information Centre (<i>MaDGIC</i>) at Trent University presents this all-in-one application for locating, viewing and downloading airphotos from our holdings. These holdings include airphotos from the National Air Photo Library (<i>NAPL</i>) and the Ontario Ministry of Natural Resources and Forestry (<i>MNRF</i>) airphoto collections. The contents in this information panel will guide you through the usage and functionality of the application as well as information on contacting MaDGIC.</p><br/>
    <p>Enjoy.</p>
    <div>{children}</div>
  </div>
)

export default Home