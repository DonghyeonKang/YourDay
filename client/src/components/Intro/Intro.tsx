import React from "react";
import "./Intro.css";
import introimg from "../assets/intro.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  & {
    background-image: url("./intro.png") !important;
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover;
    background-position: 50% 50%;
    text-align: center;
  }
  &:before {
    opacity: .5;
    content: "";
    z-index: 100;
  }
`;

const turnMain = () => {

}

export default function Intro() {
  return (
    <StyledDiv>
      <div className="title">
        <div className="main">너의 하루는,</div>
        <div className="sub">당신은 빛나는 하루를 보내시고 계신가요?</div>
      </div>
      <Link className="start_button" onClick={turnMain} to="/time">
        <span>시작하기</span>
      </Link>
    </StyledDiv>
  );
}
