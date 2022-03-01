import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faUser, faBell } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface propTypes {
  selected: number;
}

export default function Header(props: propTypes) {
  const faPropUserIcon = faUser as IconProp;
  const faPropBellIcon = faBell as IconProp;

  return (
    <div className="header">
      <Link className="logo" to={"/Time"}>
        너의하루는,
        <br />
        your day
      </Link>

      <div className="main_menu">
        <Link to={"/time"} className="time" style={props.selected == 0 ? {color: '#FFC2C2'}:{}}>
          Time
        </Link>
        <Link to={"/schedule"} className="schedule" style={props.selected == 1 ? {color: '#FFC2C2'}:{}}>
          Schedule
        </Link>
        <Link to={"/mydays"} className="mydays" style={props.selected == 2 ? {color: '#FFC2C2'}:{}}>
          Mydays
        </Link>
      </div>
      <nav className="navBar">
        <Link to={"/mypage"} className="navButton profile" style={props.selected == 3 ? {color: '#FFC2C2'}:{}}>
          {<FontAwesomeIcon icon={faPropUserIcon} />}
        </Link>
        <Link to={"#"} className="navButton notification">
          <FontAwesomeIcon icon={faPropBellIcon} />
        </Link>
      </nav>
    </div>
  );
}
