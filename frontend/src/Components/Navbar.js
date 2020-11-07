import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="nav-extended blue" >
                <div className="nav-wrapper">
                    <ul>
                        <li><a>A link</a></li>
                        <li><a>A second link</a></li>
                        <li><a>A third link</a></li>
                    </ul>
                </div>
                <div className="nav-content">
                    <span className="nav-title">Add a post</span>
                    <a className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
                        <i className="material-icons">add</i>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
