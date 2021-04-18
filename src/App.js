import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { initializeUser, clearUser } from './reducers/loginReducer'
import { useDispatch } from 'react-redux'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Blog from './components/Blog'
import About from './components/About'
import Gallery from './components/Gallery'
import Login from './components/Login'
import UpdateBlog from './components/UpdateBlog'
import NewBlog from './components/NewBlog'
import PanelGallery from './components/PanelGallery'
import ManageImages from './components/ManageImages'
import ImageUpload from './components/ImageUpload'
import NewFooter from './components/NewFooter'
import Error from './components/Error'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {

  const dispatch = useDispatch()

  dispatch(initializeUser())
  
  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogappUser')
    dispatch(clearUser())
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
          <Route exact path="/panelgallery" component={PanelGallery} />
          <Route path="/login"  render={(props) => <Login {...props} />}/>
          <ProtectedRoute path="/imageupload" component={ImageUpload} />
          <ProtectedRoute exact path="/newblog" component={NewBlog} />
          <ProtectedRoute exact path="/updateblog/:id" component={UpdateBlog} />
          <ProtectedRoute exact path="/managegallery" component={ManageImages} /> 
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