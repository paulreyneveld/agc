import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { initializeUser } from '../reducers/loginReducer'
import { login as loginService }  from '../services/login'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

const Login = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const handleLogin = async (event) => {
      event.preventDefault()

      try {
        const user = await loginService({
          username, password,
        })

        window.localStorage.setItem(
          'loggedBlogappUser', JSON.stringify(user)
        )
        dispatch(initializeUser(user))
        props.history.push('/')
      } catch (exception) {
        console.log(exception)
      }
    }

    return (
      <Container col={3}>
      <div className="Login">
      <Form onSubmit={handleLogin}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={({ target}) => setPassword(target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit">
          Login
        </Button>
      </Form>
    </div>
    </Container>
    )
}

export default Login