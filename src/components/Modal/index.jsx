import React from "react";
import Popup from "reactjs-popup";

import "./Modal.css";

// Add to trigger btn when clicked to stay "white" unless closed popup

const Modal = (props) => {
  return (
    <>
      <Popup trigger={props.trigger} modal nested>
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header">{props.header}</div>
            <div className="content">{props.content}</div>
          </div>
        )}
      </Popup>
    </>
  );
};

export default Modal;
