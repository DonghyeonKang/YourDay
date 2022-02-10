import React from "react";
import "../css/login.css";

export function Login() {
  return (
    <div className="container">
      <h1>LOGIN</h1>
      <p>너의 하루 서비스를 이용하기 위해서는 로그인이 필요합니다.</p>

      <div className="api-img">
        <img src="../assets/login/kakao.png" />
        <img src="../assets/login/google.png" />
        <img src="../assets/login/naver.png" />
      </div>
    </div>
  );
}
