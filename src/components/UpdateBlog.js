import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogData } from '../reducers/blogReducer' 
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const UpdateBlog = () => {

    const { id } = useParams()
    const blogs = useSelector(state => state.blog)
    const blog = blogs.filter(blog => blog.id === id)

    const [title, setTitle] = useState(blog[0].title)
    const [content, setContent] = useState(blog[0].content)
    

    return (
        <Container>
        <h1>Update Blog</h1>
        <Form onSubmit={console.log('submit updated blog')}>
            <Form.Group controlId="formNewBlog">
                <Form.Label>Title:</Form.Label>
                <Form.Control 
                    type="text" 
                    value={title}
                    placeholder="Enter title"
                    onChange={ console.log('change') } />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Blog</Form.Label>
                <Form.Control 
                    as="textarea" 
                    value={content}
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