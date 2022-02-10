import React from 'react';
import { renderCalnder, goToday, prevMonth, nextMonth } from '../assets/calendar';

export default function Calandar(){
    return (
        <div className="container">
            <div>
                <i className="fas fa-chevron-left arrow-icon" onclick="prevMonth();"></i>
                <span className="month" onClick= { goToday }></span>
                <i className="fas fa-chevron-right arrow-icon" onclick="nextMonth();"></i>
            </div>
  
            <table id="schedule">
                <tr className="first">
                    <th style={{color:'#930000'}} id="eng_day">SUN</th>
                    <th>MON</th>
                    <th>TUE</th>
                    <th>WED</th>
                    <th>THU</th>
                    <th>FRI</th>
                    <th>SAT</th>
                </tr>
  
          // <td className="td-select"><span className="select">14</span></td> 
            </table>
      </div>







    );
}