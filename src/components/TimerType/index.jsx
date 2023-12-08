import React, { useState } from "react";

import "./TimerType.css"
import Button from "../Button";
import NextSvg from "../NextSvg";

const TimerType = ({ handleSelect, active, options }) => {
 

  return (
    <>
        <div className="type-display">
           <Button className={`type ${active === options[0]? 'line' : ''}`} onClick={() => handleSelect(options[0])}>
                pomodoro
            </Button>
            <Button className={`type hide ${active === options[1]  ? 'line' : ''}`} onClick={() => handleSelect(options[1])}>
                short break
            </Button>
            <Button className={`type hide ${active === options[2] ? 'line' : ''}`} onClick={() => handleSelect(options[2])}>
                long break
            </Button>
            <Button className="next-btn">
                <NextSvg/>
            </Button>
        </div>
            
    </>
  );
};

export default TimerType;