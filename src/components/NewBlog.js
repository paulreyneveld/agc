import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const NewBlog = () => {
    return (
        <Container>
            <h1>New Blog</h1>
            <Form>
                <Form.Group controlId="formNewBlog">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Blog</Form.Label>
                    <Form.Control type="textarea" placeholder="Type blog here. . ." />              
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
        </Container>
    )
}

export default NewBlog