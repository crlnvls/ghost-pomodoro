import React, { useState, useEffect } from "react";

import "./Timer.css";
import MultipleTypes from "../MultipleTypes";
import OneType from "../OneType";
import Button from "../Button";

const Timer = () => {
  const [options, setOptions] = useState([
    { label: "pomodoro", time: "00:05" },
    { label: "short break", time: "00:03" },
    { label: "long break", time: "00:02" },
  ]);

  const initialOption = options[0];
  const [selectedOption, setSelectedOption] = useState(initialOption);
  const [active, setActive] = useState(initialOption.label);
  const [timer, setTimer] = useState(initialOption.time);
  const [countdown, setCountdown] = useState(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  const pomodoroFlow = [
    options[0], // pomodoro
    options[1], // short break
    options[0], // pomodoro
    options[1], // short break
    options[0], // pomodoro
    options[2], // long break
  ];

  useEffect(() => {
    if (countdown) {
      startTimer();
    }
  }, [stepIndex]);

  const getTimeRemaining = (endTime) => {
    const total = Date.parse(endTime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return {
      total,
      minutes,
      seconds,
    };
  };

  const startTimer = () => {
    const currentOption = pomodoroFlow[stepIndex];
    const endTime = new Date(
      Date.parse(new Date()) + getMillisecondsFromTime(currentOption.time)
    );
    let { total, minutes, seconds } = getTimeRemaining(endTime);

    setTimer(
      // Set the timer to the initial time of the current countdown
      `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`
    );

    const pauserTimer = () => {};

    const resumeTimer = () => {};

    const countdown = setInterval(() => {
      ({ total, minutes, seconds } = getTimeRemaining(endTime));

      if (total <= 0) {
        clearInterval(countdown);
        setTimer("00:00");
        moveToNextStep();
      } else {
        setTimer(
          `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`
        );
      }
    }, 1000);

    setCountdown(countdown);
  };

  const getMillisecondsFromTime = (time) => {
    const [minutes, seconds] = time.split(":").map(Number);
    return (minutes * 60 + seconds) * 1000;
  };

  const moveToNextStep = () => {
    const nextIndex = stepIndex + 1;
    if (nextIndex < pomodoroFlow.length) {
      setStepIndex(nextIndex);
      setActive(pomodoroFlow[nextIndex].label);
    } else {
      console.log("Pomodoro flow completed");
      // Optionally reset the flow or perform any other action upon completion
    }
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setTimer(option.time);
    setActive(option.label);
    setStepIndex(pomodoroFlow.findIndex((item) => item.label === option.label));
    clearInterval(countdown);
  };

  const onClickStart = () => {
    startTimer();
  };

  const onClickReset = () => {
    clearInterval(countdown);
    const initialTime = selectedOption.time;
    setTimer(initialTime);
    setCountdown(null);
  };

  return (
    <>
      <div className="timer-display">
        <MultipleTypes
          handleSelect={handleSelect}
          active={active}
          options={options}
        />
        <OneType
          handleSelect={handleSelect}
          active={active}
          options={options}
        />

        <div className="time">{timer}</div>

        <div className="center-timer-btn">
          <Button className="timer-btn" onClick={onClickStart}>
            start
          </Button>
          <Button className="timer-btn" onClick={onClickReset}>
            reset
          </Button>
        </div>
      </div>
    </>
  );
};

export default Timer;
