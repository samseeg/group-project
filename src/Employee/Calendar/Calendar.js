import React, { Component } from 'react';
import './Calendar.css';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import NavBar from './../NavBar/NavBar'

class Calendar extends Component {

    render() {
        return (
            <div className='container'>
                <NavBar />
                <InfiniteCalendar
                    width={375}
                    height={210}
                    disabledDays={[0, 6]}
                    displayOptions={{
                        layout: 'portrait',
                        showOverlay: false,
                        shouldHeaderAnimate: false
                    }}
                    className={'Calendar'}
                    theme={{
                        selectionColor: '#9c92a3',
                        textColor: {
                            default: '#333',
                            active: '#FFF'
                        },
                        weekdayColor: '#c6b9cd',
                        headerColor: '#9c92a3',
                        floatingNav: {
                            background: '#2D2B32',
                            color: '#FFF',
                            chevron: '#A69CAD'
                        }
                    }}
                />
                <div className='all_requests'>
                    <div className='title'>All Requests</div>
                    <div className='content'>Vacation: 12/5 - 12/7 APPROVED</div>
                    <div className='content'>Doctor's Appointment: 12/3 DENIED</div>
                    <div className='content'>Personal Day: 12/25 DENIED</div>
                </div>
            </div>

        )
    }
}

export default Calendar;