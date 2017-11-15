import React, { Component } from 'react';
import './VacaRequests.css';

class VacaRequests extends Component {
    constructor() {
        super()
    }


    render() {
        return (
            <div>
                <h1>Time Off Requests</h1>
                <p>Min Date</p>

                <p>Max Date</p>

                <p>Drop Down menu goes here to for REASON</p>

                <button>RESET</button>
                <button>SUBMIT</button>

            </div>
        )
    }
}

export default VacaRequests;