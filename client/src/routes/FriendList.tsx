import "./css/MyPage.css";

import InfoNav from "../components/MyPage/InfoNav";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FriendInfo } from '../components/MyPage/FriendInfo';
import { PeriodNav } from '../components/MyPage/PeriodNav';
import Header from "../components/Header";




function FriendList() {
  return (
    <>
      <div className="mypage_container">
        <section className="mypage_main-section">
          <h1 className="mypage_main-header">소열님의 정보,</h1>
          <div className="mypage_main-inner">
            <InfoNav />
            <FriendInfo />
            <PeriodNav type="list" name="요청 목록"/>
          </div>
        </section>
      </div>
    </>
  );
}

export default FriendList;
