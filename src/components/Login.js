import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { initializeUser } from '../reducers/loginReducer'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const handleLogin = async (event) => {
      event.preventDefault()

      try {
        const user = await loginService.login({
          username, password,
        })

        window.localStorage.setItem(
          'loggedBlogappUser', JSON.stringify(user)
        )
        blogService.setToken(user.token)
        dispatch(initializeUser(user))
      } catch (exception) {
        console.log(exception)
      }
    }

    return (
        <>
        <h1>Hello from login</h1>
        <form onSubmit={handleLogin}>
        <div>
          username
            <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
            <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
        </>
    )
}

export default Login