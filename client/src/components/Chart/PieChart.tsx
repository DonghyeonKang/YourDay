import React from "react";
import "./css/Chart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

interface propTypes {
  data: number[][];
}

const chart = (props: propTypes) => {
  const data = {
    dataPie: {
      labels: ["수행한 시간", "미등록 시간", "낭비한 시간"],
      datasets: [
        {
          data: props.data,
          backgroundColor: ["#46BFBD", "#4D5360", "#AC64AD"],
          hoverBackgroundColor: ["#5AD3D1", "#616774", "#DA92DB"],
        },
      ],
    },
  }

  return (
    <>
        <MDBContainer>
          <Pie data={data.dataPie} options={{ responsive: true }} />
        </MDBContainer>
    </>
  );
};

export default chart;
