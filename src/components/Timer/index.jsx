import React, { useState } from "react";

import "./Timer.css"
import MultipleTypes from "../MultipleTypes";
import OneType from "../OneType";
import Button from "../Button";


const Timer = () => {

  const [options, setOptions] = useState([
    { label: 'pomodoro', time: '25:00' },
    { label: 'short break', time: '05:00' },
    { label: 'long break', time: '15:00' },
  ]);

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [active, setActive] = useState(options[0].label)

   const handleSelect = (option) => {
     setSelectedOption(option);
     setActive(option)
   };
  
  const handleNext = (nextOption) => {
    setSelectedOption(nextOption);
    setActive(nextOption.label)
  };



  return (
    <>
      
      <div className="timer-display">
        
       <MultipleTypes handleSelect={handleSelect} active={active} options={options}  />
        <OneType handleNext={handleNext} active={active} options={options} />
        
        <div className="time">{selectedOption["time"]}</div>
     
      
        <div className="center-timer-btn">
        <Button className="timer-btn">start</Button>
        <Button className="timer-btn">reset</Button>
        </div>
      </div>
    </>
  );
};

export default Timer;