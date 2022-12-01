import React, { useState, useEffect } from "react";

import Counter from "./Counter";
import Settings from "./Settings";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "../Timer/Timer.module.css";

const Timer = () => {
  const [isSettingsActive, setIsSettingsActive] = useState(false);
  const [sessionTime, setSessionTime] = useState(30);
  const [breakTime, setBreakTime] = useState(15);

  useEffect(() => {
    const sessionTimeLocal = parseInt(localStorage.getItem("sessionTime"));
    const breakTimeLocal = parseInt(localStorage.getItem("breakTime"));
    if (sessionTimeLocal) {
      setSessionTime(sessionTimeLocal);
    }
    if (breakTimeLocal) {
      setBreakTime(breakTimeLocal);
    }
  }, []);

  const toggleSettings = () => {
    setIsSettingsActive((prev) => !prev);
  };

  return (
    <>
      <button onClick={toggleSettings} className={styles.timer_settings_show}>
        {isSettingsActive ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faGear} />
        )}
      </button>
      {isSettingsActive ? (
        <Settings
          value={{
            sessionTime,
            breakTime,
            setSessionTime,
            setBreakTime,
            isSettingsActive,
            setIsSettingsActive,
          }}
        />
      ) : (
        <Counter
          value={{
            sessionTime,
            breakTime,
          }}
        />
      )}
    </>
  );
};

export default Timer;
