import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/logo.png'
import { NavLink } from "react-router";

function Navigation() {

    const navigateToExternalSite = () => {
        window.location.href = "https://www.facebook.com";
      };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Container className="d-flex align-items-left">
          <Navbar.Brand className="d-flex justify-content-center align-items-center">
            <NavLink to="/" end >
                <img
                src={logo}
                width="100"
                height="auto"
                className="d-inline-block align-top mr-5 pr-5"
                alt="Navigate to the Home Page"
                />
                </NavLink>
                Jesus Christ is King!
            </Navbar.Brand>
        </Container>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <NavDropdown title="Happenings" id="basic-nav-dropdown">
            <NavLink style={{ textDecoration: 'none' }} to="/highland-games" end>
              <NavDropdown.Item >Highland Games</NavDropdown.Item>
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} to="/craft-festival" end>
              <NavDropdown.Item >
                Craft Vendor Fair
              </NavDropdown.Item>
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} to="/vintage-car-show" end>
              <NavDropdown.Item>Antique Car Show</NavDropdown.Item>
            </NavLink>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={navigateToExternalSite}>
                Visit Church Website
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigation