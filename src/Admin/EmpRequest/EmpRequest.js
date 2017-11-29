import React, { Component } from 'react';
import './EmpRequest.css';
import NavBar from '../../Employee/NavBar/NavBar.js'; 
import axios from 'axios';
import { connect } from 'react-redux';
import { getAdminRequests, removeAdminRequests } from './../../ducks/reducer.js';


class EmpRequests extends Component {
    constructor() {
        super()
        this.state = {
            requests: [],
            value: 0,
            approval:"Select",
            // select: false,
            requestid:0
        }
        this.approveSubmit = this.approveSubmit.bind(this);    
        this.handleApproval = this.handleApproval.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentDidMount() {
        this.props.getAdminRequests();
    }

    approveSubmit(requestid) {
        const body = {
            approval: this.state.approval,
            requestid
        }
        // console.log(body)
        axios.put('/api/admin/approval', body).then(response => {
            // console.log("hi")
            
        })
        this.setState({approval:""})        
    } 

    handleApproval(e) {
        this.setState({
            approval: e.target.value
        })
    }
    
    reset() {
        this.setState({
            approval: "Select"
        })
        var dropDown = document.getElementById("approval");
        dropDown.selectedIndex = "Select";
    }


 

    render() {
        const requestsDisplayed = this.props.adminRequest.map((requests, i) => {
            const start_date = requests.start_date.replace(/T.*/, '')
            const end_date = requests.end_date ? requests.end_date.replace(/T.*/, '') : 'N/A'
            return (           
                <div key={i} className='purple_box' >
                    <div className='requests'>

                        <div className='requests_block'>
                            <div className='requests_img'><img src={requests.img} alt="hello"/></div>
                            <div className='requests_name'> {requests.user_name}</div>
                            <div className='dates'>
                                <div> {start_date} to <br></br>{end_date}</div>
                                <div className='requests_reason'> {requests.reason}</div>
                            </div>
                        </div>

                        <div className='approval'>
                            <select type="reset" id="approval" onChange={this.handleApproval}>
                                <option value="Select">Select</option>
                                <option value="Approved">Approved</option>
                                <option value="Denied">Denied</option>
                            </select>

                            <button className='submit_btn' onClick={()=>{this.approveSubmit(requests.id); this.props.removeAdminRequests(i); this.reset()}}>SUBMIT</button>
                        </div>

                    </div>
                   
               
                </div>
            )
        })
        return (
            <div className='background'>
                <NavBar />
                <div className='requests_container'>
                    <div className='requests_title'>Employee Requests</div>
                    {requestsDisplayed}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log("state from private", state)
    return {
        user: state.user,
        adminRequest: state.adminRequest
    }
}

export default connect(mapStateToProps, { getAdminRequests, removeAdminRequests })(EmpRequests);