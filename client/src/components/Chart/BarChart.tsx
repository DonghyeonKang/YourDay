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
  let x_element = ["월", "화", "수", "목", "금", "토", "일"];
  if (props.chartMode == 1) {
    x_element = ["월", "화", "수", "목", "금", "토", "일"];
  } else if (props.chartMode == 2) {
    x_element = ["1주차", "2주차", "3주차", "4주차"];
  } else if (props.chartMode == 3){
    x_element = [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ];
  }

  const timedata = props.data.map(v => v[1]);
  console.log(timedata);
  
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
