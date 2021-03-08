import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import { initializeBlogs, deleteBlog, updateBlog } from '../reducers/blogReducer'
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

    const editBlog = (id) => {
        dispatch(updateBlog(id))
    }

    const blogStyle = {
        borderStyle: "solid",
        borderColor: "#FFEA8E",
        borderRadius: "1em",
        padding: "1em",
        marginBottom: "1em"
    }
    return (
        <Container>
            <h1>Blog</h1>
            {blogs && blogs.slice(0).reverse().map(blog => {
                return (
                    <div key={blog.id} style={blogStyle}>
                    <h3 >{blog.title}</h3>
                    <Button onClick={() => removeBlog(blog.id)}>Delete Post</Button>
                    <Button onClick={() => editBlog(blog.id)}>Edit</Button>
                    <ReactMarkdown source={blog.content} />
                    </div>
                )
            })}
        </Container>
    )
}

export default Blog