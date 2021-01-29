import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const Footer  = () => {
    return (
        <footer>
        <Card>
        <Card.Header>Alien Girl Cult</Card.Header>
        <Card.Body>
            Copyright Alien Girl Cult 2021
        </Card.Body>
        <Container>
        <Card.Link><Link to="/gallery">Card Link</Link></Card.Link>
        </Container>
        </Card>
        </footer>
    )
}

export default Footer