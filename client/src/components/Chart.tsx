import React from "react";
import "./Chart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pie, Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { Chart, ArcElement, CategoryScale, registerables } from "chart.js";
Chart.register(ArcElement);
// chart 에서 받을 데이터 chartmode(pie, bar), pie_data(수행한 시간, 낭비한 시간, 미등록 시간), date(현재 날짜)
// bar_data(week{x_element: 월화수목금토일}, month{x_element:1,2,3, 4} (주차), year{x_element: 1,2,3 .. 12})

const chartName = "월";
const pie_data = {
  saveTime: 16,
  wasteTime: 7,
  Unregistered: 1,
};
const date = {
  year: 2022,
  month: 2,
  day: 8,
};
const bar_data = {
  y_element: [20, 40, 70, 0, 0, 0, 0],
};
const month_data = {
  y_element: [20, 70, 20, 40], //4 - 5개
};
const year_data = {
  y_element: [20, 70, 20, 40, 20, 70, 20, 40, 0, 0, 0, 0], //12개
};
const color_data = {
  backGroundColor: ["#46BFBD", "#4D5360", "#AC64AD"],
  hoverBackgoundColor: ["#5AD3D1", "#616774", "#DA92DB"],
};

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
        <div className="main_section_inner_content">
          <h2 className="content_title">{chartName}</h2>
          <div className="content_inner">
            <MDBContainer>
              <Pie data={this.state.dataPie} options={{ responsive: true }} />
            </MDBContainer>
            <div className="explain_color">
              <p>수행한 시간</p>
              <p>낭비한 시간</p>
              <p>미등록 시간</p>
            </div>
          </div>
          <div className="content_comment">
            <h3>Comment</h3>
            <p>오늘 완수한 시간은 총 12시간입니다!</p>
          </div>
        </div>
      </>
    );
  }
}

Chart.register(CategoryScale);
Chart.register(...registerables);
class ChartsPageBar extends React.Component {
  state = {
    dataBar: {
      labels: ["월", "화", "수", "목", "금", "토", "일"],
      datasets: [
        {
          label: '월별 평균 수행시간',
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
            color: 'white'
          },
        },
        x: {
          ticks: {
            color: 'white'
          },
        }
      }
    }
  };

  render() {
    return (
      <>
        <div className="main_section_inner_content">
          <h2 className="content_title">{chartName}</h2>
          <div className="content_inner">
            <MDBContainer>
              <Bar data={this.state.dataBar} options={this.state.options} />
            </MDBContainer>
          </div>
          <div className="content_comment">
            <h3>Comment</h3>
            <p>오늘 완수한 시간은 총 12시간입니다!</p>
          </div>
        </div>
      </>
    );
  }
}

export default ChartsPageBar;
