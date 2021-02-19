import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Blog from './components/Blog'
import About from './components/About'
import Gallery from './components/Gallery'
import Login from './components/Login'
import Footer from './components/Footer'
import css from './custom.css'


const App = () => {
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
            <Login />
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