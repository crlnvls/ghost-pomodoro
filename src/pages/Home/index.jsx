import React from "react";

import "./Home.css";
import Button from "../../components/Button";
import Ghost from "../../components/Ghost";
import Timer from "../../components/Timer";

const Home = () => {
  return (
    <>
      <div className="center-btn">
        <div className="border-right">
          <Button className="nav-btn">history</Button>
        </div>
        <div className="border-left">
          <Button className="nav-btn">settings</Button>
        </div>
      </div>
      <div className="center-block">
        <div className="center-display">
          <Ghost></Ghost>
          <Button className="add-btn">create a task</Button>
          <Timer></Timer>
        </div>
      </div>
    </>
  );
};

export default Home;
