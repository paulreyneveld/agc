import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navigation = () => {
    return (
    <Container>
    <Navbar fixed="top" bg="light" expand="lg">
        <Navbar.Brand href="#home">Alien Girl Cult</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </Container>
    )
}

export default Navigation