import React, { Fragment, useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import Navbar from './Navbar'
import Posts from './Posts/Posts'
import AddPostButton from './AddPostButton'
import CreatePost from '../Components/Posts/CreatePost'
import UpdatePost from './Posts/UpdatePost'
import SearchBar from './SearchBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';




const Home = () => {
    useEffect(() => {
        //initialize materialize js so I can use modals and stuff
        M.AutoInit()
    })
    return (
        <Switch>
            <Route exact path='/' render={props => (
                <div className="container">
                    <SearchBar />
                    <CreatePost />
                    <UpdatePost />
                    <Posts />
                </div>

            )} />
        </Switch>
    );
}



export default Home