import React from "react";
import Popup from "reactjs-popup";

import "./Modal.css";

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
