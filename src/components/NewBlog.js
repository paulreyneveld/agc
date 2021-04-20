import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewBlog } from '../reducers/blogReducer'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const NewBlog = (props) => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState(null)
    const [content, setContent] = useState(null)
    const [notification, setNotification] = useState(false)

    const user = useSelector(state => state.login.user)
    const createNewBlog = (event) => {
        event.preventDefault()
        const newBlog = {
            title,
            content
        }
        dispatch(addNewBlog(newBlog, user.token))
        setTitle('')
        setContent('')
        setNotification(true)
        setTimeout(() => {
            setNotification(false)
            props.history.push('/blog')
        }, 1500)
    }

    const confirmation = () => {
        if (notification) {
            return <p>Updating. . .</p>
        }
    }

    const buttonStyle = {
        marginBottom: "1em"
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
                <Button style={buttonStyle} variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
                {confirmation()}
        </Container>
    )
}

export default NewBlog