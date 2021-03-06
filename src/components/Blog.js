import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import { initializeBlogs, deleteBlog } from '../reducers/blogReducer'
import { useDispatch, useSelector } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import Button from 'react-bootstrap/Button'

const Blog = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeBlogs())
      }, [dispatch] )

    const blogs = useSelector(state => state.blog)

    const removeBlog = (id) => {
        dispatch(deleteBlog(id))
    }
    return (
        <Container>
            <h1>Blog</h1>
            {blogs && blogs.map(blog => {
                return (
                    <div key={blog.id}>
                    <h3 >{blog.title}</h3>
                    <Button onClick={() => removeBlog(blog.id)}>Delete Post</Button>
                    <ReactMarkdown source={blog.content} />
                    </div>
                )
            })}
        </Container>
    )
}

export default Blog