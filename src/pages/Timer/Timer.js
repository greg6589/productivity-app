import React, { useState } from "react";

import Counter from "./Counter";
import Settings from "./Settings";
import useLocalStorageData from "../../hooks/useLocalStorageData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "../Timer/Timer.module.css";

const Timer = () => {
  const { getSessionTime, getBreakTime } = useLocalStorageData();
  const [isSettingsActive, setIsSettingsActive] = useState(false);
  const [sessionTime, setSessionTime] = useState(getSessionTime());
  const [breakTime, setBreakTime] = useState(getBreakTime());

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
