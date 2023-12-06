import React from "react";

import "./Home.css";
import NavButton from "../../components/NavButton";

const Home = () => {
  return (
    <>

<div  className="center-btn"> 

    <NavButton>History</NavButton>

    <NavButton>Settings</NavButton>
     
</div>
    <h1>Ghost Pomodoro 👻</h1>
    </>
  );
};

export default Home;