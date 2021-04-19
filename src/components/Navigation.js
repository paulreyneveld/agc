import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux'

const Navigation = ({ handleLogout }) => {
    
    const user = useSelector(state => state.login.user)
    const logoutButtonRelevant = () => {
        if (user) {
            return <Button variant="outline-primary" onClick={handleLogout}>Logout</Button>
        }
    }

    const loginButtonRelevant = () => {
        if (!user) {
            return (
                <Link to={`/login`}><Button variant="outline-primary">Login</Button></Link>
            )
        }
    }

    const authMenuView = () => {
        if (user) {
            return (
                <>
                <Nav.Link as={Link} to="/newblog">New Blog</Nav.Link>
                <Nav.Link as={Link} to="/imageupload">Image Upload</Nav.Link>
                <Nav.Link as={Link} to="/manageimages">Manage Images</Nav.Link>
                </>
            )
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
            <Nav.Link as={Link} to="/panelgallery">Panel Gallery</Nav.Link>
            {authMenuView()}
            </Nav>
        </Navbar.Collapse>
        
        {logoutButtonRelevant()}
        {loginButtonRelevant()}
    </Navbar>
    </Nav>
    )
}

export default Navigation