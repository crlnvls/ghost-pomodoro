import React from "react";

import "./MultipleLabels.css";

import Button from "../Button";

const MultipleLabels = ({ handleSelect, active, options }) => {
  return (
    <>
      <div className="label-display">
        <Button
          className={`label ${active === options[0].label ? "line" : ""}`}
          onClick={() => handleSelect(options[0])}
        >
          pomodoro
        </Button>
        <Button
          className={`label ${active === options[1].label ? "line" : ""}`}
          onClick={() => handleSelect(options[1])}
        >
          short break
        </Button>
        <Button
          className={`label ${active === options[2].label ? "line" : ""}`}
          onClick={() => handleSelect(options[2])}
        >
          long break
        </Button>
      </div>
    </>
  );
};

export default MultipleLabels;
