import React from "react";
import "./css/Main.css";
import Header from "../components/Header";
import styled from "styled-components";
import img from "../assets/backgound.png";

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
  return (
    <StyledDiv>
      <Header selected={0} />
      <div className="Main">
        <div className="content">
          <h1>현재 시간: </h1>
          <h1>남은 시간: </h1>
          <h1>낭비한 시간: </h1>
        </div>
      </div>
    </StyledDiv>
  );
}

export default Main;
