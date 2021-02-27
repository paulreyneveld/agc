import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import { useDispatch } from 'react-redux'

const Upload = () => {

    const dispatch = useDispatch()
    const [photo, setPhoto] = useState(null)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleOnChange = (event) => {
        const file = event.target.files[0]
        setPhoto(file)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        if (photo) {
            // dispatch(beginAddPhoto(photo))
            setIsSubmitted(true)
        }
    }

    return (
    <Container>
        <Form
        // onSubmit={handleFormSubmit}
        method="post"
        encType="multipart/form-data"
        className="upload-form"
        >
        <Form.Group>
          <Form.Label>Choose photo to upload</Form.Label>
          <Form.Control type="file" name="photo" onChange={handleOnChange} />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
        >
          Upload
        </Button>
      </Form>
    </Container>
    )
}

export default Upload