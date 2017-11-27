import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BadgeExampleSimple from './../Notification/Notification'
import './NavBar.css';
import {connect} from 'react-redux';
import { getUserInfo } from './../../ducks/reducer.js';
import x_icon from './../../assets/x_icon_tiny.svg';
import notification from './../../assets/notification_tiny.svg';
import hamburger from './../../assets/hamburger_tiny.svg';


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
                    <img src={notification} alt='' />
                </div>

                <div className='hamburger' onClick={this.menuSlide}>
                    <img src={hamburger} alt='' />
                </div>
                    
                    {!this.props.user.is_admin ?
                    <div className={this.state.menuOpen ? "menuOpen" : "menuHide"}>
                    <img src={x_icon} alt='' onClick={this.menuSlide} />
                    <Link className="active" to="/empmain">CLOCK IN / OUT</Link>
                    <Link className="active" to="/timecard">TIME CARD</Link>
                    <Link className="active" to="/vacarequests">TIME OFF REQUESTS</Link>
                    <Link className="active" to="/calendar">CALENDAR</Link>
                    <a href='/auth/logout' className="active">LOG OUT</a>
                    </div>
                    :
                    <div className={this.state.menuOpen ? "menuOpen" : "menuHide"}>
                    <img src={x_icon} alt='' onClick={this.menuSlide} />
                    <Link className="active" to="/empmain">DASHBOARD</Link>
                    <Link className='active' to="/emprequest">REQUESTS</Link>
                    <Link className='active' to="/emptime">TIME</Link>
                    <a href='/auth/logout' className="active">LOG OUT</a>
                    </div>
                    }

                <div className={this.state.notificationsOpen ? "notificationsOpen" : "notificationsHide"}>
                    <img src={x_icon} alt='' onClick={this.notificationsSlide} />
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