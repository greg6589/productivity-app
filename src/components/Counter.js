import React, { useState, useContext, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import useSound from "use-sound";
import sound from "../sound/sound.wav";
import SettingsContext from "./SettingsContext";
import StartButton from "../components/StartButton";
import StopButton from "../components/StopButton";
import "react-circular-progressbar/dist/styles.css";

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

  return (
    <div className="timer">
      <div className="timer_display">
        <CircularProgressbar
          value={percentage}
          text={minutes + ":" + seconds}
          styles={buildStyles({
            pathColor:
              mode === "break" ? `rgb(95, 190, 98)` : `rgb(175, 94, 94)`,
            textColor: "black",
          })}
        />
      </div>
      {sessionActive ? (
        <StopButton setSessionActive={setSessionActive} setMode={setMode} />
      ) : (
        <StartButton
          setSessionActive={setSessionActive}
          sessionActive={sessionActive}
        />
      )}
    </div>
  );
};

export default Counter;
