import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import { initializeBlogs, deleteBlog, updateBlog } from '../reducers/blogReducer'
import { useDispatch, useSelector } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const Blog = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeBlogs())
      }, [dispatch] )

    const blogs = useSelector(state => state.blog)

    const removeBlog = (id) => {
        dispatch(deleteBlog(id))
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
                    <Button variant="outline-primary" onClick={() => removeBlog(blog.id)}>Delete Post</Button>
                    <Link to={`/updateblog/${blog.id}`}><Button variant="outline-primary">Edit</Button></Link>
                    <ReactMarkdown source={blog.content} />
                    </div>
                )
            })}
        </Container>
    )
}

export default Blog