import React, { Component } from 'react';
import './StopWatch.css';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUserInfo} from './../../../ducks/reducer.js'



const formattedSeconds = (sec) =>
    Math.floor(sec / 3600) +
    ':' +
    Math.floor("0" + sec / 60 % 60) +
    ':' +
    ('0' + sec % 60).slice(-2)

function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);

    var hDisplay = h > 0 ? h + ':' : "";
    var mDisplay = m > 0 ? (m < 10 ? '0' + m : m) : "";
    return hDisplay + mDisplay; 
}


class StopWatch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            secondsElapsed: 0,
            laps: [],
            lastClearedIncrementer: null,
            this:"",
            clockoutid:""
            
        }
            this.incrementer = null;
            this.handleStartClick = this.handleStartClick.bind(this)
            this.submitClockin = this.submitClockin.bind(this)
            this.addClockOut =this.addClockOut.bind(this)
    }
    componentDidMount(){
        this.props.getUserInfo()
    }
    submitClockin () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; 
        var HH = today.getHours(); 
        var MM = today.getMinutes(); 
        if(dd<10) {
            dd = '0'+dd
        } 
        
        if(mm<10) {
            mm = '0'+mm
        }

        if(MM<10) {
            MM = '0'+MM
        }
       
        today = mm + '/' + dd + " " + HH + ':' + MM
        const body = {
          user_id: this.props.user.id,
          clock_in: today,
          
        }
        axios.post('/api/employee/submit_clockin', body).then(response => {
            this.setState({
                clockoutid:response.data[0].id
            })
          })
      }

    addClockOut(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; 
        var HH = today.getHours(); 
        var MM = today.getMinutes(); 
        if(dd<10) {
            dd = '0'+dd
        } 
        
        if(mm<10) {
            mm = '0'+mm
        } 
       
        today = mm + '/' + dd + " " + HH + ':' + MM
        const body ={
            clock_out: today,
            total_hours: secondsToHms(this.state.secondsElapsed),
            clockoutid: this.state.clockoutid
        }
        axios.put('/api/employee/add_clockout', body).then(response => {
            console.log('clock out submitted!')
          })
    }

    handleStartClick() {
        this.incrementer = setInterval(() =>
            this.setState({
                secondsElapsed: this.state.secondsElapsed + 1
            }), 1);
    }

    handleStopClick() {
        clearInterval(this.incrementer);
        this.setState({
            lastClearedIncrementer: this.incrementer
        })
    }

    handleResetClick() {
        clearInterval(this.incrementer);
        this.setState({
            secondsElapsed: 0,
            laps: []
        });
    }

    handleLapClick() {
        this.setState({
            laps: this.state.laps.concat([this.state.secondsElapsed])
        })
    }



    render() {        
        return (
            <div className='stopwatch'>
                {(this.state.secondsElapsed === 0 ||
                    this.incrementer === this.state.lastClearedIncrementer
                    ? <Button className="start-btn" onClick={()=>{this.handleStartClick(); this.submitClockin()}}>CLOCK IN</Button>
                    : <Button className="stop-btn clockout" onClick={()=>{this.handleStopClick(); this.addClockOut()}}>CLOCK OUT</Button>
                )}

                <h1 className="stopwatch-timer">{formattedSeconds(this.state.secondsElapsed)}</h1>
                <ul>
                    {this.state.laps.map((lap, i) =>
                        <li className="stopwatch-lap"><strong>{i + 1}</strong>/ {formattedSeconds(lap)}</li>)
                    }
                </ul>
                {(this.state.secondsElapsed !== 0 &&
                    this.incrementer === this.state.lastClearedIncrementer
                    ? <Button className="reset" onClick={this.handleResetClick.bind(this)}>RESET</Button>
                    : null
                )}
                      <div>                    
                    
                    
                    <div>{this.state.today}</div>
                </div>

            </div>
        )
    }


}
function mapStateToProp(state) {
    return {
        user: state.user
    }
}
const Button = (props) =>
    <button type="button" {...props} className={'btn ' + props.className} />


export default connect(mapStateToProp , {getUserInfo})(StopWatch);