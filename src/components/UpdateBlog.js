import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogData } from '../reducers/blogReducer' 
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const UpdateBlog = () => {

    const { id } = useParams()
    console.log(id)
    const blogs = useSelector(state => state.blog)
    const blog = blogs.filter(blog => blog.id === id)
    console.log(blog)
    

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