import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <Link className="active" to="/empmain">CLOCK IN/OUT</Link>
                    <Link className="active" to="/timecard">TIME CARD</Link>
                    <Link className="active" to="/vacarequests">TIME OFF REQUESTS</Link>
                    <Link className="active" to="/calendar">CALENDAR</Link>
                    <Link className="active" to="/">LOGOUT</Link>
                </ul>
            </div>
        )
    }
}

export default NavBar;