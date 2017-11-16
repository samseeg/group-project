import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BadgeExampleSimple from './../Notification/Notification'
import './NavBar.css';
import {connect} from 'react-redux';
import { getUserInfo } from './../../ducks/reducer.js';


class NavBar extends Component {

    constructor() {
        super();

        this.state = {
            menuOpen: false,
            notificationsOpen: false
        }

        this.menuSlide = this.menuSlide.bind(this);
        this.notificationsSlide = this.notificationsSlide.bind(this);
    }

    componentDidMount() {
        this.props.getUserInfo();
    }

    menuSlide() {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    notificationsSlide() {
        this.setState({
            notificationsOpen: !this.state.notificationsOpen
        })
    }

    render() {
        return (
            <div className='NavBar'>
                <div className='notification' onClick={this.notificationsSlide}>
                    <img src='https://i.imgur.com/Kky6XPi.png' alt='' />
                </div>

                <div className='hamburger' onClick={this.menuSlide}>
                    <img src='https://i.imgur.com/R7uPgPM.png' alt='' />
                </div>
                <div className={this.state.menuOpen ? "menuOpen" : "menuHide"}>
                    
                    {!this.props.user.is_admin ?
                    <div className={this.state.menuOpen ? "menuOpen" : "menuHide"}>
                    <img src='https://i.imgur.com/bFsllTF.png' alt='' onClick={this.menuSlide} />
                    <Link className="active" to="/empmain">CLOCK IN / OUT</Link>
                    <Link className="active" to="/timecard">TIME CARD</Link>
                    <Link className="active" to="/vacarequests">TIME OFF REQUESTS</Link>
                    <Link className="active" to="/calendar">CALENDAR</Link>
                    <a href='/auth/logout' className="active">LOG OUT</a>
                    </div>
                    :
                    <div className={this.state.menuOpen ? "menuOpen" : "menuHide"}>
                    <img src='https://i.imgur.com/bFsllTF.png' alt='' onClick={this.menuSlide} />
                    <Link className='active' to="/emprequest">REQUESTS</Link>
                    <Link className='active' to="/emptime">TIME</Link>
                    <a href='/auth/logout' className="active">LOG OUT</a>
                    </div>
                    }

                </div>
                <div className={this.state.notificationsOpen ? "notificationsOpen" : "notificationsHide"}>
                    <img src='https://i.imgur.com/bFsllTF.png' alt='' onClick={this.notificationsSlide} />
                    <div className='mapped_notifications'>
                        {/* mapped notifications go here */}
                        mapped notifications go here
                    </div>
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

export default connect(mapStateToProps, {getUserInfo})(NavBar);