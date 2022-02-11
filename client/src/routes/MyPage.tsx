/* eslint-disable */
import "./css/MyPage.css";

import InfoNav from "../components/MyPage/InfoNav";
import { Info } from '../components/MyPage/Info';


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
    <div className="container">
      <section className="main_section">
        <h1 className="main_section-header">소열님의 정보,</h1>
        <div className="main_section-inner">
          <Profile />
        </div>
      </section>
    </div>
  );
}

export default MyPage;
