import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const Footer  = () => {
    return (
        <footer>
        <Container style={{backgroundColor: "F2BFBF"}}>
        <Card>
        <Card.Body>
            Copyright Alien Girl Cult 2021 <br />
            <Card.Link><Link to="/home">Home</Link></Card.Link>
            <Card.Link><Link to="/blog">Blog</Link></Card.Link>
            <Card.Link><Link to="/about">About</Link></Card.Link>
            <Card.Link><Link to="/gallery">Gallery</Link></Card.Link>

        </Card.Body>
        
        </Card>
        </Container>
        </footer>
    )
}

export default Footer