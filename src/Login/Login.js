import React, { Component } from 'react';
import './Login.css';
import logo from './../assets/logo2.svg'

class Login extends Component {
    constructor() {
        super()
    }


    render() {
        return (
            <div className='Login'>
                <img src={logo} alt=''/>
                <a href='http://localhost:3005/auth'><button>LOG IN</button></a>
            </div>
        )
    }
}

export default Login;
