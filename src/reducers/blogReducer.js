import axios from "axios"
import { BASE_API_URL } from '../utils/constants'

const blogReducer = (state = [], action) => {
    switch(action.type) {
        case "GET_BLOGS":
            return action.data.data
        case "NEW_BLOG":
            return state.concat(action.data)
        case "UPDATE_BLOG":
            console.log(action.data)
            // return state.filter(blog => blog.id !== action.id).concat(action.data)
        case "DELETE_BLOG":
            return state.filter(blog => blog.id !== action.data)
        default: 
            return state
    }
}

export const initializeBlogs = () => {
    return async dispatch => {
        try {
            const blogs = await axios.get(`${BASE_API_URL}/blog`)
            dispatch({
                type: 'GET_BLOGS',
                data: blogs
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}

export const addNewBlog = (newBlog) => {
    return async dispatch => {
        try {
            const blog = await axios.post(`${BASE_API_URL}/blog`, newBlog)
            dispatch({
                type: 'NEW_BLOG',
                data: blog
            })
        }
        catch (error) {
            console.log(error)
        }
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

// edit blog
export const editBlog = (id, newBlog) => {
    return async dispatch => {
        try {
            // await axios.put(`${BASE_API_URL}/blog/${id}`, newBlog)
            dispatch({
                type: 'UPDATE_BLOG',
                id: id,
                data: newBlog
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}

export default blogReducer