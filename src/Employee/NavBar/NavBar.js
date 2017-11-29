import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { connect } from 'react-redux';
import { getUserInfo, getNotifications } from './../../ducks/reducer.js';
import x_icon from './../../assets/x_icon_tiny.svg';
import notification from './../../assets/notification_tiny.svg';
import hamburger from './../../assets/hamburger_tiny.svg';
import Notification from './../Notification/Notification.js';


class NavBar extends Component {

    constructor() {
        super();

        this.state = {
            menuOpen: false,
            notificationsOpen: false,
            requests: []
        }

        this.menuSlide = this.menuSlide.bind(this);
        this.notificationsSlide = this.notificationsSlide.bind(this);
    }

    componentWillReceiveProps() {
        if (this.props.user.is_admin === null && !this.props.request.length) {
            console.log('props received')
            this.props.getNotifications(this.props.user.id);
        }
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
                    {this.props.request.length ? <div className='circle'>♫</div> : null}
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
                        <Notification />

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        request: state.request
    }
}

export default connect(mapStateToProps, { getUserInfo, getNotifications })(NavBar);