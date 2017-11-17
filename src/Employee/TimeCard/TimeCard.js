import React, { Component } from 'react';
import './TimeCard.css';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import axios from 'axios';

class TimeCard extends Component {
    constructor() {
        super()
        this.state ={
            timecard:[]
        }
    }
    componentDidMount (){
        axios.get('/api/employee/get_timecard').then(response=>{
          this.setState({
            timecard: response.data
          })
          console.log(response.data)
        })   
      }

render() {
    const timecardDisplayed=this.state.timecard.map((timecard, i) =>{ 
        return ( 
            <TableBody>
            <TableRow>
              <TableRowColumn>{timecard.clock_in}</TableRowColumn>
              <TableRowColumn>{timecard.clock_out}</TableRowColumn>
              <TableRowColumn>{timecard.total_hours}</TableRowColumn>
            </TableRow>
          </TableBody>
        )
      })
    return (
            <div>
               <Table>
               <TableHeader>
                   <TableRow>
                   <TableHeaderColumn  colSpan="3">TIMECARD</TableHeaderColumn>
                   </TableRow>
                 <TableRow>
                   <TableHeaderColumn>Clock In</TableHeaderColumn>
                   <TableHeaderColumn>Clock Out</TableHeaderColumn>
                   <TableHeaderColumn>Total Hours</TableHeaderColumn>
                 </TableRow>
               </TableHeader>
               {timecardDisplayed}
             </Table>
            </div>
        )
    }
}

export default TimeCard;