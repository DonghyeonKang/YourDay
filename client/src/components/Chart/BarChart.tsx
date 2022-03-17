import React from "react";
import "./css/Chart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { Chart, CategoryScale, registerables } from "chart.js";
import { addAbortSignal } from "stream";
import { propTypes } from "react-bootstrap/esm/Image";

interface propTypes {
  chartType: number;
  data: number[][];
  chartMode: number;
}

Chart.register(CategoryScale);
Chart.register(...registerables);

const chart = (props: propTypes) => {
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

  const timedata = props.data.map(v => v[1]);  
  const data = {
    dataBar: {
      labels: x_element,
      datasets: [
        {
          label: "수행시간",
          data: timedata,
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

  return (
    <>
      <MDBContainer>
        <Bar data={data.dataBar} options={data.options} />
      </MDBContainer>
    </>
  );
};

export default chart;
