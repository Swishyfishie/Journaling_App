import React, { Fragment, useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import Navbar from './Components/Navbar'
import Posts from './Components/Posts/Posts'
const App = () => {
  useEffect(() => {
    //initialize materialize js so I can use modals and stuff
    M.AutoInit()
  })
  return (
    <Fragment>
      <Navbar />
      <Posts />
    </Fragment>
  );
}

export default App;
