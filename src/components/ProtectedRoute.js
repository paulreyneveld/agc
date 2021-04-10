import React, { useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { initializeUser } from '../reducers/loginReducer'

const ProtectedRoute = ({ component: Component, ...rest }) => {

    return (
    <Route {...rest} render={
        props => {
        if (window.localStorage.getItem('loggedBlogappUser')) {
            return <Component {...rest} {...props} />
        } else {
            return <Redirect to='/error' />
        }
        }
    } />
    )
}

export default ProtectedRoute