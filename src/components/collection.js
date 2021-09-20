// *** THIS TOOL WAS REPLACED BY AN ESRI FILTER WIDGET ***

import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import './Button.css';

var CollectionSel = (props) => {
  var [rSelected, setRSelected] = useState('Both'); // Collection definition with default of Both selected

  useEffect(() => {
    var value = rSelected;
    console.log("Use Effect: " + value);
  }, [rSelected]); // Only fire this effect when rSelected is changed
  
  return (
    <ButtonGroup>
      <Button className='NonActive' onClick={() => setRSelected('NAPL')} active={rSelected === 'NAPL'} >NAPL</Button>
      <Button className='NonActive' onClick={() => setRSelected('Both')} active={rSelected === 'Both'} >Both</Button>
      <Button className='NonActive' onClick={() => setRSelected('MNRF')} active={rSelected === 'MNRF'} >MNRF</Button>
    </ButtonGroup>
  )
}

export default CollectionSel; // Pass this button group to the App Header