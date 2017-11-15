import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BadgeExampleSimple from './../Notification/Notification'
import './NavBar.css';

class NavBar extends Component {

    constructor(){
        super();
        
        this.state = {
            menuOpen: false
        }

        this.slide = this.slide.bind(this);
    }

    slide() {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    render() {
        return (
            <div className='NavBar'>
                <div className='notification'>
                <img src='https://i.imgur.com/Kky6XPi.png' alt='' />
                </div>
                <div className='hamburger' onClick={this.slide}>
                    <img src='https://i.imgur.com/R7uPgPM.png' alt='' />
                </div>
                <div className={this.state.menuOpen ? "slide open" : "slide"}>                    
                        <Link className="active" to="/empmain">CLOCK IN/OUT</Link>
                        <Link className="active" to="/timecard">TIME CARD</Link>
                        <Link className="active" to="/vacarequests">TIME OFF REQUESTS</Link>
                        <Link className="active" to="/calendar">CALENDAR</Link>
                        <Link className="active" to="/">LOGOUT</Link>                    
                </div>
            </div>
        )
    }
}

export default NavBar;