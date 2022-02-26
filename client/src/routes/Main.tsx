import React from "react";
import "./css/Main.css";
import Header from "../components/Header";

function Main() {
  return (
    <>
      <Header selected={0}/>
      <div className="Main">
        <div className="content">
          <h1>현재 시간: </h1>
          <h1>남은 시간: </h1>
          <h1>낭비한 시간: </h1>
        </div>
      </div>
    </>
  );
}

export default Main;
