import axios from "axios"

import { BASE_API_URL } from '../utils/constants'

const blogReducer = (state = [], action) => {
    switch(action.type) {
        case "GET_BLOGS":
            return action.data
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

export default blogReducer