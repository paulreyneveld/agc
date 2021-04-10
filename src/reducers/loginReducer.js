// const initialState = 

const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'INIT_USER':
            return {
                ...state,
                user: action.data,
                loggedIn: true
            }
        case 'CLEAR_USER':
            return {
                ...state,
                user: null,
                loggedIn: false
            }
        default:
            return state
    }
}

export const initializeUser = () => {
    const checkLoggedIn = () => {
      const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
      if (loggedUserJSON) { 
        const user = JSON.parse(loggedUserJSON)
        // dispatch(initializeUser(user))
        // setUser(user)
        return user
      }
    }
    const user = checkLoggedIn()
    return dispatch => {
        dispatch({
            type: 'INIT_USER',
            data: user
        })
    }
}

export const clearUser = (user) => {
    return dispatch => {
        dispatch({
            type: 'CLEAR_USER',
        })
    }
}

export default reducer