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
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import NavBar from '../../Employee/NavBar/NavBar.js';
import fns from './EmpTime.functions.js'

class EmpTime extends Component {
    constructor() {
        super()
        this.state = {
            timecard: [],
            value: 0,
            name: "",
        }
        this.selectName = this.selectName.bind(this)
        this.valueName = this.valueName.bind(this)
    }
    selectName(username) {

        fns.getEmpTimeCard(`/api/admin/get_emp_timecard/${username}`).then(response => {
            console.log("heyzz")
            this.setState({
                timecard: response
            })
            
        })
    }
    valueName() {
        this.setState({
            name: this.state.name
        })
    }
    handleChange = (event, index, value) => this.setState({ value });
    render() {
        const EmptimecardDisplayed = this.state.timecard.map((timecard, i) => {
            return (
                <TableRow key={i}>
                    <TableRowColumn>{timecard.clock_in}</TableRowColumn>
                    <TableRowColumn>{timecard.clock_out}</TableRowColumn>
                    <TableRowColumn>{timecard.total_hours}</TableRowColumn>
                </TableRow>
            )
        })

        return (
            <div>
                <NavBar />
                <div className='timecard_background'>
                    <div className='whitespace'></div>
                    <div className='timecard_container'>
                        <Table>
                            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                                <TableRow>
                                    <TableHeaderColumn colSpan="2">TIMECARD</TableHeaderColumn>
                                    <DropDownMenu className='move' value={this.state.value} onChange={this.handleChange}>
                                        <MenuItem value={0} primaryText="Select" />
                                        <MenuItem onClick={() => { this.selectName("Megan Miller") }} value={"Megan Miller"} primaryText="Megan Miller" />
                                        <MenuItem onClick={() => { this.selectName("Eunbin Kang") }} value={"Eunbin Kang"} primaryText="Eunbin Kang" />
                                        <MenuItem onClick={() => { this.selectName("Sarah Jorgenson") }} value={"Sarah Jorgenson"} primaryText="Sarah Jorgenson" />
                                        <MenuItem onClick={() => { this.selectName("Sam Seegmiller") }} value={"Sam Seegmiller"} primaryText="Samuel Seegmiller" />
                                    </DropDownMenu>
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
            </div>
        )
    }
}
export default EmpTime;