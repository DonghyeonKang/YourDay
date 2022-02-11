import InfoNav from "../components/MyPage/InfoNav";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FriendInfo } from '../components/MyPage/FriendInfo';
import { PeriodNav } from '../components/MyPage/PeriodNav';






function FriendList() {
  return (
    <div className="container">
      <section className="main_section">
        <h1 className="main_section-header">소열님의 정보,</h1>
        <div className="main_section-inner">
          <InfoNav />
          <FriendInfo />
          <PeriodNav type="list" name="요청 목록"/>
        </div>
      </section>
    </div>
  );
}

export default FriendList;
