import React from 'react'
import { NavLink } from 'react-router-dom'
import AddPostButton from './AddPostButton'
const Navbar = () => {
    return (
        <div>

            <nav className="nav-extended blue" >
                <div className="nav-wrapper blue lighten-1">
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                exact

                            >
                                Home
                        </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                exact

                            >
                                About the app
                        </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                exact

                            >
                                Contact Me
                        </NavLink>
                        </li>

                    </ul>
                </div>
                <div className="nav-content">
                    <span className="nav-title">Welcome to your journal
                                        <AddPostButton />
                    </span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
