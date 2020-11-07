import { GET_POSTS, SET_LOADING, POSTS_ERROR } from './types'

export const getLogs = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('http://localhost:3000/posts')
        const data = await res.json()

        dispatch({
            type: GET_LOGS,
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