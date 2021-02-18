import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navigation = () => {
    return (
    <Container>
    <Navbar fixed="top" bg="light" expand="lg">
        <Navbar.Brand href="#home">Alien Gvrl Cvlt</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/blog">Blog</Link></Nav.Link>
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
            <Nav.Link><Link to="/gallery">Gallery</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </Container>
    )
}

export default Navigation