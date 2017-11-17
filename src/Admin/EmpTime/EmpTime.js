import React, { Component } from 'react';
import './EmpTime.css';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
  import axios from 'axios';
import NavBar from '../../Employee/NavBar/NavBar.js';

class EmpTime extends Component {
    constructor() {
        super()
        this.state = {
          timecard: []
        }
      }
      componentDidMount() {
        axios.get('/api/employee/get_timecard').then(response => {
          this.setState({
            timecard: response.data
          })
          console.log(response.data)
        })
      }

    render() {
        const EmptimecardDisplayed = this.state.timecard.map((timecard, i) => {
          return (
           
              <TableRow>
                <TableRowColumn>{timecard.clock_in}</TableRowColumn>
                <TableRowColumn>{timecard.clock_out}</TableRowColumn>
                <TableRowColumn>{timecard.total_hours}</TableRowColumn>
              </TableRow>
          )
        })
        
        return (
          <div>
            <NavBar />
            <div className='timecard_container'>
              <div className='whitespace'></div>
              <Table>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                  <TableRow>
                    <TableHeaderColumn colSpan="3">TIMECARD</TableHeaderColumn>
                  </TableRow>
                  <TableRow>
                    <TableHeaderColumn>Clock In</TableHeaderColumn>
                    <TableHeaderColumn>Clock Out</TableHeaderColumn>
                    <TableHeaderColumn>Total Hours</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                  {EmptimecardDisplayed}
                </TableBody>
              </Table>
            </div>
          </div>
        )
      }
    }
export default EmpTime;