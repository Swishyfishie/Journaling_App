import React, { Fragment, useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import Navbar from './Components/Navbar'
import Posts from './Components/Posts/Posts'
import AddPostButton from './Components/AddPostButton'
import CreatePost from './Components/Posts/CreatePost'
import { Provider } from 'react-redux'
import store from './store'





const App = () => {
  useEffect(() => {
    //initialize materialize js so I can use modals and stuff
    M.AutoInit()
  })
  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
        <div className="container">
          <AddPostButton />
          <CreatePost />
          <Posts />
        </div>
      </Fragment>
    </Provider>

  );
}

export default App;
