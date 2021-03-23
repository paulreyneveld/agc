import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const FileUpload = () => {

    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log('submitted')
    }

    return (
        <Container>
            <Form
                onSubmit={handleFormSubmit}
                method="post"
                encType="multipart/form-data"
                className="upload-form"
            >
                <Form.Group>
                    <Form.File multiple id="form-file-control" label="File input" />
                </Form.Group>
                <Button 
                    variant="outline-primary"
                
                >
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default FileUpload