import React from "react";
import "./Chart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

interface propTypes {
  data: number[];
}

class ChartsPagePie extends React.Component {
  state = {
    dataPie: {
      labels: ["수행한 시간", "미등록 시간", "낭비한 시간"],
      datasets: [
        {
          data: [300, 50, 120],
          backgroundColor: ["#46BFBD", "#4D5360", "#AC64AD"],
          hoverBackgroundColor: ["#5AD3D1", "#616774", "#DA92DB"],
        },
      ],
    },
  };

  render() {
    return (
      <>
        <MDBContainer>
          <Pie data={this.state.dataPie} options={{ responsive: true }} />
        </MDBContainer>
      </>
    );
  }
}

const chart = (props: propTypes) => {
  return (
    <>
    </>
  );
};

export default chart;
