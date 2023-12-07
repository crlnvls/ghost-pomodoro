import React from "react";

import "./NavButton.css"

const NavButton = (props) => {
  return (
    <>
        <button className="nav-btn">{props.children}</button>
    </>
  );
};

export default NavButton;