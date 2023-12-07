import React from "react";

import "./Home.css";
import NavButton from "../../components/NavButton";
import Ghost from "../../components/Ghost";
import Timer from "../../components/Timer";

const Home = () => {
  return (
    <>
      <div  className="center-btn"> 
        <NavButton>History</NavButton>
        <NavButton>Settings</NavButton>
      </div>
      <div className="center-display">
        <Ghost></Ghost>
        <Timer></Timer>
      </div>
    </>
  );
};

export default Home;