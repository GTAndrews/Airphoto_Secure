import React, { useState } from 'react';
import citation from 'files/citing_air_photos.pdf';
import { Nav, NavLink, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const InfoModal = (props) => {

  const {className} = props;
  const [modal, setModal] = useState(false); // Info Modal definition
  const modaltoggle = () => setModal(!modal);

  return (
    <Nav className="mr-auto" navbar>
      <NavLink href='#' onClick={modaltoggle}>App Info</NavLink>
      <Modal isOpen={modal} toggle={modaltoggle} className={className}>
          <ModalHeader toggle={modaltoggle}>Airphoto App Info</ModalHeader>
          <ModalBody>
            <p>This application depicts the locations of Trent University's Airphoto collections.<br></br>
            This is a project of the <i>Maps, Data & Government Information Centre (MaDGIC)</i>.</p>
            <hr></hr>
            <b>Help Content</b>
            <p>- <a href={citation} alt='Citing Air Photos' target='_blank' rel='noopener noreferrer'>Citing Airphotos Documentation</a> can be downloaded via this link.<br></br>
            - The Tools menu contains various tools for filtering and locating airphotos.<br></br>
            - Switching the Collection from the top-right will focus the map to the specific Collection selected.<br></br>
            - The Down Arrow on the left of the Search widget will open additional search options. The deafult will search any location, address or Postal Code. The other options are specific to the Air Photo Collection.</p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={modaltoggle}>Close</Button>
          </ModalFooter>
      </Modal>
    </Nav>
  );
}

export default InfoModal;

// https://madgic.trentu.ca/airphoto/files/citing_air_photos.pdf 