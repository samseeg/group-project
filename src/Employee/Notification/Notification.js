import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserInfo } from './../../ducks/reducer.js';
import './Notification.css';
import red_x from './../../assets/red_x_icon.svg';
import green_check from './../../assets/green_checkmark.svg';


class Notification extends Component {
  constructor() {
    super();
    this.state = {
      requests: [],
      users: [],
      rendering: false
    }
    // this.notificationRender = this.notificationRender.bind(this)
  }
  componentDidUpdate(id) {
    axios.get(`/api/admin/get_requests/${this.props.user.id}`).then(response => {
        this.setState({
            requests: response.data
        })

    })
}
  // notificationRender(value){
  //   this.setState({
  //     rendering: !this.state.rendering

  //   })
  // }
  render() {
    const notificationDisplayed = this.state.requests.map((requests, i) => {
      const start_date = requests.start_date.replace(/T.*/, '')
      const end_date = requests.end_date ? requests.end_date.replace(/T.*/, '') : 'N/A'
      const approval = requests.approval
      return (
      
        <div key={i}>
        {approval === "Approved" || approval === "Denied" ?
       <div className={requests.approval==='Approved' ? 'approved_notification' : 'denied_notification'}>
       {requests.approval==='Approved' ? <div><img src={red_x} alt=''/></div> : <div><img src={green_check} alt=''/></div>}
        <div>The time off you requested for</div> 
        <div>{start_date} to {end_date}</div> 
        <div>has been {requests.approval.toLowerCase()}.</div>
        </div> : null } 
    </div>

      )
    })
    
    return (
      <div>
       {notificationDisplayed }
        </div>
    )
  }
}
function mapStateToProp(state) {
  return {
      user: state.user
  }
}

export default connect(mapStateToProp, { getUserInfo })(Notification);

