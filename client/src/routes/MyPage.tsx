/* eslint-disable */
import "./css/MyPage.css";

import { Info } from '../components/MyPage/Info';
import Header from "../components/Header/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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


export function MyPage() {
  const [infoType, setInfoType] = useState(0);

  const [name, setName] = useState("");

  async function getUserName() {
    const userData = await axios.get("http://localhost:3001/mypage");
    setName(userData.data);
  }

  useEffect(() => {
    getUserName();
    setInfoType(0);
  }, []);

  return (
    <StyledDiv>
      <Header selected={3}/>
      <div className="mypage_container">
        <section className="mypage_main-section">
          <h1 className="mypage_main-header">{name}님의 정보,</h1>

          <div className="mypage_main-inner">

            <aside className="mypage_menu">
              <div
                className="menu_profile"
                onClick={() => {
                  setInfoType(0)
                }}
              >
                프로필
              </div>
              <div
                className="menu_friendList"
                onClick={() => {
                  setInfoType(1)
                }}
              >
                친구 목록
              </div>
            </aside>
            


            <div className="info">
              <ul className="info_inner">
                <Info infoType={infoType} />
              </ul>
            </div>
              
          </div>
        </section>
      </div>
    </StyledDiv>
  );
}

export interface InfoProps {
  infoType: number;
}




export default MyPage;
