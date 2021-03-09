import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { initializeUser, clearUser } from './reducers/loginReducer'
import { useDispatch, useSelector } from 'react-redux'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Blog from './components/Blog'
import About from './components/About'
import Gallery from './components/Gallery'
import Login from './components/Login'
import Footer from './components/Footer'
import Upload from './components/UploadPhoto'
import TestGallery from './components/TestGallery'
import NewBlog from './components/NewBlog'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const checkLoggedIn = () => {
      const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
      if (loggedUserJSON) { 
        const user = JSON.parse(loggedUserJSON)
        dispatch(initializeUser(user))
        console.log(user)
      }
    }
    checkLoggedIn()
  }, [dispatch])

  const userInfo = useSelector(state => {
    return state.user
  })  
  
  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogappUser')
    dispatch(clearUser(null))
  }

  return (
    <>
    <Router>
      <Navigation
        handleLogout={handleLogout}
      />
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
          <Route path="/login"  render={(props) => <Login {...props} />}/>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route path="/testgallery">
            <TestGallery />
          </Route>
          <Route exact path="/newblog" render={(props) => <NewBlog {...props} />}/>
          <Route exact path="/panelgallery" render={() => <PanelGallery />}/>

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