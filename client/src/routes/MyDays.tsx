import React, { useEffect, useState } from "react";
import "./css/MyDays.css";
import Chart from "../components/Chart/Chart";
import Header from "../components/Header";
import styled from "styled-components";
import img from "../assets/backgound.png";

const StyledDiv = styled.div`
  & {
    position: relative;
    width: 100%;
    min-height: 100%;
    height: auto;
    margin: 0;
    background-image: url("${img}");
    background-size: cover; 
  }
  
  &:before {
    content: "";
    background-position: 50% 50%;
    z-index: -100;
    opacity: 0.9;
    position: absolute;
    height: 100%;
    width: 100%;
  }
`;

interface dataTypes {
  chart_id: number;
  time: number;
  date: number;
  mode: number;
  member_id: string;
}

// 가져온 데이터 수정
function editData(data: dataTypes[], n: number): number[][] {
  const tmp = data.filter((v) => v.mode == n);
  const editedData = tmp.map((a) => {
    return [a.date, a.time];
  });
  return editedData.sort();
}

//TODO 세션ID 리턴
function getUserId() {}

//mode 별 데이터 리턴
function getDataByMode(mode: number, data: number[][][]): number[][] {
  return data[mode];
}

function MyDays() {
  const [chartType, setChartType] = useState(0);
  const [chartMode, setChartMode] = useState(0);
  const [dataset, setDataset] = useState([[[0]]]);
  const [data, setData] = useState([[0]]);
  const [chartName, setChartName] = useState("일");
  const [navButtonName, setNavButtonName] = useState([
    "day selected",
    "week",
    "month",
    "year",
  ]);

  // 데이터 받아오기
  useEffect(() => {
    fetch(`http://localhost:3001/mydays/123123413412414`) //TODO id로 바꿔줘야함
      .then((res) => res.json())
      .then(
        (result) => {
          const tmp = [];

          for (let i = 0; i < 3; i++) {
            tmp.push(editData(result, i));
          }
          setDataset(tmp);
        }, // 주의: 컴포넌트에 있는 실제 버그로 인해 발생한 예외를 놓치지 않고 처리하기 위해서는 catch() 블록보다는 여기서 에러를 다뤄주는 게 중요합니다.
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <StyledDiv>
      <Header selected={2} />
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
                  setChartName("주");
                  setData(getDataByMode(0, dataset));
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
                  setChartName("월");
                  setData(getDataByMode(1, dataset));
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
                  setChartName("년");
                  setData(getDataByMode(2, dataset));
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
    </StyledDiv>
  );
}

export default MyDays;
