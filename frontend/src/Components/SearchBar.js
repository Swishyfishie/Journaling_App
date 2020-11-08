import React, { useRef } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { searchPosts } from '../Actions/postActions'

const SearchBar = ({ searchPosts }) => {
    const text = useRef('')

    const onChange = e => {
        // e.preventDefault()

        if (e.key === 'Enter') {

            searchPosts(text.current.value)
        }
    }
    return (
        <nav>
            <div className="nav-wrapper blue lighten-3">
                <form onSubmit={e => { e.preventDefault() }}>
                    <div className="input-field">
                        <input type="search" id="search" placeholder="Search by tag" ref={text} onKeyUp={onChange} />
                        <label className="label-icon" htmlFor="search">
                            <i className="material-icons">search
                             </i>
                        </label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}

SearchBar.propTypes = {
    searchPosts: PropTypes.func.isRequired
}

export default connect(null, { searchPosts })(SearchBar)