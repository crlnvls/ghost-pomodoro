import React from "react";

import "./SettingsPopup.css";
import Modal from "../Modal";
import Button from "../../components/Button";

const SettingsPopup = () => {
  const bodyContent = "";
  return (
    <>
      <div className="border-left">
        <Modal
          trigger={<Button className="nav-btn">settings</Button>}
          header={<h1>Settings</h1>}
          content={bodyContent}
        />
      </div>
    </>
  );
};

export default SettingsPopup;
