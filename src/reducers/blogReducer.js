const blogReducer = (state = [], action) => {
    switch(action.type) {
        case "GET_BLOGS":
            return state.blogs
        default: 
            return state
    }
}

export default blogReducer