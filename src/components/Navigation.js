import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const styles = {
    paddingLeft: "5em",
    textAlight: "center"
}
const Navigation = () => {
    return (
    <Container>
    <Navbar style={styles} fixed="top" bg="light" expand="lg">
        <Navbar.Brand href="#home">Alien Girl Cult</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/blog">Blog</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/about">About</Link></Nav.Link>
            <Nav.Link href="#gallery"><Link to="/gallery">Gallery</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </Container>
    )
}

export default Navigation