import React from "react";

import "./Home.css";
import NavButton from "../../components/NavButton";

const Home = () => {
  return (
    <>
    <NavButton>History</NavButton>
    <NavButton>Settings</NavButton>
    <h1>Ghost Pomodoro 👻</h1>
    </>
  );
};

export default Home;