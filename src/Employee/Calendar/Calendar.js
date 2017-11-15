import React, { Component } from 'react';
import './Calendar.css';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

class Calendar extends Component {
    constructor() {
        super()
    }


    render() {
        return (
            <div>
               
                <InfiniteCalendar
                    width={375}
                    height={220}
                    disabledDays={[0, 6]}
                    displayOptions={{
                        layout: 'portrait',
                        showOverlay: false,
                        shouldHeaderAnimate: false
                    }}
                />
                <h2>All Requests</h2>
                <p>List of Requests</p>
                <p>Nathan is Hot: 12/5 - 12/7 APPROVED</p>
                <p>Nathan is cute: 12/3 - 12/4 DENIED</p>
            </div>

        )
    }
}

export default Calendar;