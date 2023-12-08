import React from "react";

import "./Timer.css"
import NextSvg from "../NextSvg";
import Button from "../Button";


const Timer = () => {
  return (
    <>
          <Button className="add-btn">create a task</Button>
      <div className="timer-display">
        <div className="type-display">
            <div className="type line">
              pomodoro
          </div>
          <div className="hide">
              short break
          </div>
          <div className="hide">
              long break
            </div>
          <button className="next-btn">
             <NextSvg/>
            </button>
        </div>
            <div className="time">
             25:00
            </div>
      <div className="center-timer-btn">
        <Button className="timer-btn">start</Button>
        <Button className="timer-btn">reset</Button>
        </div>
      </div>
    </>
  );
};

export default Timer;