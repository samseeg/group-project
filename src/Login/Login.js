import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor() {
        super()
    }


    render() {
        return (
            <div>
                <a href='http://localhost:3005/auth'><button>Log In</button></a>
                <a href='/auth/logout'><button>Log Out</button></a>

            </div>
        )
    }
}

export default Login;
