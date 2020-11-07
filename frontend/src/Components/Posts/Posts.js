import React, { useState, useEffect } from 'react'

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
        <ul className="collection-with-header">
            <li className="collection-header">
                <h4 className="center">Your posts</h4>
            </li>
            <p>Number of posts: {posts.length}</p>
            <div className="container">
                {posts.map(p => {
                    return (

                        <div key={p.id}>
                            <li>Description: {p.description}</li>
                            <li>Tags: {p.tag_list[0]}</li>
                            <p>---------------------</p>
                        </div>
                    )
                })}
            </div>
        </ul>
    )
}

export default Posts