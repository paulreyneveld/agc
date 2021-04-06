import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ component: Component, ...rest }) => {

    const user = useSelector(state => state.login.user)
    // console.log('user', user)
    // console.log('rest', rest)
    // const user = rest
    // console.log('user', rest.user)
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