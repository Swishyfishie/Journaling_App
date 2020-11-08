import { GET_POSTS, SET_LOADING, POSTS_ERROR, ADD_POST, DELETE_POST, SET_CURRENT, CLEAR_CURRENT, UPDATE_POST, SEARCH_POSTS } from './types'

export const getPosts = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('http://localhost:3000/posts')
        const data = await res.json()

        dispatch({
            type: GET_POSTS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: POSTS_ERROR,
            payload: err.response.data
        })
    }


}

// add new post
export const addPost = (post) => async dispatch => {
    try {
        setLoading();
        const res = await fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(post)
        })
        const data = await res.json()

        dispatch({
            type: ADD_POST,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: POSTS_ERROR,
            payload: err.response.data
        })
    }


}

// delete logs
export const deletePost = (id) => async dispatch => {
    try {
        setLoading();
        const res = await fetch('http://localhost:3000/posts/' + id, {
            method: "DELETE"
        })

        dispatch({
            type: DELETE_POST,
            payload: id
        })
    } catch (err) {
        dispatch({
            type: POSTS_ERROR,
            payload: err.response.data
        })
    }


}

// set current post

export const setCurrent = post => {
    return {
        type: SET_CURRENT,
        payload: post
    }
}
// clear current post
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT,
    }
}

// editPost post
export const editPost = (post) => async dispatch => {
    try {
        setLoading();
        const res = await fetch('http://localhost:3000/posts/' + post.id, {
            method: "PUT",
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json()

        dispatch({
            type: UPDATE_POST,
            payload: data
        })

    } catch (err) {
        dispatch({
            type: POSTS_ERROR,
            payload: err.response.data
        })
    }


}

export const searchPosts = (tag) => async dispatch => {
    try {
        setLoading();
        const res = await fetch('http://localhost:3000/tags/' + tag)
        const data = await res.json()

        dispatch({
            type: SEARCH_POSTS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: POSTS_ERROR,
            payload: err.response.data
        })
    }


}

// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}