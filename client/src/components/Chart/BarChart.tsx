import React from "react";
import "./css/Chart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { Chart, CategoryScale, registerables } from "chart.js";
import { addAbortSignal } from "stream";

interface propTypes {
  chartType: number;
  data: number[];
}

Chart.register(CategoryScale);
Chart.register(...registerables);

const chart = (props: propTypes) => {
  const data = {
    dataBar: {
      labels: ["월", "화", "수", "목", "금", "토", "일"],
      datasets: [
        {
          label: "월별 평균 수행시간",
          data: [12, 19, 3, 5, 2, 3, 12],
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
