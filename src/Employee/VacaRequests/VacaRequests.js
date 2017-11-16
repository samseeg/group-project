import React, { Component } from 'react';
import './VacaRequests.css';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from 'material-ui/MenuItem';
import NavBar from './../NavBar/NavBar'

class VacaRequests extends Component {
    constructor() {
        super()

        this.state = {
            value: 0
        }
    }


    handleChange = (event, index, value) => this.setState({ value });

    render() {
        return (
            <div>
                <NavBar />
                <div className='VacaContainer'>
                    <div className='title'>Time Off Requests</div>
                    <form>
                        <DatePicker firstDayOfWeek={0} className='datepicker' hintText="Start Date" />
                        <DatePicker firstDayOfWeek={0} hintText="End Date" />


                        <DropDownMenu value={this.state.value} onChange={this.handleChange} className='dropdown'>
                            <MenuItem value={0} primaryText="Reason" />
                            <MenuItem value={1} primaryText="Vacation" />
                            <MenuItem value={2} primaryText="Personal Day" />
                            <MenuItem value={3} primaryText="Doctor's Appoiontment" />
                            <MenuItem value={4} primaryText="Extra Holiday Time" />
                            <MenuItem value={5} primaryText="Other" />
                        </DropDownMenu>
                        {this.state.value === 5 ? <textarea rows='10' cols='50'></textarea> : null}
                        <div className='button_friends'>
                            <button className='btn reset_vaca'>RESET</button>
                            <button className='btn submit_vaca'>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default VacaRequests;