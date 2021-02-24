import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import loginService from './services/login'

import Navigation from './components/Navigation'
import Home from './components/Home'
import Blog from './components/Blog'
import About from './components/About'
import Gallery from './components/Gallery'
import Login from './components/Login'
import Footer from './components/Footer'
import css from './custom.css'


const App = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [user, setUser] = useState(null)

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
        const user = await loginService.login({
          username, password,
        })
        window.localStorage.setItem(
            'loggedAdmin', JSON.stringify(user)
        )
        setUser(user)
        setUsername('')
        setPassword('')
        console.log('Login success')
      } catch (exception) {
        setErrorMessage('Wrong credentials')
        console.log('Login failed')
      }
  }   

  return (
    <>
    <Router>
      <Navigation />
        <Switch>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/login">
            <Login 
              handleLogin={handleLogin}
              setUsername={setUsername}
              setPassword={setPassword}
              username={username}
              password={password}
             />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      <Footer />
    </Router>
    </>
  )
}

export default App