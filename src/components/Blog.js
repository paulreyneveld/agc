import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import { initializeBlogs, deleteBlog } from '../reducers/blogReducer'
import { useDispatch, useSelector } from 'react-redux'
import ReactMarkdown from 'react-markdown'

const Blog = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeBlogs())
    }, [dispatch] )

    const blogs = useSelector(state => state.blog.data)

    return (
        <Container>
            <h1>Blog</h1>
            {blogs && blogs.map(blog => {
                return (
                    <>
                    <h3 key={blog.id}>{blog.title}</h3>
                    <ReactMarkdown source={blog.content} />
                    </>
                )
            })}
        </Container>
    )
}

export default Blog