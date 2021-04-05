import React, { useEffect, useState } from 'react'
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
import UpdateBlog from './components/UpdateBlog'
import NewBlog from './components/NewBlog'
import PanelGallery from './components/PanelGallery'
import ImageUpload from './components/ImageUpload'
import NewFooter from './components/NewFooter'

const App = () => {

  const dispatch = useDispatch()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const checkLoggedIn = () => {
      const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
      if (loggedUserJSON) { 
        const user = JSON.parse(loggedUserJSON)
        dispatch(initializeUser(user))
        console.log(user)
        setUser(user)
      }
    }
    checkLoggedIn()
  }, [dispatch])
  
  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogappUser')
    dispatch(clearUser(null))
  }

  console.log(user)

  const privatePaths = () => {
    if (user) {
      return <Route exact path="/newblog" render={(props) => <NewBlog {...props} />} />
    }
    else {
      return <Route path="/error"  render={(props) => <Login {...props} />}/>
    }
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
          
          <Route path="/updateblog/:id"  render={(props) => <UpdateBlog {...props} />} />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/login"  render={(props) => <Login {...props} />}/>
          <Route path="/imageupload" component={ImageUpload} />
          <Route exact path="/panelgallery" render={() => <PanelGallery />} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      <NewFooter />
          {privatePaths()}
    </Router>
    </>
  )
}

export default App