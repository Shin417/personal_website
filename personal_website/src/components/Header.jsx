import React from "react";
import iconImage from "../assets/icon.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";

export default function Header() {
  return (
    <Navbar className="main-header">
      <Container className="header-container">
        <Navbar.Brand href="#home" className="header-icon-container">
          <img src={iconImage} alt="icon" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#about-me">About Me</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>

        <Dropdown className="drop-menu">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Menu
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#about-me">About Me</Dropdown.Item>
            <Dropdown.Item href="#projects">Projects</Dropdown.Item>
            <Dropdown.Item href="#contact">Contact</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}
