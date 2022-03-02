import React from "react";
import "./calendar.css";
import { prevMonth, goToday, nextMonth } from "./Cal-type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Calandar() {
  return (
    <div className="container">
      <div>
        <FontAwesomeIcon icon={["fas", "chevron-left"]} onClick={prevMonth} />
        <span className="month" onClick={goToday}></span>
        <FontAwesomeIcon icon={["fas", "chevron-right"]} onClick={nextMonth} />
      </div>

      <table id="schedule">
        <tr className="first">
          <th style={{ color: "#930000" }} id="eng_day">
            SUN
          </th>
          <th>MON</th>
          <th>TUE</th>
          <th>WED</th>
          <th>THU</th>
          <th>FRI</th>
          <th>SAT</th>
        </tr>
        /*
        <td className="td-select">
          <span className="select">14</span>
        </td>
        */
      </table>
    </div>
  );
}
