import React, { useState, useContext, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import useSound from "use-sound";

import sound from "../../../sound/sound.wav";
import SettingsContext from "../../../Context/SettingsContext";
import Button from "../../Button/Button";

import "react-circular-progressbar/dist/styles.css";
import styles from "./Counter.module.css";

const Counter = () => {
  const [sessionActive, setSessionActive] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [mode, setMode] = useState("work");
  const [play] = useSound(sound, { volume: 0.3 });

  const secondsLeftRef = useRef(secondsLeft);
  const modeRef = useRef(mode);

  const settingsIfo = useContext(SettingsContext);
  const sessionTime = settingsIfo.sessionTime;
  const breakTime = settingsIfo.breakTime;

  function initTimer() {
    setSecondsLeft(sessionTime * 60);
  }

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    initTimer();

    function switchMode() {
      const nextMode = modeRef.current === "work" ? "break" : "work";
      const nextSeconds = (nextMode === "work" ? sessionTime : breakTime) * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
      play();
    }

    secondsLeftRef.current = sessionTime * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (!sessionActive) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }
      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [sessionActive, sessionTime, breakTime]);

  const totalSeconds = mode === "work" ? sessionTime * 60 : breakTime * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  let minutes = Math.floor(secondsLeft / 60);
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let seconds = secondsLeft % 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (!sessionActive) {
      setSessionActive(true);
    }
    if (sessionActive) {
      setSessionActive(false);
      setMode("work");
    }
  };

  return (
    <div className={styles.timer}>
      <div className={styles.timer_display}>
        <CircularProgressbar
          value={percentage}
          text={minutes + ":" + seconds}
          styles={buildStyles({
            pathColor:
              mode === "break" ? `rgb(54, 174, 58)` : `rgb(175, 94, 94)`,
            textColor: "white",
          })}
        />
      </div>
      <Button
        handleClick={handleClick}
        className={styles.timer_button}
        content={
          sessionActive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          )
        }
      />
    </div>
  );
};

export default Counter;
