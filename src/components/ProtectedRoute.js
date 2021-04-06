import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ component: Component, ...rest }) => {

    // const user = useSelector(state => state.login.user)
    // console.log('user', user)
    console.log('rest', rest)
    const user = rest

    return (
    <Route {...rest} render={
        props => {
        if (user) {
            return <Component {...rest} {...props} />
        } else {
            return <Redirect to='/error' />
        }
        }
    } />
    )
}

export default ProtectedRoute