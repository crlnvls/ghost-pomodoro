import React from "react";

import "./MultipleTypes.css";
import Button from "../Button";

const MultipleTypes = ({ handleSelect, active, options }) => {
  return (
    <>
      <div className="type-display">
        <Button
          className={`type ${active === options[0] ? "line" : ""}`}
          onClick={() => handleSelect(options[0])}
        >
          pomodoro
        </Button>
        <Button
          className={`type ${active === options[1] ? "line" : ""}`}
          onClick={() => handleSelect(options[1])}
        >
          short break
        </Button>
        <Button
          className={`type ${active === options[2] ? "line" : ""}`}
          onClick={() => handleSelect(options[2])}
        >
          long break
        </Button>
      </div>
    </>
  );
};

export default MultipleTypes;
