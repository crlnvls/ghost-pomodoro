import React, { useState, useEffect } from "react";

import "./OneLabel.css";
import Button from "../Button";
import NextSvg from "../NextSvg";

const OneType = ({ options, handleSelect, active }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(options.findIndex((option) => option.label === active));
  }, [active, options]);

  const handleNextClick = () => {
    const nextIndex =
      currentIndex === options.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    handleSelect(options[nextIndex]);
  };
  return (
    <>
      <div className="label-display">
        {options.length > 0 && options[currentIndex] && (
          <div className="one-label">{options[currentIndex].label}</div>
        )}
        <Button className="next-btn" onClick={handleNextClick}>
          <NextSvg />
        </Button>
      </div>
    </>
  );
};

export default OneType;
