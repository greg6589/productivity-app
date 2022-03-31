import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../styles/Settings.css";

class Settings extends Component {
  state = {
    settingsIsActive: false,
    sessionTime: 25,
    breakTime: 5,
  };

  componentDidMount() {
    const sessionTimeLocal = localStorage.getItem("sessionTime");
    const breakTimeLocal = localStorage.getItem("breakTime");
    if (sessionTimeLocal && breakTimeLocal) {
      this.setState({
        sessionTime: sessionTimeLocal,
        breakTime: breakTimeLocal,
      });
    }
  }
  handleShowHideSettings = () => {
    this.setState((prevState) => ({
      settingsIsActive: !prevState.settingsIsActive,
    }));
  };

  timeSubtraction = (e) => {
    if (e.target.name === "sessionTime") {
      if (this.state.sessionTime > 0) {
        this.setState((prevState) => ({
          sessionTime: --prevState.sessionTime,
        }));
      }
    }
    if (e.target.name === "breakeTime") {
      if (this.state.breakTime > 0) {
        this.setState((prevState) => ({
          breakTime: --prevState.breakTime,
        }));
      }
    }
  };
  timeAddition = (e) => {
    if (e.target.name === "sessionTime") {
      this.setState((prevState) => ({
        sessionTime: ++prevState.sessionTime,
      }));
    }
    if (e.target.name === "breakeTime") {
      this.setState((prevState) => ({
        breakTime: ++prevState.breakTime,
      }));
    }
  };

  timeSet = () => {
    const sessionTime = this.state.sessionTime;
    const breakeTime = this.state.breakTime;
    this.props.onTimeChage(sessionTime, breakeTime);
    this.setState({
      settingsIsActive: !this.state.settingsIsActive,
    });
  };
  render() {
    return (
      <>
        <div
          style={this.state.settingsIsActive ? { left: "0" } : null}
          className="timer-settings"
        >
          <label className="timer-settings_label" htmlFor="session">
            Session timer
          </label>
          <button
            onClick={this.timeSubtraction}
            className="timer-settings_button"
            name="sessionTime"
          >
            -
          </button>
          <input
            className="timer-settings-input"
            type="number"
            id={"session"}
            value={this.state.sessionTime}
            readOnly
          />
          <button
            onClick={this.timeAddition}
            className="timer-settings_button"
            name="sessionTime"
          >
            +
          </button>
          <label htmlFor="breake" className="timer-settings_label">
            Breake timer
          </label>
          <button
            onClick={this.timeSubtraction}
            className="timer-settings_button"
            name="breakeTime"
          >
            -
          </button>
          <input
            className="timer-settings-input"
            type="number"
            id={"breake"}
            value={this.state.breakTime}
            readOnly
          />
          <button
            onClick={this.timeAddition}
            className="timer-settings_button"
            name="breakeTime"
          >
            +
          </button>
          <button onClick={this.timeSet} className="timer-settings_button-set">
            Set
          </button>
        </div>
        <button
          onClick={this.handleShowHideSettings}
          className="timer-settings-show"
        >
          {this.state.settingsIsActive ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faGear} />
          )}
        </button>
      </>
    );
  }
}

export default Settings;
