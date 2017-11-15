import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BadgeExampleSimple from './../Notification/Notification'
import './NavBar.css';

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
                    <img src='https://i.imgur.com/bFsllTF.png' alt='' onClick={this.menuSlide} />
                    <Link className="active" to="/empmain">CLOCK IN / OUT</Link>
                    <Link className="active" to="/timecard">TIME CARD</Link>
                    <Link className="active" to="/vacarequests">TIME OFF REQUESTS</Link>
                    <Link className="active" to="/calendar">CALENDAR</Link>
                    <Link className="active" to="/">LOGOUT</Link>
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

export default NavBar;