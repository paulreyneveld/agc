import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewBlog } from '../reducers/blogReducer'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const NewBlog = (props) => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState(null)
    const [content, setContent] = useState(null)

    const createNewBlog = (event) => {
        event.preventDefault()
        console.log('hello')
        const newBlog = {
            title,
            content
        }
        console.log(newBlog)
        dispatch(addNewBlog(newBlog))
        props.history.push('/blog')
        // Okay, now I need to take the state and send it to an action to interact with the backend. 

    }

    return (
        <Container>
            <h1>New Blog</h1>
            <Form onSubmit={createNewBlog}>
                <Form.Group controlId="formNewBlog">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter title"
                        onChange={ ({ target }) => setTitle(target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Blog</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        placeholder="Type blog here. . ." 
                        rows={10}
                        onChange={({ target }) => setContent(target.value)}
                    />              
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
        </Container>
    )
}

export default NewBlog