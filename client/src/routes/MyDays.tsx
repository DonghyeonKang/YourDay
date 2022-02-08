import React from "react";
import "./css/MyDays.css";
import Header from "../components/Header";
import Chart from "../components/Chart";

function MyDays() {
  return (
    <>
      <Header />
      <div className="mydays_container">
        <section className="main_section">
          <h2 className="main_section_header">튼튼소열이님의 하루는,</h2>
          <div className="main_section_inner">
            <aside className="menu">
              <a className="menu_saveTime" href="#">
                수행한 시간
              </a>
              <a className="menu_wasteTime" href="#">
                낭비한 시간
              </a>
            </aside>
            <Chart />
            <aside className="period_nav">
              <a className="day" href="#">
                일
              </a>
              <a className="week" href="/frontend/public/myDays/saveTime_week.html">
                주
              </a>
              <a className="month" href="#">
                월
              </a>
              <a className="year" href="#">
                년
              </a>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
}
// api 콜 후 state로 데이터 넣기 - chart, comment

export default MyDays;
