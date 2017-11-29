import axios from 'axios';

const initialState = {
    user: {},
    request: [],
    adminRequest: []
}

const GET_USER_INFO = "GET_USER_INFO";
const GET_NOTIFICATIONS = "GET_NOTIFICATIONS";
const REMOVE_ADMIN_REQUESTS = "REMOVE_ADMIN_REQUESTS";
const GET_ADMIN_REQUESTS = "GET_ADMIN_REQUESTS";
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

export function getNotifications(id) {
    let promise = axios.get(`/api/admin/get_requests/${id}`).then(response => {
        //    console.log(response.data)       
        return response.data
    })
    return {
        type: GET_NOTIFICATIONS,
        payload: promise
    }
}

export function getAdminRequests() {
    let adminPromise = axios.get('/api/admin/get_admin_requests').then(response => {
        console.log(response.data)
        return response.data
       
    })
    return {
        type: GET_ADMIN_REQUESTS,
        payload: adminPromise
    }
}

export function removeAdminRequests(id) {
    return {
        type: REMOVE_ADMIN_REQUESTS,
        payload: id
    }
}

export function removeRequest(id) {
    return {
        type: REMOVE_REQUEST,
        payload: id
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        case GET_NOTIFICATIONS + '_FULFILLED':
            return Object.assign({}, state, { request: action.payload })
        case GET_ADMIN_REQUESTS + "_FULFILLED":
            return Object.assign({}, state, { adminRequest: action.payload})
        case REMOVE_ADMIN_REQUESTS:
            let newAdminArray = state.adminRequest.slice();
            newAdminArray.splice(action.payload, 1);
            return Object.assign({}, state, { adminRequest: newAdminArray })
        case REMOVE_REQUEST:
            let newArray = state.request.slice();
            newArray.splice(action.payload, 1);
            return Object.assign({}, state, { request: newArray });
        default:
            return state;
    }
}