import React, { useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import useSound from "use-sound";

import sound from "../../assets/sound.wav";
import Button from "../../components/Button";

import "react-circular-progressbar/dist/styles.css";
import styles from "./Counter.module.css";

import { StopSvg, PlaySvg } from "../../components/StopPlaySvg";

const Counter = (props) => {
  const { sessionTime, breakTime } = props.value;
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [mode, setMode] = useState("work");
  const [play] = useSound(sound, { volume: 0.3 });

  const secondsLeftRef = useRef(secondsLeft);
  const modeRef = useRef(mode);

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
      if (!isSessionActive) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }
      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [isSessionActive, sessionTime, breakTime]);

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

  const toggleCounter = () => {
    setIsSessionActive((prev) => !prev);
    if (isSessionActive) {
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
        handleClick={toggleCounter}
        className={styles.timer_button}
        content={isSessionActive ? <StopSvg /> : <PlaySvg />}
      />
    </div>
  );
};

export default Counter;
