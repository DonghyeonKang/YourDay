import React, { useState } from "react";
import "./css/Chart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { Chart, CategoryScale, registerables } from "chart.js";
import { propTypes } from "react-bootstrap/esm/Image";

interface propTypes {
  chartType: number;  // 0 = 수행한 시간, 1 =낭비한 시간
  data: number[][];
  chartMode: number;
}

Chart.register(CategoryScale);
Chart.register(...registerables);

const BarChart = (props: propTypes) => {
  let x_element = ["7일 전", "6일 전", "5일 전", "4일 전", "3일 전", "2일 전", "1일 전"];
  if (props.chartMode == 1) {
    x_element = ["7일 전", "6일 전", "5일 전", "4일 전", "3일 전", "2일 전", "1일 전"];
  } else if (props.chartMode == 2) {
    x_element = [ "4주 전", "3주 전", "2주 전", "1주 전" ];
  } else if (props.chartMode == 3){
    x_element = [
      "6개월 전",
      "4개월 전",
      "5개월 전",
      "3개월 전",
      "2개월 전",
      "1개월 전"
    ];
  }
  
  const saveTimeData = props.data.map(x => x[1]);
  const wasteTimeData = []  
  for(let i = 0; i < props.data.length; i++) {
    wasteTimeData.push(24 - props.data[i][1])
  }  

  const data_save = {
    dataBar: {
      labels: x_element,
      datasets: [
        {
          label: "수행한 시간",
          data: saveTimeData,
          backgroundColor: [
            "rgba(255, 134,159,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(255, 218, 128,0.4)",
            "rgba(113, 205, 205,0.4)",
            "rgba(170, 128, 252,0.4)",
            "rgba(255, 177, 101,0.4)",
            "rgba(230, 157, 201,0.4)",
          ],
          borderWidth: 2,
          borderColor: [
            "rgba(255, 134, 159, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(255, 218, 128, 1)",
            "rgba(113, 205, 205, 1)",
            "rgba(170, 128, 252, 1)",
            "rgba(255, 177, 101, 1)",
            "rgba(230, 157, 201, 1)",
          ],
        },
      ],
    },
    options: {
      scales: {
        y: {
          ticks: {
            color: "white",
          },
        },
        x: {
          ticks: {
            color: "white",
          },
        },
      },
    },
  };
  
  const data_waste = {
    dataBar: {
      labels: x_element,
      datasets: [
        {
          label: "낭비한 시간",
          data: wasteTimeData,
          backgroundColor: [
            "rgba(255, 134,159,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(255, 218, 128,0.4)",
            "rgba(113, 205, 205,0.4)",
            "rgba(170, 128, 252,0.4)",
            "rgba(255, 177, 101,0.4)",
            "rgba(230, 157, 201,0.4)",
          ],
          borderWidth: 2,
          borderColor: [
            "rgba(255, 134, 159, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(255, 218, 128, 1)",
            "rgba(113, 205, 205, 1)",
            "rgba(170, 128, 252, 1)",
            "rgba(255, 177, 101, 1)",
            "rgba(230, 157, 201, 1)",
          ],
        },
      ],
    },
    options: {
      scales: {
        y: {
          ticks: {
            color: "white",
          },
        },
        x: {
          ticks: {
            color: "white",
          },
        },
      },
    },
  };

  if(props.chartType == 0) {
    return (
      <>
      <MDBContainer>
        <Bar data={data_save.dataBar} options={data_save.options} />
      </MDBContainer>
    </>
  );
} else {
  return (
    <>
    <MDBContainer>
      <Bar data={data_waste.dataBar} options={data_waste.options} />
    </MDBContainer>
  </>
);

}
};

export default BarChart;
