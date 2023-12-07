import React from "react";

import "./TimerButton.css"

const TimerButton = (props) => {
  return (
    <>
        <button className="timer-btn">{props.children}</button>
    </>
  );
};

export default TimerButton;