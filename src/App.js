import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom'
import Navigation from './components/Navigation'
import TestBody from './components/TestBody'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Router>
      <Navigation />
        <Switch>
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