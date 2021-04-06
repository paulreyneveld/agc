import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
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
import UpdateBlog from './components/UpdateBlog'
import NewBlog from './components/NewBlog'
import PanelGallery from './components/PanelGallery'
import ImageUpload from './components/ImageUpload'
import NewFooter from './components/NewFooter'
import Error from './components/Error'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {

  const dispatch = useDispatch()
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const checkLoggedIn = () => {
      const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
      if (loggedUserJSON) { 
        const user = JSON.parse(loggedUserJSON)
        dispatch(initializeUser(user))
        console.log(user)
        setIsAuthenticated(true)
        setUser(user)
      }
    }
    checkLoggedIn()
  }, [dispatch])
  
  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogappUser')
    dispatch(clearUser(null))
    setUser(null)
    setIsAuthenticated(false)
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
          <Route exact path="/newblog" render={(props) => <NewBlog {...props} />} />
          <Route path="/updateblog/:id"  render={(props) => <UpdateBlog {...props} />} />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/login"  render={(props) => <Login {...props} />}/>
          <Route path="/imageupload" component={ImageUpload} />
          <ProtectedRoute exact path="/panelgallery" component={PanelGallery} user={user} />
          {/* <Route path="/panelgallery">
            {isAuthenticated ? <PanelGallery /> : <Error />}
          </Route> */}
          <Route path="/error" component={Error} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      <NewFooter />
          
    </Router>
    </>
  )
}

export default App