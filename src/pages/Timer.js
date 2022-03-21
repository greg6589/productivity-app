import React, { Component } from "react";

import Settings from "../components/Settings";
import "../styles/Timer.css";
class Timer extends Component {
  state = {};

  render() {
    return (
      <>
        <Settings settingsIsActive={this.settingsIsActive} />
        <div className="timer">
          <div className="timer_display">Time</div>
          <button className="timer_button start">Start</button>
          <button className="timer_button stop">Stop</button>
        </div>
      </>
    );
  }
}

export default Timer;
