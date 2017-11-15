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
            <div className='EmpMain'>
                { user.id ? <img className="avatar" src={user.img} /> : null }
                <div className='name'>{user.id ? user.user_name : null}</div>
                <Clock
                    ticking={true}
                    format={'dddd, MMMM Do, YYYY h:mm:ss A'}
                />
                <button className='clockin'>CLOCK IN</button>
                <div className='timer'>00:00:00</div>
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
