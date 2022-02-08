import React from "react";
import "./css/Main.css";

function Main() {
  return (
    <div className="Main">
      <div className="mainImage">
        <img className="backgroundImage" alt="sky" src="img/sky.png" />
      </div>

      <div className="content">
        <h1>현재 시간: </h1>
        <h1>남은 시간: </h1>
        <h1>낭비한 시간: </h1>
      </div>
    </div>
  );
}

export default Main;
