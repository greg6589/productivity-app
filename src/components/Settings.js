import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../styles/Settings.css";

class Settings extends Component {
  state = { settingsIsActive: false };

  handleShowHideSettings = () => {
    this.setState((prevState) => ({
      settingsIsActive: !prevState.settingsIsActive,
    }));
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
          <button className="timer-settings_button">-</button>
          <input
            className="timer-settings-input"
            type="number"
            id={"session"}
          />
          <button className="timer-settings_button">+</button>
          <label htmlFor="breake" className="timer-settings_label">
            Breake timer
          </label>
          <button className="timer-settings_button">-</button>
          <input className="timer-settings-input" type="number" id={"breake"} />
          <button className="timer-settings_button">+</button>
          <button className="timer-settings_button-set">Set</button>
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
