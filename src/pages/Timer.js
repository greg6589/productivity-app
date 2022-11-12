import React, { useState, useEffect } from "react";

import Counter from "../components/Timer/Counter/Counter";
import SetingsContext from "../Context/SettingsContext";
import Settings from "../components/Timer/Settings/Settings";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "../pages/Timer.module.css";

const Timer = () => {
  const [settingsIsActive, setSettingsIsActive] = useState(false);
  const [sessionTime, setSessionTime] = useState(30);
  const [breakTime, setBreakTime] = useState(15);

  useEffect(() => {
    let sessionTimeLocal = parseInt(localStorage.getItem("sessionTime"));
    let breakTimeLocal = parseInt(localStorage.getItem("breakTime"));
    if (sessionTimeLocal) {
      setSessionTime(sessionTimeLocal);
    }
    if (breakTimeLocal) {
      setBreakTime(breakTimeLocal);
    }
  }, []);

  return (
    <>
      <button
        onClick={() =>
          settingsIsActive
            ? setSettingsIsActive(false)
            : setSettingsIsActive(true)
        }
        className={styles.timer_settings_show}
      >
        {settingsIsActive ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faGear} />
        )}
      </button>
      <SetingsContext.Provider
        value={{
          sessionTime,
          breakTime,
          setSessionTime,
          setBreakTime,
          setSettingsIsActive,
        }}
      >
        {settingsIsActive ? <Settings /> : <Counter />}
      </SetingsContext.Provider>
    </>
  );
};

export default Timer;
