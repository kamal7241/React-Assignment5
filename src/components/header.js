// import AddStudent from "./add-student"
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
const Header = (props) => {
  let history = useHistory();
 let  {onToggle} = props;
  let [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const openAddModal = () => {
    onToggle();
  }

  const goToHome = () => {
    history.push(`/`)

  }
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand onClick={goToHome} >HomeByEvent</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="w-100   d-flex justify-content-end mr-auto " navbar>
            <NavItem>
              <Link className="nav-link" to="/">Home By Link</Link>
            </NavItem>
            <NavItem>
              <NavLink onClick={openAddModal} >ADD</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header;


