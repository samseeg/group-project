import React, { Component } from 'react';
import './EmpMain.css';
import Clock from 'react-live-clock';
import { connect } from 'react-redux';
import { getUserInfo } from './../../ducks/reducer.js';
import axios from 'axios';

class EmpMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {}
        }
    }

    componentDidMount() {
        this.props.getUserInfo();
    }


    render() {
        const user = this.props.user;
        return (
            <div>
                <h1>Hi from EmpMain</h1>
                { user.id ? <img className="avatar" src={user.img} /> : null }
                {user.id ? user.user_name : null}
                <Clock
                    ticking={true}
                    format={'dddd, MMMM Do, YYYY, h:mm:ss A'}
                />
                <button>Clock In</button>
                <h2>Timer goes here</h2>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("state from private", state)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(EmpMain);