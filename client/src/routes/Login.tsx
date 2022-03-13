import React from "react";
import "./css/login.css";
import Header from "../components/Header/Header";
import kakao from "../assets/login/kakao.png";
import google from "../assets/login/google.png";
import naver from "../assets/login/naver.png";

export default function Login() {
  return (
    <>
      <div className="container">
        <h1>LOGIN</h1>
        <p>너의 하루 서비스를 이용하기 위해서는 로그인이 필요합니다.</p>

        <div className="api-img">
          <img src={kakao} />
          <img src={google} />
          <img src={naver} />
        </div>
      </div>
    </>
  );
}
