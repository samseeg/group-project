import React, { Component } from 'react';
import axios from 'axios';


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
  componentDidMount() {
    axios.get('/api/admin/get_requests').then(response => {
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
      const approval = requests.approval ? requests.approval.replace(/T.*/, '') : 'N/A'
      return (
        <div key={i}> {requests.user_name ===  "Sarah Jorgenson" ?  
        <div key={i}>
         { approval === "Approved" || approval === "Denied" ? <div>
          {start_date}
          {end_date}
          {approval}
          </div> : null  }
        </div> 
        : null}
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

