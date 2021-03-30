import React from 'react'
import { Card } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'

const ImageContainer = ({ id }) => {
  return (
    // <Card className="photo">
    //   <Card.Img
    //     variant="top"
    //     src={`http://localhost:3001/api/photos/${id}`}
    //     alt="Photo"
    //   />
    // </Card>
    <Col xs={6} md={4} lg={2}>
    <Image 
      src={`http://localhost:3001/api/images/${id}`}
    />
    </Col>
  )
}

export default ImageContainer