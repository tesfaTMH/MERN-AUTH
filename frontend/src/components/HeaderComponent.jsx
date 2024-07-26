import React from "react";
import { Nav, Navbar, Container, NavDropdown, Badge } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          {/*  <Navbar.Brand href="/">MERN Auth App</Navbar.Brand> */}
          <LinkContainer to="/">
            <Navbar.Brand href="/">MERN Auth App</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="menu-navbar-nav" />
          <Navbar.Collapse id="menu-navbar-nav">
            <Nav className="ms-auto">
              {/*<Nav.Link href="/login">
                <FaSignInAlt /> Sign In
              </Nav.Link>*/}
              <LinkContainer to="/login">
                <Nav.Link>
                  <FaSignInAlt /> Sign In
                </Nav.Link>
              </LinkContainer>
              {/*<Nav.Link href="/register">
                <FaSignInAlt /> Sign Up
              </Nav.Link>*/}
              <LinkContainer to="/register">
                <Nav.Link>
                  <FaSignOutAlt /> Sign Up
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
