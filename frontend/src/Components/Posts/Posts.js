import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import PropTypes from 'prop-types'
import { getPosts } from '../../Actions/postActions'

const Posts = ({ post: { posts, loading }, getPosts }) => {


    useEffect(() => {
        getPosts()
    }, [])


    if (loading || posts === null) {
        return <h4>Loading...</h4>
    }
    return (
        <ul className="collection with-header">
            <li style={{ marginBottom: '20px' }} className="collection-header">
                <h4 className="center">Your posts</h4>
            </li>
            <div className="container">
                {posts.map(post => <Post post={post} key={post.id} />)}
                <p>Number of posts: {posts.length}</p>
            </div>
        </ul>
    )
}


Posts.propTypes = {
    post: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    post: state.post // the second post pretains to the root reducer (index.js)
})

export default connect(mapStateToProps, { getPosts })(Posts)