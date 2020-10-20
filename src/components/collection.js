import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import './Button.css';

const Collection = (props) => {
  const [rSelected, setRSelected] = useState('Both'); // Collection definition with default of Both selected

  useEffect(() => {
    console.log(rSelected);
  }, [rSelected]);

  return (
    <ButtonGroup>
      <Button className='NonActive' onClick={() => setRSelected('NAPL')} active={rSelected === 'NAPL'} disabled>NAPL</Button>
      <Button className='NonActive' onClick={() => setRSelected('Both')} active={rSelected === 'Both'} >Both</Button>
      <Button className='NonActive' onClick={() => setRSelected('MNRF')} active={rSelected === 'MNRF'} disabled>MNRF</Button>
    </ButtonGroup>
  );
}

export default Collection; // Pass this button group to the App Header