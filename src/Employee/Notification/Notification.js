import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { getUserInfo, getNotifications } from './../../ducks/reducer.js';
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

//   componentDidMount() {
//     this.props.getNotifications(this.props.user.id);
// }

  render() {
    const notificationDisplayed = this.props.request.map((requests, i) => {
      const start_date = requests.start_date.replace(/T.*/, '')
      const end_date = requests.end_date ? requests.end_date.replace(/T.*/, '') : 'N/A'
      const approval = requests.approval
      return (

        <div key={i}>
          {approval === "Approved" || approval === "Denied" ?
            <div className={requests.approval === 'Approved' ? 'approved_notification' : 'denied_notification'}>
              {requests.approval === 'Approved' ? <img src={green_check} alt='' /> : <img src={red_x} alt='' />}
              <div>
                <div>The time off you requested for</div>
                <div>{start_date} to {end_date}</div>
                <div>has been {requests.approval.toLowerCase()}.</div>
              </div>
            </div> : null}
        </div>

      )
    })

    return (
      <div className='notification_container'>
        {notificationDisplayed}
      </div>
    )
  }
}
function mapStateToProp(state) {
  return {
    user: state.user,
    request: state.request
  }
}

export default connect(mapStateToProp, { getUserInfo, getNotifications })(Notification);

