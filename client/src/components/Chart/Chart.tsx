import React, { useState } from "react";
import "./css/Chart.css";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

interface propTypes {
  chartType: number;
  setChartType: (num: number) => void;
  chartMode: number;
  setChartMode: (num: number) => void;
  chartName: string;
  data: number[][];
}


const Chart = (props: propTypes) => {  
  const [chartMenuName, setChartMenuName] = useState([
    "chart_menu_saveTime selected",
    "chart_menu_wasteTime",
  ]);

  if (props.chartMode != 0) {
    return (
      <>
        <div className="main_section_inner_content">
          <h2 className="content_title">{props.chartName}</h2>
          <div className="content_inner">
            <BarChart data={props.data} chartType={props.chartType}  chartMode={props.chartMode}/>
            <aside className="chart_menu">
              <div
                className={chartMenuName[0]}
                onClick={() => {
                  props.setChartType(0);
                  setChartMenuName([
                    "chart_menu_saveTime selected",
                    "chart_menu_wasteTime",
                  ]);
                }}
              >
                수행한 시간
              </div>
              <div
                className={chartMenuName[1]}
                onClick={() => {
                  props.setChartType(1);
                  setChartMenuName([
                    "chart_menu_saveTime",
                    "chart_menu_wasteTime selected",
                  ]);
                }}
              >
                낭비한 시간
              </div>
            </aside>
          </div>
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
            <PieChart data={props.data}/>
          </div>
          <div className="content_comment">
            <h3>Comment</h3>
            <p>오늘 완수한 시간은 총 12시간입니다!</p>
          </div>
        </div>
      </>
    );
  }
};

export default Chart;
