import { GET_POSTS, SET_LOADING, POSTS_ERROR, ADD_POST, DELETE_POST, SET_CURRENT, CLEAR_CURRENT, UPDATE_POST } from '../Actions/types'

const initialState = {
    posts: null,
    current: null,
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
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
                loading: false
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(log => log.id !== action.payload),
                loading: false
            }
        case UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post)
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
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