import React, {useState} from 'react';
import './Button.css';
import logo from'images/tu_crest.svg';
import Collection from 'components/collection';
import InfoModal from 'components/info';
import Tools from 'components/tools';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

const Header = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen); // Toggle for Tools dropdown

    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href= "/airphoto2020">
            <img src={logo} alt='Trent University Crest, reload application' height="40"/><b>Airphoto</b>&nbsp;<i>beta</i>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://www.trentu.ca/library/frontpage" alt='Bata Library Homepage' target='_blank' rel='noopener noreferrer'>Bata Library</NavLink>
            </NavItem>
            <InfoModal></InfoModal>
            <Tools></Tools>
            <NavbarText>&nbsp;&nbsp; <i>*** Photos from 1927 to 1970 are available to view and download ***</i></NavbarText>
          </Nav>
          <NavbarText>Collection (coming soon):&#160;</NavbarText>
          <Collection></Collection>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header; // Pass the App Header to the App main script