import React from "react";

import "./NavButton.css"

const NavButton = (props) => {
  return (
    <>
    <div className="center-btn">
  
        <button className="nav-btn">{props.children}</button>
   
    </div>
    </>
  );
};

export default NavButton;