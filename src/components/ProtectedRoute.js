import React, { useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { initializeUser } from '../reducers/loginReducer'

const ProtectedRoute = ({ component: Component, ...rest }) => {

    const loggedIn = useSelector(state => state.login.loggedIn)
    // console.log('user', user)
    // console.log('rest', rest)
    // const user = rest
    // console.log('user', rest.user)
    console.log(loggedIn)
    console.log(rest.user)

    return (
    <Route {...rest} render={
        props => {
        if (loggedIn || rest.user) {
            return <Component {...rest} {...props} />
        } else {
            return <Redirect to='/error' />
        }
        }
    } />
    )
}

export default ProtectedRoute