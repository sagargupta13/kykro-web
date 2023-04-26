import React from 'react';
import  "./NavigationBar.css";
import {  Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo.png"
const NavigationBar = () => {
  return (
    <div >
    <Navbar bg="transparent" sticky="top">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            height="50"
            className="d-inline-block align-top mr-3"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#our team">Our Team </Nav.Link>
            <Nav.Link href="#news">News</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
  )
}

export default NavigationBar