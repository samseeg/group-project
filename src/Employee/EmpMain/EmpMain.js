import React, { Component } from 'react';
import './EmpMain.css';
import Clock from 'react-live-clock';
import { connect } from 'react-redux';
import { getUserInfo } from './../../ducks/reducer.js';
import NavBar from './../NavBar/NavBar';
import StopWatch from './StopWatch/StopWatch.js'

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
                <NavBar />
                <div className='EmpMain'>
                    {user.id ? <img className="avatar" src={user.img} alt="there" /> : null}
                    <div className='name'>{user.id ? user.user_name : null}</div>
                    <Clock
                        ticking={true}
                        format={`dddd, MMMM Do, YYYY`}
                    />
                    <Clock
                        ticking={true}
                        format={`h:mm:ss A`}
                    />
                    {/* <button className='clockin'>CLOCK IN</button> */}
                    {!this.props.user.is_admin ?
                    <StopWatch /> :
                    null}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(EmpMain);
