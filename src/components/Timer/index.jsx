import React from "react";


import "./Timer.css"
import NextSvg from "../NextSvg";


const Timer = () => {
  return (
    <>
      <div className="timer-display">
        <div className="type-display">
            <div className="type">
              Pomodoro
            </div>
          <button className="next-btn">
             <NextSvg/>
            </button>
        </div>
            <div className="time">
             25:00
            </div>
      </div>
     
 
    </>
  );
};

export default Timer;