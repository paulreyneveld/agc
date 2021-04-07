import React, { useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { initializeUser } from '../reducers/loginReducer'

const ProtectedRoute = ({ component: Component, ...rest }) => {

    const [user, setUser] = useState(null)

    const dispatch = useDispatch()

    useEffect(() => {
        const checkLoggedIn = () => {
          const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
          if (loggedUserJSON) { 
            const user = JSON.parse(loggedUserJSON)
            dispatch(initializeUser(user))
            console.log(user)
            setUser(user)
          }
        }
        checkLoggedIn()
      }, [dispatch])

    // const user = useSelector(state => state.login.user)
    // console.log('user', user)
    // console.log('rest', rest)
    // const user = rest
    console.log('user', rest.user)

    return (
    <Route {...rest} render={
        props => {
        if (rest.user) {
            return <Component {...rest} {...props} />
        } else {
            return <Redirect to='/error' />
        }
        }
    } />
    )
}

export default ProtectedRoute