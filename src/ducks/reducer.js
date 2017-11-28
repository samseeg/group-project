import axios from 'axios';

const initialState = {
    user: {},
    request: []
}

const GET_USER_INFO = "GET_USER_INFO";
const GET_NOTIFICATIONS = "GET_NOTIFICATIONS";

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

export function getNotifications(id){
   let promise = axios.get(`/api/admin/get_requests/${id}`).then(response => { 
    //    console.log(response.data)       
        return response.data
      })
      return {
          type: GET_NOTIFICATIONS,
          payload: promise
      }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        case GET_NOTIFICATIONS + '_FULFILLED':
            return Object.assign({}, state, {request: action.payload})
        default:
            return state;
    }
}