import React, { useState, useEffect } from 'react'
import Post from './Post'
const Posts = () => {

    const [posts, setPosts] = useState([])

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        setLoading(true)
        const res = await fetch("http://localhost:3000/posts")
        const data = await res.json()
        setPosts(data)
        setLoading(false)
    }

    if (loading) {
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

export default Posts