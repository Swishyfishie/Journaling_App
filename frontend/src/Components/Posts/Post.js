import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deletePost } from '../../Actions/postActions'
import M from 'materialize-css/dist/js/materialize.min.js'

const Post = ({ post, deletePost }) => {
    const onDelete = () => {
        deletePost(post.id)
        M.toast({ html: 'Post Deleted' })
    }
    return (
        <li className="collection-item">
            <div>
                <li>Description: {post.description}</li>
                <a href="#!" className="secondary-content">
                    <i className="material-icons grey-text" onClick={onDelete}>delete</i>
                </a>
                <li>Tags: {post.tag_list[0]}</li>
            </div>

        </li>
    )
}

Post.propTypes = {
    post: PropTypes.object.isRequired
}

export default connect(null, { deletePost })(Post)
