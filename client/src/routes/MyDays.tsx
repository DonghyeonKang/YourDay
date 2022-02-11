import React, { useState } from "react";
import "./css/MyDays.css";
import Header from "../components/Header";
import Chart from "../components/Chart";
import styled from "styled-components";

const getChartData = (chartType: number) => {
  //api 요청해서 데이터 받아야함
  if (chartType == 0) {
    const y_element = [20, 40, 70, 0, 0, 0, 0];
    return y_element;
  } else if (chartType == 1) {
    const y_element = [20, 70, 20, 40];
    return y_element;
  } else if (chartType == 2) {
    const y_element = [20, 70, 20, 40, 20, 70, 20, 40, 0, 0, 0, 0];
    return y_element;
  } else {
    const pieData = [16, 7, 1]; // saveTime: 16, wasteTime: 7, Unregistered: 1,
    return pieData;
  }
};

function MyDays() {
  const [chartType, setChartType] = useState(0);
  const [chartMode, setChartMode] = useState(0);
  const [data, setData] = useState(getChartData(0));
  const [chartName, setChartName] = useState("일");
  const [navButtonName, setNavButtonName] = useState([
    "day selected",
    "week",
    "month",
    "year",
  ]);
  
  return (
    <>
      <Header />
      <div className="mydays_container">
        <section className="main_section">
          <h2 className="main_section_header">튼튼소열이님의 하루는,</h2>
          <div className="main_section_inner">
            <aside className="period_nav">
              <div
                className={navButtonName[0]}
                onClick={() => {
                  setChartType(0);
                  setChartMode(0);
                  setData(getChartData(0));
                  setChartName("일");
                  setNavButtonName(["day selected", "week", "month", "year"]);
                }}
              >
                일
              </div>
              <div
                className={navButtonName[1]}
                onClick={() => {
                  setChartType(1);
                  setChartMode(1);
                  setData(getChartData(1));
                  setChartName("주");
                  setNavButtonName(["day", "week selected", "month", "year"]);
                }}
              >
                주
              </div>
              <div
                className={navButtonName[2]}
                onClick={() => {
                  setChartType(2);
                  setChartMode(2);
                  setData(getChartData(2));
                  setChartName("월");
                  setNavButtonName(["day", "week", "month selected", "year"]);
                }}
              >
                월
              </div>
              <div
                className={navButtonName[3]}
                onClick={() => {
                  setChartType(3);
                  setChartMode(3);
                  setData(getChartData(3));
                  setChartName("년");
                  setNavButtonName(["day", "week", "month", "year selected"]);
                }}
              >
                년
              </div>
            </aside>
            <Chart
              chartType={chartType}
              setChartType={setChartType}
              chartMode={chartMode}
              setChartMode={setChartMode}
              chartName={chartName}
              data={data}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default MyDays;
