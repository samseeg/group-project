import React, { Component } from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import EmpRequest from './../../Admin/EmpRequest/EmpRequest.js';
import axios from 'axios';


class Notification extends Component {
  constructor() {
    super();
    this.state = {
      requests: []
    }
  }
  componentDidMount() {
    axios.get('/api/admin/get_requests').then(response => {
        this.setState({
            requests: response.data
        })
    })
}
  render() {
    const notificationDisplayed = this.state.requests.map((requests, i) => {
      return (
        <div>
          <div>
          {requests.start_date}
          {requests.end_date}
          {requests.approval}
          </div>
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





export default Notification;

