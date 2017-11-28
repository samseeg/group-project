import axios from 'axios';

const initialState = {
    user: {},
    request: []
}

const GET_USER_INFO = "GET_USER_INFO";
const REMOVE_REQUEST = "REMOVE_REQUEST";

export function getUserInfo() {
    const userData = axios.get('/auth/me')
        .then(res => {
            return res.data
        })
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export function removeRequest(request){
    return {
        type: REMOVE_REQUEST,
        payload: request
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        case REMOVE_REQUEST + '_FULFILLED':
            let newArray = state.request.slice();
            newArray.splice(action.payload, 1);
            return Object.assign({}, state, { request: newArray })
        default:
            return state;
    }
}