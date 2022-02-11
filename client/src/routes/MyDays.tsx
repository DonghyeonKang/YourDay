import React, { useState } from "react";
import "./css/MyDays.css";
import Header from "../components/Header";
import Chart from "../components/Chart";

const chartName = "월";

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
    const pieData = [16, 7, 1]      // saveTime: 16, wasteTime: 7, Unregistered: 1,
    return pieData;
  }
};

function MyDays() {
  const [chartType, setChartType] = useState(0);
  const [data, setData] = useState(getChartData(0));

  return (
    <>
      <Header />
      <div className="mydays_container">
        <section className="main_section">
          <h2 className="main_section_header">튼튼소열이님의 하루는,</h2>
          <div className="main_section_inner">
            <aside className="period_nav">
              <a
                className="day"
                onClick={() => {
                  setChartType(0);
                  setData(getChartData(0));
                }}
              >
                일
              </a>
              <a
                className="week"
                onClick={() => {
                  setChartType(1);
                  setData(getChartData(0));
                }}
              >
                주
              </a>
              <a
                className="month"
                onClick={() => {
                  setChartType(2);
                  setData(getChartData(0));
                }}
              >
                월
              </a>
              <a
                className="year"
                onClick={() => {
                  setChartType(3);
                  setData(getChartData(0));
                }}
              >
                년
              </a>
            </aside>
            <Chart
              chartType={chartType}
              setChartType={setChartType}
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
