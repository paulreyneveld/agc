import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

const Upload = () => {
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
          {/* <Form.Control type="file" name="photo" onChange={handleOnChange} /> */}
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