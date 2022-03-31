import React, { Component } from "react";

import Settings from "../components/Settings";
import "../styles/Timer.css";
class Timer extends Component {
  sessionTimeLocal;
  breakTimeLocal;
  state = { sessionTime: 25, breakTime: 5 };

  componentDidMount() {
    this.sessionTimeLocal = localStorage.getItem("sessionTime");
    this.breakTimeLocal = localStorage.getItem("breakTime");
    if (this.sessionTimeLocal) {
      this.setState({ sessionTime: this.sessionTimeLocal });
    } else {
      localStorage.setItem("sessionTime", `${this.state.sessionTime}`);
    }
    if (this.breakTimeLocal) {
      this.setState({ breakTime: this.breakTimeLocal });
    } else {
      localStorage.setItem("breakTime", `${this.state.breakTime}`);
    }
  }
  componentDidUpdate() {
    this.sessionTimeLocal = localStorage.setItem(
      "sessionTime",
      this.state.sessionTime
    );
    this.breakTimeLocal = localStorage.setItem(
      "breakTime",
      this.state.breakTime
    );
  }

  timeUpdate = (sessionTime, breakTime) => {
    this.setState({ sessionTime, breakTime });
  };

  render() {
    return (
      <>
        <Settings onTimeChage={this.timeUpdate} />
        <div className="timer">
          <div className="timer_display">{this.state.sessionTime}</div>
          <button className="timer_button start">Start</button>
          <button className="timer_button stop">Stop</button>
        </div>
      </>
    );
  }
}

export default Timer;
