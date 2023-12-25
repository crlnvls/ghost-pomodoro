import React from "react";

import "./Home.css";
import Button from "../../components/Button";
import Ghost from "../../components/Ghost";
import Timer from "../../components/Timer";
import Modal from "../../components/Modal";
import HistoryPopup from "../../components/HistoryPopup";

const Home = () => {
  return (
    <>
      <div className="center-btn">
        <HistoryPopup></HistoryPopup>
        <div className="border-left">
          <Modal
            trigger={<Button className="nav-btn">settings</Button>}
          ></Modal>
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
