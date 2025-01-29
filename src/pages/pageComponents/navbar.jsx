import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router";

function Navigation() {
  const navigateToExternalSite = () => {
    window.location.href = "http://craborchardchristianchurch.org/";
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Container className="d-flex align-items-left">
            <Row>
              <Navbar.Brand className="d-flex justify-content-center align-items-center">
                <NavLink to="/" end>
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
            </Row>
          </Container>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav className="anchors">
              <NavDropdown title="Happenings" id="basic-nav-dropdown">
                <NavLink
                  style={{ textDecoration: "none" }}
                  className="anchors"
                  to="/highland-games"
                  end
                >
                  Highland Games
                </NavLink>
                <NavLink
                  style={{ textDecoration: "none" }}
                  className="anchors"
                  to="/craft-festival"
                >
                  Craft Vendor Fair
                </NavLink>
                <NavLink
                  style={{ textDecoration: "none" }}
                  className="anchors"
                  to="/vintage-car-show"
                >
                  Antique Car Show
                </NavLink>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={navigateToExternalSite}>
                  Visit Church Website
                </NavDropdown.Item>
                <NavDropdown.Item onClick={navigateToExternalSite}>
                  Contact Us
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
