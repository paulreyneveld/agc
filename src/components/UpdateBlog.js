import React from 'react'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const UpdateBlog = () => {
    return (
        <Container>
        <h1>Update Blog</h1>
        <Form onSubmit={console.log('submit updated blog')}>
            <Form.Group controlId="formNewBlog">
                <Form.Label>Title:</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter title"
                    onChange={ console.log('change') } />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Blog</Form.Label>
                <Form.Control 
                    as="textarea" 
                    placeholder="Type blog here. . ." 
                    rows={10}
                    onChange={ console.log('change') }
                />              
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
    </Container>
    )
}

export default UpdateBlog