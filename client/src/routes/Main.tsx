import React, { useRef } from "react";
import "./css/Main.css";
import Header from "../components/Header/Header";
import styled from "styled-components";
import img from "../assets/backgound.png";
import { useState, useEffect } from "react";
import axios from 'axios';


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

const getWastedTime = async(id: any) => {
  
}

function Main() {
  const [timer, setTimer] = useState("Loading...");
  const [restTime, setRestTime] = useState("Loading...");
  const [wastedMinutes, setWastedMinutes] = useState(0);
  const [wastedTime, setWatedTime] = useState("Loading...");

  useEffect( () => {
    axios.get(`http://localhost:3001/schedule/dayWasted/1`)
    .then((result) => {
      setWastedMinutes(result.data);
    },
    (error)=> {
      console.log(error);
    });
  },[]);
  

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
    const minutes = String(59-date.getMinutes()).padStart(2, "0");
    const seconds = String(60-date.getSeconds()).padStart(2, "0");

    setRestTime(`${hours}:${minutes}:${seconds}`);
  };

  const wastedTimer = () => {
    const min = wastedMinutes;
    const hours = String(min/60).padStart(1, "0");
    const minutes = String(min).padStart(1, "0");
    
    setWatedTime(`${hours} h : ${minutes} m `);
    
  }

  
  setInterval(currentTimer, 1000);
  useInterval(() => {
    restTimer();
    wastedTimer();
  }, 1000);


  return (
    <StyledDiv>
      <Header selected={0} />
      <div className="Main">
        <div className="content">
          <h2>현재 시간: {timer} </h2>
          <h2>남은 시간: {restTime} </h2>
          <h2>낭비한 시간: {wastedTime} </h2>
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
