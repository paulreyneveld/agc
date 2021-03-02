import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux'

const Navigation = ({ handleLogout }) => {

    const user = useSelector(state => state.user)

    const logoutButtonRelevant = () => {
        if (user) {
            return <Button onClick={handleLogout}>Logout</Button>
        }
    }

    return (
    <Nav>
    <Navbar fixed="top" bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Alien Gvrl Cvlt</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/upload">Upload</Nav.Link>
            <Nav.Link as={Link} to="/testgallery">TestGallery</Nav.Link>
            <Nav.Link as={Link} to="/imagegallery">Image Gallery</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        
        {logoutButtonRelevant()}
    </Navbar>
    
    </Nav>
    )
}

export default Navigation