import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const Gallery = () => {

    return (
        <>
        <Container>
        <Row>
            <Col xs={6} md={4}>
            <Image src="https://picsum.photos/300/200?random=1" thumbnail />
            </Col>
            <Col xs={6} md={4}>
            <Image src="https://picsum.photos/300/200?random=2" thumbnail />
            </Col>
            <Col xs={6} md={4}>
            <Image src="https://picsum.photos/300/200?random=3" thumbnail />
            </Col>
            <Col xs={6} md={4}>
            <Image src="https://picsum.photos/300/200?random=4" thumbnail />
            </Col>
            <Col xs={6} md={4}>
            <Image src="https://picsum.photos/300/200?random=5" thumbnail />
            </Col>
            <Col xs={6} md={4}>
            <Image src="https://picsum.photos/300/200?random=6" thumbnail />
            </Col>
            <Col xs={6} md={4}>
            <Image src="https://picsum.photos/300/200?random=7" thumbnail />
            </Col>
            <Col xs={6} md={4}>
            <Image src="https://picsum.photos/300/200?random=8" thumbnail />
            </Col>
            <Col xs={6} md={4}>
            <Image src="https://picsum.photos/300/200?random=9" thumbnail />
            </Col>
        </Row>
        <Row>

        </Row>
        </Container>
        </>
    )
}

export default Gallery