import React, { useState } from "react";

import "./OneType.css";
import Button from "../Button";
import NextSvg from "../NextSvg";

const OneType = ({ options, handleNext }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    const nextIndex =
      currentIndex === options.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    handleNext(options[nextIndex]);
  };
  return (
    <>
      <div className="type-display">
        <div className="only-type">{options[currentIndex].label}</div>
        <Button className="next-btn" onClick={handleNextClick}>
          <NextSvg />
        </Button>
      </div>
    </>
  );
};

export default OneType;
