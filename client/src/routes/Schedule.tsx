import React from "react";
import "../css/schedule.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Schedule() {
  return (
    <div className="container">
      <div className="complete">기상의 완수률</div>

      <div className="today">
        <h2>Today</h2>

        <div className="tody-todo">
          <span className="time">07:00</span>
          <div className="horizon">
            <li>기상</li>
          </div>
        </div>

        <div className="tody-todo">
          <span className="time">10:00</span>
          <div className="horizon">
            <li>세미나</li>
          </div>
        </div>

        <div className="tody-todo">
          <span className="time">10:30</span>
          <div className="horizon">
            <li>코딩테스트</li>
          </div>
        </div>

        <div className="tody-todo">
          <span className="time">12:30</span>
          <div className="horizon">
            <li>이것저것</li>
          </div>
        </div>

        <div className="tody-todo">
          <span className="time">13:30</span>
          <div className="horizon">
            <li>코딩테스트</li>
          </div>
        </div>
      </div>

      <div className="todo">
        <h2>To do List</h2>
        <div className="check-list">
          <FontAwesomeIcon icon={["fas", "check"]} />
          <span>이것저것</span>
        </div>

        <div className="check-list">
          <i className="fas fa-check"></i>
          <span>이것저것</span>
        </div>
      </div>
    </div>
  );
}
