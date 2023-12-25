import React from "react";

import "./Home.css";
import Button from "../../components/Button";
import Ghost from "../../components/Ghost";
import Timer from "../../components/Timer";
import HistoryPopup from "../../components/HistoryPopup";
import SettingsPopup from "../../components/SettingsPopup";

const Home = () => {
  return (
    <>
      <div className="center-btn">
        <HistoryPopup></HistoryPopup>
        <SettingsPopup></SettingsPopup>
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
