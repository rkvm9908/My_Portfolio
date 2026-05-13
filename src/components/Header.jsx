import React from "react";
import "../styles/header.css";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { FaUserTie } from "react-icons/fa6";

function Header() {
  return (
    <>
      <Navbar expand="lg" className="custom-navbar" fixed="top">
        <Container>
          {/* Logo */}

          <Navbar.Brand href="#" className="logo">
            <FaUserTie className="custom-logo"/> {" "}
            Mathuprasanth{" "}<span>R K</span>
          </Navbar.Brand>

          {/* Hamburger button */}

          <Navbar.Toggle
            aria-controls="navbar-nav"
            className="custom-hamburger"
          />

          {/* Nav links */}

          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto nav-links">
              <Nav.Link href="#home">Home</Nav.Link>

              <Nav.Link href="#about">About</Nav.Link>

              <Nav.Link href="#skills">Skills</Nav.Link>

              <Nav.Link href="#projects">Projects</Nav.Link>

              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
