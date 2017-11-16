import React, { Component } from 'react';
import './StopWatch.css';
import axios from 'axios';


const formattedSeconds = (sec) =>
    Math.floor(sec / 3600) +
    ':' +
    Math.floor("0" + sec / 60 % 60) +
    ':' +
    ('0' + sec % 60).slice(-2)

// const formattedSeconds = (sec) =>
//     Math.floor(sec / 60) +



// const formattedSeconds = (sec) =>
//  if (sec >= 60) {
//      sec = 0;

//  }


class StopWatch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            secondsElapsed: 0,
            laps: [],
            lastClearedIncrementer: null
        },
            this.incrementer = null;
    }


    handleStartClick() {
        this.incrementer = setInterval(() =>
            this.setState({
                secondsElapsed: this.state.secondsElapsed + 1
            }), 1000);
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


                {/* {(this.state.secondsElapsed === 0 ||
                    this.incrementer === this.state.lastClearedIncrementer
                    ? <Button className="start-btn" onClick={this.handleStartClick.bind(this)}>Clock In</Button>
                    : <Button className="stop-btn" onClick={this.handleStopClick.bind(this)}>Clock Out</Button>
                )}

                {(this.state.secondsElapsed !== 0 &&
                    this.incrementer === this.state.lastClearedIncrementer
                    ?
                    (this.state.secondsElapsed !== 0 ||
                        this.incrementer !== this.state.lastClearedIncrementer
                        ? <Button onClick={this.handleStartClick.bind(this)}>Lunch End</Button>
                        : null
                        )
                        :
                (this.state.secondsElapsed !== 0 ||
                    this.incrementer !== this.state.lastClearedIncrementer
                    ? <Button onClick={this.handleStopClick.bind(this)}>Lunch Start</Button>
                    : null
                )
                
                

                )} */}

                {(this.state.secondsElapsed === 0 ||
                    this.incrementer === this.state.lastClearedIncrementer
                    ? <Button className="start-btn" onClick={this.handleStartClick.bind(this)}>CLOCK IN</Button>
                    : <Button className="stop-btn clockout" onClick={this.handleStopClick.bind(this)}>CLOCK OUT</Button>
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
            </div>
        )
    }


}

const Button = (props) =>
    <button type="button" {...props} className={'btn ' + props.className} />


export default StopWatch;