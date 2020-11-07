import React from 'react'
import PropTypes from 'prop-types'

const Post = ({ post }) => {
    return (
        <li className="collection-item">
            <div>
                <li>Description: {post.description}</li>
                <a href="#!" className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
                <li>Tags: {post.tag_list[0]}</li>
            </div>

        </li>
    )
}

Post.propTypes = {
    post: PropTypes.object.isRequired
}

export default Post
