import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor() {
        super()
    }


    render() {
        return (
            <div className='Login'>
                <img src='https://i.imgur.com/Z9kYXzD.png' alt=''/>
                <a href='http://localhost:3005/auth'><button>LOG IN</button></a>
            </div>
        )
    }
}

export default Login;
