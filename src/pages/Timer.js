import React, { useState, useEffect } from "react";

import Counter from "../components/Counter";
import SetingsContext from "../components/SettingsContext";
import Settings from "../components/Settings";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faXmark } from "@fortawesome/free-solid-svg-icons";

import "../styles/Timer.css";

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
        className="timer-settings-show"
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
