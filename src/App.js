import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Navigation from './components/Navigation'
import TestBody from './components/TestBody'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Router>
      <Navigation />
        <Switch>
          <Route path="/blog">

          </Route>
          <Route path="/about">

          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/">
            <TestBody />
          </Route>
        </Switch>
      <Footer />
    </Router>
    </>
  )
}

export default App