import React, { Component } from 'react';
import './VacaRequests.css';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from 'material-ui/MenuItem';

class VacaRequests extends Component {
    constructor() {
        super()

        this.state = {
            value: 1
        }
    }


    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <div>
                <h1>Time Off Requests</h1>
                <form action="/action_page.php" method="get">
                    <p>Start Date</p>
                    <DatePicker hintText="Portrait Dialog" />
                    <p>Last Date</p>
                    <DatePicker hintText="Portrait Dialog" />

                    <p>REASON</p>
                    <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        <MenuItem value={1} primaryText="Vacation" />
                        <MenuItem value={2} primaryText="Personal Day" />
                        <MenuItem value={3} primaryText="Doctor's Appoiontment" />
                        <MenuItem value={4} primaryText="Extra Holiday Time" />
                        <MenuItem value={5} primaryText="Other" />
                    </DropDownMenu>
                    <br />
                    <button type="reset" value="Reset">RESET</button>
                    <button>SUBMIT</button>
                </form>
            </div>
        )
    }
}

export default VacaRequests;