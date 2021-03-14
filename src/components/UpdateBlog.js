import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'
import { editBlog } from '../reducers/blogReducer'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const UpdateBlog = () => {

    const dispatch = useDispatch()

    const { id } = useParams()
    const blogs = useSelector(state => state.blog)
    const blog = blogs.filter(blog => blog.id === id)

    const [title, setTitle] = useState(blog[0].title)
    const [content, setContent] = useState(blog[0].content)

    const updateBlog = (event) => {
        event.preventDefault()
        console.log('update here')
        const updatedBlog = {
            title, 
            content
        }
        dispatch(editBlog(id, updatedBlog))   
        setTitle('')
        setAuthor('')
        
    }
    
    return (
        <Container>
        <h1>Update Blog</h1>
        <Form onSubmit={updateBlog}>
            <Form.Group controlId="formNewBlog">
                <Form.Label>Title:</Form.Label>
                <Form.Control 
                    type="text" 
                    value={title}
                    placeholder="Enter title"
                    onChange={ ({ target}) => setTitle(target.value) } />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Blog</Form.Label>
                <Form.Control 
                    as="textarea" 
                    value={content}
                    placeholder="Type blog here. . ." 
                    rows={10}
                    onChange={ ({ target }) => setContent(target.value) }
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