import React, { useState, useEffect } from 'react';
import { UncontrolledDropdown, NavbarToggler, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Tools = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen); // Toggle for Tools dropdown
    const [activeTool, setActiveTool] = useState(null); // Handle for Active Tool

    useEffect(() => {
        console.log(activeTool);
    }, [activeTool]);

    return (
        <UncontrolledDropdown nav inNavbar>
            <NavbarToggler onClick={toggle} />
            <DropdownToggle caret>
                Tools
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Availalbe Tools: (Coming Soon)</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => setActiveTool('YearFilter')} active={activeTool === 'YearFilter'} disabled>Filter by Year</DropdownItem>
                <DropdownItem onClick={() => setActiveTool('AreaSearch')} active={activeTool === 'AreaSearch'} disabled>Search by Area</DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}

export default Tools; // Pass the tools dropdown to the App Header