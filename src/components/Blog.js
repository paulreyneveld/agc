import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import { initializeBlogs } from '../reducers/blogReducer'
import { useDispatch, useSelector } from 'react-redux'
import ReactMarkdown from 'react-markdown'

const Blog = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeBlogs())
    }, [dispatch] )

    const blogs = useSelector(state => state.blog)
    console.log(blogs)
    return (
        <Container>
            <h1>Blog</h1>
        </Container>
    )
}

export default Blog