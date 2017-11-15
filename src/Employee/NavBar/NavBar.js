import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className='NavBar'>
                <div>
                    <img src='https://i.imgur.com/D6FrXyC.png' alt='' />
                </div>
                <div>
                    <img src='https://i.imgur.com/e65SwpT.png' alt='' />
                </div>
                <div className='menu'>
                    <ul>
                        <Link className="active" to="/empmain">CLOCK IN/OUT</Link>
                        <Link className="active" to="/timecard">TIME CARD</Link>
                        <Link className="active" to="/vacarequests">TIME OFF REQUESTS</Link>
                        <Link className="active" to="/calendar">CALENDAR</Link>
                        <Link className="active" to="/">LOGOUT</Link>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavBar;