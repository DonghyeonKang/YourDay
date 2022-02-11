import React from "react";
import "./Chart.css";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

interface propTypes {
  chartType: number;
  setChartType: (num: number) => void;
  chartName: string;
  data: number[];
}

const chart = (props: propTypes) => {
  let chartMode = 0;
  
  if (chartMode) {
    return (
      <>
        <div className="main_section_inner_content">
          <h2 className="content_title">{props.chartName}</h2>
          <div className="content_inner">
            <PieChart data={props.data} />
            <div className="explain_color">
              <p>수행한 시간</p>
              <p>낭비한 시간</p>
              <p>미등록 시간</p>
            </div>
          </div>
          <aside className="menu">
            <a className="menu_saveTime" onClick={() => (chartMode = 0)}>
              수행한 시간
            </a>
            <a className="menu_wasteTime" onClick={() => (chartMode = 1)}>
              낭비한 시간
            </a>
          </aside>
          <div className="content_comment">
            <h3>Comment</h3>
            <p>오늘 완수한 시간은 총 12시간입니다!</p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="main_section_inner_content">
          <h2 className="content_title">{props.chartName}</h2>
          <div className="content_inner">
            <BarChart data={props.data} chartType={props.chartType}/>
            <div className="explain_color">
              <p>수행한 시간</p>
              <p>낭비한 시간</p>
              <p>미등록 시간</p>
            </div>
          </div>
          <aside className="menu">
            <a className="menu_saveTime" onClick={() => (chartMode = 0)}>
              수행한 시간
            </a>
            <a className="menu_wasteTime" onClick={() => (chartMode = 1)}>
              낭비한 시간
            </a>
          </aside>
          <div className="content_comment">
            <h3>Comment</h3>
            <p>오늘 완수한 시간은 총 12시간입니다!</p>
          </div>
        </div>
      </>
    );
  }
};

export default chart;
