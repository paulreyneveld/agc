import React, { useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { initializeUser } from '../reducers/loginReducer'

const ProtectedRoute = ({ component: Component, ...rest }) => {

    const user = useSelector(state => state.login.user)
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