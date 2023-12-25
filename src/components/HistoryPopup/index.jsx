import React from "react";

import "./HistoryPopup.css";
import Modal from "../Modal";
import Button from "../../components/Button";

const HistoryPopup = () => {
  const headerContent = "History";
  const bodyContent = "AAAA";
  return (
    <>
      <div className="border-right">
        <Modal
          trigger={<Button className="nav-btn">history</Button>}
          header={headerContent}
          content={bodyContent}
        />
      </div>
    </>
  );
};

export default HistoryPopup;
