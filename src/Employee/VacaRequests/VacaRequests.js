import React, { Component } from 'react';
import './VacaRequests.css';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from 'material-ui/MenuItem';
import NavBar from './../NavBar/NavBar';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserInfo } from './../../ducks/reducer.js'
import moment from 'moment'

class VacaRequests extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: 0,
            start_date: null,
            end_date: null,
            reason: "",
            other: ""
        }
        this.reloadPage = this.reloadPage.bind(this);
        this.handleStartDate = this.handleStartDate.bind(this);
        this.handleEndDate = this.handleEndDate.bind(this);
    }
    handleStartDate(event, start_date) {
        this.setState({
            start_date: start_date
        })

    }
    handleEndDate(event, end_date) {
        this.setState({
            end_date: end_date
        })

    }
    componentDidMount() {
        this.props.getUserInfo()
    }

    reloadPage() {
        window.location.reload();
    }

    submitForm = () => {

        const body = {
            user_id: this.props.user.id,
            start_date: this.state.start_date,
            end_date: this.state.end_date,
            reason: this.state.value,
        }
        axios.post('/api/employee/submit_requests', body).then(response => {
            console.log('requests submitted!')
        })
    }

    handleChange = (event, index, value) => this.setState({ value });

    render() {
        return (
            <div>
                <NavBar />
                <div className='VacaContainer'>

                    <div className='title'>Time Off Requests</div>
                    <form>

                        <DatePicker firstDayOfWeek={0} onChange={this.handleStartDate} value={this.state.start_date}


                            className='datepicker' hintText="Start Date"
                        />
                        <DatePicker firstDayOfWeek={0} value={this.state.end_date} onChange={this.handleEndDate}
                            hintText="End Date" />

                        <DropDownMenu value={this.state.value} onChange={this.handleChange} className='dropdown'>
                            <MenuItem value={0} primaryText="Reason" />
                            <MenuItem value={"vacation"} primaryText="Vacation" />
                            <MenuItem value={"Personal Day"} primaryText="Personal Day" />
                            <MenuItem value={"Doctor's Appoiontment"} primaryText="Doctor's Appoiontment" />
                            <MenuItem value={"Extra Holiday Time"} primaryText="Extra Holiday Time" />
                            <MenuItem value={"Other"} primaryText="Other" />
                        </DropDownMenu>
                        {this.state.value === "Other" ? <textarea onChange={(e) => {
                            this.setState({
                                other: e.target.value
                            })
                        }} rows='10' cols='50'></textarea> : null}
                        <div className='button_friends'>
                            {/* <input type="button" value="RESET" onClick="resetform()"  /> */}
                            <button className='btn reset_vaca' type="reset" onClick={this.reloadPage}>RESET</button>
                            <button className='btn submit_vaca' type="submit" onClick={this.submitForm}>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
function mapStateToProp(state) {
    return {
        user: state.user
    }
}
export default connect(mapStateToProp, { getUserInfo })(VacaRequests);