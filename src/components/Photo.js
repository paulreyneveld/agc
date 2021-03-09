import React from 'react'
import { Card } from 'react-bootstrap'
import Image from 'react-image-resizer'

const Photo = ({ id }) => {
  return (
    // <Card className="photo">
    //   <Card.Img
    //     variant="top"
    //     src={`http://localhost:3001/api/photos/${id}`}
    //     alt="Photo"
    //   />
    // </Card>
    <img 
      src={`http://localhost:3001/api/photos/${id}`}
      height={300}
      width={300}
    />
  )
}

export default Photo