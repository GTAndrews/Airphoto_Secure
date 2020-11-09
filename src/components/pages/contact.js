import React from 'react'

const Contact = ({ children }) => (
  <div>
    <h3>Contact MaDGIC</h3>
    <p>To report issues with this application or for general questions regarding the Airphoto holdings at Trent University, email us at <a href="mailto:madgichelp@trentu.ca" alt="MaDGIC help email address">madgichelp@trentu.ca</a>.</p>
    <div>{children}</div>
  </div>
)

export default Contact