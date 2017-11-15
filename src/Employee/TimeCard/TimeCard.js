import React, { Component } from 'react';
import './TimeCard.css';

class TimeCard extends Component {
    constructor() {
        super()
    }


    render() {
        return (
            <div>
                <h1>TimeCard</h1>
                <p>Pay Period: 11/1 - 11/15</p>
                <p>Date Clock In Clock Out Total</p>
                <p>11/1 Time Time 8</p>
                <p>11/1 Time Time 8</p>
            </div>
        )
    }
}

export default TimeCard;