import axios from "axios"
import { BASE_API_URL } from '../utils/constants'

const blogReducer = (state = [], action) => {
    switch(action.type) {
        case "GET_BLOGS":
            return action.data.data
        case "GET_BLOG":
            return state.filter(blog => blog.id === action.data)
        case "NEW_BLOG":
            return state.concat(action.data)
        case "DELETE_BLOG":
            return state.filter(blog => blog.id !== action.data)
        default: 
            return state
    }
}

export const initializeBlogs = () => {
    return async dispatch => {
        const blogs = await axios.get(`${BASE_API_URL}/blog`)
        dispatch({
            type: 'GET_BLOGS',
            data: blogs
        })
    }
}

export const addNewBlog = (newBlog) => {
    return async dispatch => {
        const blog = await axios.post(`${BASE_API_URL}/blog`, newBlog)
        dispatch({
            type: 'NEW_BLOG',
            data: blog
        })
    }
}

export const deleteBlog = (id) => {
    return async dispatch => {
        try {
        await axios.delete(`${BASE_API_URL}/blog/${id}`)
        dispatch({
            type: 'DELETE_BLOG',
            data: id
        })
        }
        catch (error) {
            console.log(error)
        }
    }
}

export const getBlogData = (id) => {
    return async dispatch => {
        dispatch({
            type: 'GET_BLOG', 
            data: id
        })
    }
}

// edit blog
export const updateBlog = (id) => {
    return async dispatch => {
        try {
            // await axios.put(`${BASE_API_URL}/blog/${id}`)
        }
        catch (error) {
            console.log(error)
        }
    }
}

export default blogReducer