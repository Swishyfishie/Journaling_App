import { GET_POSTS, SET_LOADING, POSTS_ERROR } from '../Actions/types'

const initialState = {
    posts: null,
    loading: false,
    error: null
}
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case POSTS_ERROR:
            console.error(action.payload)
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}