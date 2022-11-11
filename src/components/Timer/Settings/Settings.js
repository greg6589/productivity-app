import React, { useContext } from "react";

import Button from "../../Button/Button";
import SettingsContext from "../../Context/SettingsContext";

import styles from "./Settings.module.css";

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
      <div className={styles.timer_settings}>
        <label className={styles.timer_settings_label} htmlFor="session">
          Session timer
        </label>
        <Button
          handleClick={timeSubtraction}
          className={styles.timer_settings_button}
          name="sessionTime"
          content={"-"}
        />
        <input
          className={styles.timer_settings_input}
          type="number"
          id={"session"}
          value={sessionTime}
          readOnly
        />
        <Button
          handleClick={timeAddition}
          className={styles.timer_settings_button}
          name="sessionTime"
          content={"+"}
        />
        <label htmlFor="breake" className={styles.timer_settings_label}>
          Breake timer
        </label>
        <Button
          handleClick={timeSubtraction}
          className={styles.timer_settings_button}
          name="breakeTime"
          content={"-"}
        />
        <input
          className={styles.timer_settings_input}
          type="number"
          id={"breake"}
          value={breakTime}
          readOnly
        />
        <Button
          handleClick={timeAddition}
          className={styles.timer_settings_button}
          name="breakeTime"
          content={"+"}
        />
        <Button
          handleClick={timeSetToLacal}
          className={styles.timer_settings_button_set}
          content={"Set"}
        />
      </div>
    </>
  );
};

export default Settings;
