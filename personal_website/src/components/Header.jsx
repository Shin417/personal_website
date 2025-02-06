import React from 'react'
import iconImage from '../assets/icon.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Header(){
    return(
      <Navbar className='main-header'>
        <Container className='header-container'>
            <Navbar.Brand href="#home" className='header-icon-container'><img src={iconImage} alt="icon" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about-me">About Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}