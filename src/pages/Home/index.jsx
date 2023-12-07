import React from "react";

import "./Home.css";
import NavButton from "../../components/NavButton";
import Ghost from "../../components/Ghost";
import Timer from "../../components/Timer";

const Home = () => {
  return (
    <>
      <div className="center-btn">
        <div className="border-right">
        <NavButton>History</NavButton>
        </div>
        <div className="border-left">
        <NavButton>Settings</NavButton>
        </div>
      </div>
      <div className="center-block">

      <div className="center-display">
        <Ghost></Ghost>
        <Timer></Timer>
      </div>
      </div>
    </>
  );
};

export default Home;