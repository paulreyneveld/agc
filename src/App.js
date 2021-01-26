import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Blog from './components/Blog'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

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

          </Route>
          <Route path="/gallery">
            <Gallery />
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