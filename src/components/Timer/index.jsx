import React, { useState, useEffect } from "react";
import { DEFAULT_OPTIONS, POMODORO_FLOW } from "../../constants/index";

import "./Timer.css";
import MultipleLabels from "../MultipleLabels";
import OneLabel from "../OneLabel";
import Button from "../Button";

const Timer = () => {
  // Time Options
  const [options, setOptions] = useState(DEFAULT_OPTIONS);

  // Initial Time - pomodoro
  const initialOption = options[0];

  // Selected Option
  const [selectedOption, setSelectedOption] = useState(initialOption);
  const [active, setActive] = useState(initialOption.label);
  const [timer, setTimer] = useState(initialOption.time);

  // Countdown and Flow states
  const [countdown, setCountdown] = useState(null);
  const [stepIndex, setStepIndex] = useState(0);

  // Start, Pause and Resume states
  const [isStarted, setIsStarted] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const [endTime, setEndTime] = useState(null);

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
    const currentOption = POMODORO_FLOW[stepIndex];
    const calculatedEndTime = new Date(
      Date.parse(new Date()) + getMillisecondsFromTime(currentOption.time)
    );

    setEndTime(calculatedEndTime);

    let { total, minutes, seconds } = getTimeRemaining(calculatedEndTime);

    setTimer(
      `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`
    );

    const countdown = setInterval(() => {
      ({ total, minutes, seconds } = getTimeRemaining(calculatedEndTime));

      if (total <= 0) {
        clearInterval(countdown);

        setTimer("00:00");

        setTimeout(() => {
          moveToNextStep();
        }, 1000);
      } else {
        setTimer(
          `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`
        );
      }
    }, 1000);

    setCountdown(countdown);
    setIsStarted(true);
  };

  const getMillisecondsFromTime = (time) => {
    const [minutes, seconds] = time.split(":").map(Number);
    return (minutes * 60 + seconds) * 1000;
  };

  const moveToNextStep = () => {
    const nextIndex = stepIndex + 1;
    if (nextIndex < POMODORO_FLOW.length) {
      setStepIndex(nextIndex);
      setActive(POMODORO_FLOW[nextIndex].label);
    } else {
      console.log("Pomodoro flow completed");
      // Optionally reset the flow or perform any other action upon completion
    }
  };

  const pauseTimer = () => {
    clearInterval(countdown);
    const currentTime = new Date();
    setRemainingTime(Date.parse(endTime) - Date.parse(currentTime));
    setIsStarted(false);
  };

  const resumeTimer = () => {
    const now = new Date();
    const newEnd = new Date(now.getTime() + remainingTime);

    setEndTime(newEnd);

    let { total, minutes, seconds } = getTimeRemaining(newEnd);

    setTimer(
      `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`
    );

    setRemainingTime(null);
    setIsStarted(true);

    const countdown = setInterval(() => {
      ({ total, minutes, seconds } = getTimeRemaining(newEnd));

      if (total <= 0) {
        clearInterval(countdown);

        setTimer("00:00");

        setTimeout(() => {
          moveToNextStep();
        }, 1000);
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

  const handleSelect = (option) => {
    setSelectedOption(option);
    setTimer(option.time);
    setActive(option.label);
    setStepIndex(
      POMODORO_FLOW.findIndex((item) => item.label === option.label)
    );
    clearInterval(countdown);
  };

  const onClickStart = () => {
    if (!isStarted) {
      if (remainingTime) {
        resumeTimer();
      } else {
        startTimer();
      }
    } else {
      pauseTimer();
    }
  };

  const onClickReset = () => {
    clearInterval(countdown);
    const currentOption = POMODORO_FLOW[stepIndex];
    setTimer(currentOption.time);
    setCountdown(null);
    setIsStarted(false);
    setRemainingTime(0);
    setEndTime(null);
  };

  return (
    <>
      <div className="timer-display">
        <MultipleLabels
          handleSelect={handleSelect}
          active={active}
          options={options}
        />
        <OneLabel
          handleSelect={handleSelect}
          active={active}
          options={options}
        />

        <div className="time">{timer}</div>

        <div className="center-timer-btn">
          <Button className="timer-btn" onClick={onClickStart}>
            {isStarted ? "pause" : remainingTime === 0 ? "start" : "resume"}
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
