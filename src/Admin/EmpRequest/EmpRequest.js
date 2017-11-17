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
            value:0
            
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
            return (
                // <TableRow>
                //   <TableRowColumn>{requests.start_date}</TableRowColumn>
                //   <TableRowColumn>{requests.end_date}</TableRowColumn>
                //   <TableRowColumn>{requests.reason}</TableRowColumn>
                //   <TableRowColumn>{requests.approval}</TableRowColumn>
                // </TableRow>

                <div>
                    <div> {requests.start_date}</div>
                    <div> {requests.end_date}</div>
                    <div> {requests.reason}</div>
                    <div> {requests.approval}</div>
                    <DropDownMenu value={this.state.value}>
                        <MenuItem value={0} primaryText="Select" />
                        <MenuItem value={"Approved"} primaryText="Approved" />
                        <MenuItem value={"Denied"} primaryText="Denied" />
                    </DropDownMenu>

                    <button>SUBMIT</button>
                </div>

            )
        })
        return (
            <div>
                <NavBar />
                <div>
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
                        <div>Employee Requests</div>
                        {requestsDisplayed}
                    </div>
                </div>
            </div>
        )
    }
}

export default EmpRequests;