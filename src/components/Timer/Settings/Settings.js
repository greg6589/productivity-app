import React from "react";

import Button from "../../Button/Button";
import Input from "../../Input/Input";

import styles from "./Settings.module.css";

const Settings = (props) => {
  const {
    sessionTime,
    breakTime,
    setSessionTime,
    setBreakTime,
    setIsSettingsActive,
  } = props.value;

  const timeSetToLacal = () => {
    setIsSettingsActive(false);
    localStorage.setItem("sessionTime", sessionTime);
    localStorage.setItem("breakTime", breakTime);
  };

  const sessionButtonDisable = sessionTime === 0 ? styles.buttonDisable : "";
  const breakButtonDisable = breakTime === 0 ? styles.buttonDisable : "";

  const sessionTimeSettings = (time) => {
    if (sessionTime >= 0) {
      setSessionTime(time);
    }
  };

  const breakTimeSettings = (time) => {
    if (breakTime >= 0) {
      setBreakTime(time);
    }
  };

  return (
    <>
      <div className={styles.timer_settings}>
        <label className={styles.timer_settings_label} htmlFor="session">
          Session timer
        </label>
        <Button
          handleClick={() => sessionTimeSettings(sessionTime - 1)}
          className={`${styles.timer_settings_button} ${sessionButtonDisable}`}
          name="sessionTime"
          content={"-"}
          disabled={!sessionTime}
        />
        <Input
          className={styles.timer_settings_input}
          type="number"
          id={"session"}
          value={sessionTime}
          readOnly={"readonly"}
        />
        <Button
          handleClick={() => sessionTimeSettings(sessionTime + 1)}
          className={styles.timer_settings_button}
          name="sessionTime"
          content={"+"}
        />
        <label htmlFor="breake" className={styles.timer_settings_label}>
          Breake timer
        </label>
        <Button
          handleClick={() => breakTimeSettings(breakTime - 1)}
          className={`${styles.timer_settings_button} ${breakButtonDisable}`}
          name="breakeTime"
          content={"-"}
          disabled={!breakTime}
        />
        <Input
          className={styles.timer_settings_input}
          type="number"
          id={"session"}
          value={breakTime}
          readOnly={"readonly"}
        />
        <Button
          handleClick={() => breakTimeSettings(breakTime + 1)}
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
