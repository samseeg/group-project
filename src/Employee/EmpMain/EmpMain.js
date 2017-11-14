import React, { Component } from 'react';
import './EmpMain.css';
import Clock from 'react-live-clock';

class EmpMain extends Component {
    constructor() {
        super()
    }


    render() {
        return (
            <div>
                <h1>Hi from EmpMain</h1>
                <p>Employee Photo and Employee Name</p>
                <Clock
                    ticking={true}
                    format={'dddd, MMMM Do, YYYY, h:mm:ss A'}
                />
                <button>Clock In</button>
                <h2>Timer goes here</h2>
            </div>
        )
    }
}

export default EmpMain;