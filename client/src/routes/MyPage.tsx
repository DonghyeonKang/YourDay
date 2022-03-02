/* eslint-disable */
import "./css/MyPage.css";

import { Info } from '../components/MyPage/Info';
import Header from "../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";




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
    <>
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
    </>
  );
}

export interface InfoProps {
  infoType: number;
}




export default MyPage;
