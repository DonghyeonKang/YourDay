/* eslint-disable */
import "./css/MyPage.css";

import InfoNav from "../components/MyPage/InfoNav";
import { Info } from "../components/MyPage/Info";
import Header from "../components/Header";

function Profile() {
  return (
    <>
      <InfoNav />
      <Info />
    </>
  );
}

function MyPage() {
  return (
    <>
      <div className="mypage_container">
        <section className="mypage_main-section">
          <h1 className="mypage_main-header">소열님의 정보,</h1>
          <div className="mypage_main-inner">
            <Profile />
          </div>
        </section>
      </div>
    </>
  );
}

export default MyPage;
