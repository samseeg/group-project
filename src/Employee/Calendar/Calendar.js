import React, { Component } from 'react';
import './Calendar.css';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import NavBar from './../NavBar/NavBar'
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserInfo } from './../../ducks/reducer.js'

class Calendar extends Component {
    constructor() {
        super();
        this.state = {
            requests: [],
            rendering: false,
        }
        
    }
    componentDidMount(id) {
        axios.get(`/api/admin/get_requests/${this.props.user.id}`).then(response => {
            this.setState({
                requests: response.data
            })

        })
        
    }
  
      
    
    render() {
        const notificationDisplayed = this.state.requests.map((requests, i) => {
            const start_date = requests.start_date.replace(/T.*/, '')
            const end_date = requests.end_date ? requests.end_date.replace(/T.*/, '') : 'N/A'
            const approval = requests.approval
            return (
            
             <div key={i}>
                {approval === "Approved" || approval === "Denied" ?
               <div className='single_request'>
                <div>{requests.reason}</div>
                <div>{start_date} to {end_date}</div>                
                <div className={requests.approval==='Approved' ? 'green' : 'red'}>{requests.approval}</div>
                </div> : null } 
            </div>
            )
          })
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
                 <div>
                {notificationDisplayed }
                 </div>
                </div>
            </div>

        )
    }
}
function mapStateToProp(state) {
    return {
        user: state.user
    }
}
export default connect(mapStateToProp, { getUserInfo })(Calendar);