import React, { Component } from 'react';
import './EmpRequest.css';
import NavBar from '../../Employee/NavBar/NavBar.js'; import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';


class EmpRequests extends Component {
    constructor() {
        super()
        this.state = {
            requests: [],
            value: 0

        }
    }
    componentDidMount() {
        axios.get('/api/admin/get_requests').then(response => {
            this.setState({
                requests: response.data
            })
            console.log(response.data)
        })
    }


    render() {
        const requestsDisplayed = this.state.requests.map((requests, i) => {
            console.log('REQUESTS', requests)
            const start_date = requests.start_date.replace(/T.*/, '')
            const end_date = requests.end_date ? requests.end_date.replace(/T.*/, '') : 'N/A'
            return (
                // <TableRow>
                //   <TableRowColumn>{requests.start_date}</TableRowColumn>
                //   <TableRowColumn>{requests.end_date}</TableRowColumn>
                //   <TableRowColumn>{requests.reason}</TableRowColumn>
                //   <TableRowColumn>{requests.approval}</TableRowColumn>
                // </TableRow>
                <div key={i} className='requests'>
                    
                        <div>
                            <div className='requests_img'><img src={requests.img} /></div>
                            <div> {requests.user_name}</div>
                        </div>
                        <div className='dates'>
                            <div> {start_date} to <br></br>{end_date}</div>
                            <div> {requests.reason}</div>
                        </div>
                        <div className='approval'>
                            <DropDownMenu value={this.state.value}>
                                <MenuItem value={0} primaryText="Select" />
                                <MenuItem value={"Approved"} primaryText="Approved" />
                                <MenuItem value={"Denied"} primaryText="Denied" />
                            </DropDownMenu>

                            <button className='submit_btn'>SUBMIT</button>
                        </div>
                    
                </div>
            )
        })
        return (
            <div className='background'>
                <NavBar />
                <div>
                    {/* <Table>
                            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                                <TableRow>
                                    <TableHeaderColumn colSpan="4">Employee Requests</TableHeaderColumn>
                                </TableRow>
                                <TableRow>
                                    <TableHeaderColumn>Start Date</TableHeaderColumn>
                                    <TableHeaderColumn>End Date</TableHeaderColumn>
                                    <TableHeaderColumn>Reason</TableHeaderColumn>
                                    <TableHeaderColumn>Approval</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>
                            {requestsDisplayed}
                            </TableBody>
                        </Table> */}
                </div>
                <div className='requests_container'>
                    <div className='requests_title'>Employee Requests</div>
                    {requestsDisplayed}
                </div>
            </div>
        )
    }
}

export default EmpRequests;