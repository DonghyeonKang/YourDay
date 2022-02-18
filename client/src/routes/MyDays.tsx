import React, { useState } from "react";
import "./css/MyDays.css";
import Chart from "../components/Chart/Chart";
import styled from "styled-components";

interface propTypes {
  id: number;
}

const chartDataOption = (chartType: number, props: propTypes) => {
  //TODO 데이터 받아와서 나눠줘야함
  const data = getData(props.id);

  if (chartType == 0) {  // 주
    const pieData = [16, 7, 1]; // saveTime: 16, wasteTime: 7, Unregistered: 1,
    return pieData;
  } else if (chartType == 1) {  //월
    const y_element = [20, 15, 10, 9, 11, 17, 11];
    return y_element;
  } else if (chartType == 2) {  // 년
    const y_element = [20, 21, 20, 11];
    return y_element;
  } else {
    const y_element = [20, 8, 12, 20, 20, 18, 20, 10, 10, 24, 21, 12];
    return y_element;
  }
};

async function getData(id: number) {
  try {
    const data = await fetch(`/mydays/data/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    
  }
}

function MyDays(props: propTypes) {
  const [chartType, setChartType] = useState(0);
  const [chartMode, setChartMode] = useState(0);
  const [data, setData] = useState(chartDataOption(0, props));
  const [chartName, setChartName] = useState("일");
  const [navButtonName, setNavButtonName] = useState([
    "day selected",
    "week",
    "month",
    "year",
  ]);
  
  return (
    <>
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
                  setData(chartDataOption(0, props));
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
                  setData(chartDataOption(1, props));
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
                  setData(chartDataOption(2, props));
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
                  setData(chartDataOption(3, props));
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
