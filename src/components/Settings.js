import React, { useContext } from "react";

import "../styles/Settings.css";
import SettingsContext from "./SettingsContext";

const Settings = () => {
  const settingsIfo = useContext(SettingsContext);
  const sessionTime = settingsIfo.sessionTime;
  const breakTime = settingsIfo.breakTime;
  const setSessionTime = settingsIfo.setSessionTime;
  const setBreakTime = settingsIfo.setBreakTime;

  const timeSubtraction = (e) => {
    if (e.target.name === "sessionTime") {
      if (sessionTime > 0) {
        setSessionTime((sessionTime) => sessionTime - 1);
      }
    }
    if (e.target.name === "breakeTime") {
      if (breakTime > 0) {
        setBreakTime((breakTime) => breakTime - 1);
      }
    }
  };
  const timeAddition = (e) => {
    if (e.target.name === "sessionTime") {
      setSessionTime((sessionTime) => sessionTime + 1);
    }
    if (e.target.name === "breakeTime") {
      setBreakTime((breakTime) => breakTime + 1);
    }
  };

  const timeSetToLacal = () => {
    settingsIfo.setSettingsIsActive(false);
    localStorage.setItem("sessionTime", sessionTime);
    localStorage.setItem("breakTime", breakTime);
  };

  return (
    <>
      <div className="timer-settings">
        <label className="timer-settings_label" htmlFor="session">
          Session timer
        </label>
        <button
          onClick={timeSubtraction}
          className="timer-settings_button"
          name="sessionTime"
        >
          -
        </button>
        <input
          className="timer-settings-input"
          type="number"
          id={"session"}
          value={sessionTime}
          readOnly
        />
        <button
          onClick={timeAddition}
          className="timer-settings_button"
          name="sessionTime"
        >
          +
        </button>
        <label htmlFor="breake" className="timer-settings_label">
          Breake timer
        </label>
        <button
          onClick={timeSubtraction}
          className="timer-settings_button"
          name="breakeTime"
        >
          -
        </button>
        <input
          className="timer-settings-input"
          type="number"
          id={"breake"}
          value={breakTime}
          readOnly
        />
        <button
          onClick={timeAddition}
          className="timer-settings_button"
          name="breakeTime"
        >
          +
        </button>
        <button onClick={timeSetToLacal} className="timer-settings_button-set">
          Set
        </button>
      </div>
    </>
  );
};

export default Settings;
