import axios from "axios"

import { BASE_API_URL } from '../utils/constants'

const blogReducer = (state = [], action) => {
    switch(action.type) {
        case "GET_BLOGS":
            return action.data
        case "NEW_BLOG":
            console.log(state)
            return state.concat(action.data.blog)
        default: 
            return state
    }
}

export const initializeBlogs = () => {
    return async dispatch => {
        // const blogs = await blogService.getAll()
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

export default blogReducer