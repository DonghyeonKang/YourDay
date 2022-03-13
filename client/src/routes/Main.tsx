import React, { useRef } from "react";
import "./css/Main.css";
import Header from "../components/Header/Header";
import styled from "styled-components";
import img from "../assets/backgound.png";
import { useState, useEffect } from "react";


const StyledDiv = styled.div`
  & {
    position: relative;
    width: 100%;
    min-height: 100%;
    height: auto;
    margin: 0;
    background-image: url("${img}");
    background-size: cover;
  }

  &:before {
    content: "";
    background-position: 50% 50%;
    z-index: -100;
    opacity: 0.9;
    position: absolute;
    height: 100%;
    width: 100%;
  }
`;

function Main() {
  const [timer, setTimer] = useState("Loading...");
  const [restTime, setRestTime] = useState("Loading...");

  const currentTimer = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    setTimer(`${hours}:${minutes}:${seconds}`);
  };

  const restTimer = () => {
    const date = new Date();
    const hours = String(23-date.getHours()).padStart(2, "0");
    const minutes = String(60-date.getMinutes()).padStart(2, "0");
    const seconds = String(60-date.getSeconds()).padStart(2, "0");

    setRestTime(`${hours}:${minutes}:${seconds}`);
  };

  

  

  setInterval(currentTimer, 1000);
  useInterval(() => {
    restTimer();
  }, 1000);

  return (
    <StyledDiv>
      <Header selected={0} />
      <div className="Main">
        <div className="content">
          <h2>현재 시간: {timer}</h2>
          <h2>남은 시간: {restTime}</h2>
          <h2>낭비한 시간: </h2>
        </div>
      </div>
    </StyledDiv>
  );
}


function useInterval(callback: Function, delay?: number | null) {
  const savedCallback = useRef<Function>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback && savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Main;
