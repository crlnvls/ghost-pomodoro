import React, { useState } from "react";

import "./Timer.css";
import MultipleTypes from "../MultipleTypes";
import OneType from "../OneType";
import Button from "../Button";

const Timer = () => {
  const [options, setOptions] = useState([
    { label: "pomodoro", time: "25:00" },
    { label: "short break", time: "05:00" },
    { label: "long break", time: "15:00" },
  ]);

  const pomodoroFlow = [
    options.pomodoro,
    options.shortBreak,
    options.pomodoro,
    options.shortBreak,
    options.pomodoro,
    options.longBreak,
  ];

  const initialOption = options[0];
  const [selectedOption, setSelectedOption] = useState(initialOption);
  const [active, setActive] = useState(initialOption.label);
  const [timer, setTimer] = useState(initialOption.time);
  const [countdown, setCountdown] = useState(null);
  const [selectedFlow, setSelectedFlow] = useState([]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setActive(option.label);
    setTimer(option.time);
    clearInterval(countdown);
  };

  const handleNext = (nextOption) => {
    setSelectedOption(nextOption);
    setActive(nextOption.label);
    setTimer(nextOption.time);
    clearInterval(countdown);
  };

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
    const endTime = new Date(
      Date.parse(new Date()) + getMillisecondsFromTime(selectedOption.time)
    );
    let { total, minutes, seconds } = getTimeRemaining(endTime);

    const countdown = setInterval(() => {
      ({ total, minutes, seconds } = getTimeRemaining(endTime));

      if (total <= 0) {
        clearInterval(countdown);
        setTimer("00:00");
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

  const onClickStart = () => {
    startTimer();
  };

  const onClickReset = () => {
    clearInterval(countdown);
    setTimer(selectedOption.time);
  };
  return (
    <>
      <div className="timer-display">
        <MultipleTypes
          handleSelect={handleSelect}
          active={active}
          options={options}
        />
        <OneType handleNext={handleNext} active={active} options={options} />

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
