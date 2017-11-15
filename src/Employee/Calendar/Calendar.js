import React, { Component } from 'react';
import './Calendar.css';

class Calendar extends Component {
    constructor() {
        super()
    }


    render() {
        return(
            <div>
                <h1>Calendar</h1>
                <p>the calendar goes here <img src="http://www.shinzoo.com/images002/calendar-04/calendar-for-this-month/01.jpg" alt="calendar" width="300px" height="300px"/></p>
                <h2>All Requests</h2>
                <p>List of Requests</p>
                <p>Nathan is Hot: 12/5 - 12/7 APPROVED</p>
                <p>Nathan is cute: 12/3 - 12/4 DENIED</p>
            </div>

        )
    }
}

export default Calendar;