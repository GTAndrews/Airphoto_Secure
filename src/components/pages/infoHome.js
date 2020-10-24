import React from 'react'

const Home = ({ children }) => (
  <div>
    <h3>Airphoto Help</h3>
    <p>The Maps, Data and Government Infomation Centre (<i>MaDGIC</i>) brings you an all-in-one application for locating, viewing and downloading photos from our holdings. Our holdings include photos from the National Air Photo Library (<i>NAPL</i>) and the Ontario Ministry of Natural Resources and Forestry (<i>MNRF</i>) photo collections. The contents in this information panel will guide you through the functionality of the application as well as information on contacting MaDGIC.</p><br/>
    <p>Enjoy.</p>
    <div>{children}</div>
  </div>
)

export default Home