import React from "react";

import "./Home.css";
import NavButton from "../../components/NavButton";
import Ghost from "../../components/Ghost";

const Home = () => {
  return (
    <>

<div  className="center-btn"> 

    <NavButton>History</NavButton>

    <NavButton>Settings</NavButton>
     
</div>
    <h1>Ghost Pomodoro 👻</h1>
<Ghost></Ghost>
    </>
  );
};

export default Home;