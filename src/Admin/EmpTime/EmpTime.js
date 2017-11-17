import React, { Component } from 'react';
import './EmpTime.css';
import NavBar from '../../Employee/NavBar/NavBar.js';

class EmpTime extends Component {
    constructor() {
        super()
    }


    render() {
        return (
            <div>
                <NavBar />
                <div>
                    <h1>Time Card</h1>

                    <div>
                        Employee pay period info
                    </div>
                </div>
            </div>
        )
    }
}

export default EmpTime;