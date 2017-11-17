import React, { Component } from 'react';
import './EmpRequest.css';
import NavBar from '../../Employee/NavBar/NavBar.js';

class EmpRequests extends Component {
    constructor() {
        super()
    }


    render() {
        return (
            <div>
                <NavBar />
                <div>
                    <h1>Employee Requests</h1>

                    <div>
                        map over requests
                    </div>
                </div>
            </div>
        )
    }
}

export default EmpRequests;