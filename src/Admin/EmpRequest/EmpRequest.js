import React, { Component } from 'react';
import './EmpRequest.css';
import NavBar from '../../Employee/NavBar/NavBar.js';import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
import axios from 'axios';


class EmpRequests extends Component {
    constructor() {
        super()
        this.state ={
            requests:[]
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
                <TableRow>
                  <TableRowColumn>{requests.start_date}</TableRowColumn>
                  <TableRowColumn>{requests.end_date}</TableRowColumn>
                  <TableRowColumn>{requests.reason}</TableRowColumn>
                  <TableRowColumn>{requests.approval}</TableRowColumn>
                </TableRow>
            )
          })
        return (
            <div>
                <NavBar />
                <div>
                    <div>
                        <Table>
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
                        </Table>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmpRequests;