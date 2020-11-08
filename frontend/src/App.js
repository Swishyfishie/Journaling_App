import React, { Fragment, useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import Navbar from './Components/Navbar'
import Posts from './Components/Posts/Posts'
import AddPostButton from './Components/AddPostButton'
import CreatePost from './Components/Posts/CreatePost'
import UpdatePost from './Components/Posts/UpdatePost'
import SearchBar from './Components/SearchBar'
import { Provider } from 'react-redux'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store'




const App = () => {
  useEffect(() => {
    //initialize materialize js so I can use modals and stuff
    M.AutoInit()
  })
  return (
    <Provider store={store}>
      <BrowserRouter>

        <Navbar />
        {/* <Switch>
          <Route path="/about" component={About} />
        </Switch>
        
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} /> */}

        <Switch>
          <Route path="/about" component={About} />
        </Switch>
        <Switch>
          <Route path="/contact" component={Contact} />
        </Switch>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
