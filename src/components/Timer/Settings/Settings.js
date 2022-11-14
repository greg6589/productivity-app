import React, { useContext } from "react";

import Button from "../../Button/Button";
import Input from "../../Input/Input";
import SettingsContext from "../../../Context/SettingsContext";

import styles from "./Settings.module.css";

const Settings = () => {
  const settingsIfo = useContext(SettingsContext);
  const sessionTime = settingsIfo.sessionTime;
  const breakTime = settingsIfo.breakTime;
  const setSessionTime = settingsIfo.setSessionTime;
  const setBreakTime = settingsIfo.setBreakTime;

  const timeSetToLacal = () => {
    settingsIfo.setIsSettingsActive(false);
    localStorage.setItem("sessionTime", sessionTime);
    localStorage.setItem("breakTime", breakTime);
  };

  const sessionTimeSettings = (time) => {
    if (sessionTime > 0) {
      setSessionTime(time);
    }
  };

  const breakTimeSettings = (time) => {
    if (breakTime > 0) {
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
          className={styles.timer_settings_button}
          name="sessionTime"
          content={"-"}
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
          className={styles.timer_settings_button}
          name="breakeTime"
          content={"-"}
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
