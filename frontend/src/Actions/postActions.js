import { GET_POSTS, SET_LOADING, POSTS_ERROR, ADD_POST } from './types'

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

// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}