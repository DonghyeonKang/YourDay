import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faUser, faBell } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

export default function Header() {
  const faPropUserIcon = faUser as IconProp;
  const faPropBellIcon = faBell as IconProp;

  return (
    <div className="header">
      <Link to={"/Time"}>
        <div className="logo">
          너의하루는,
          <br />
          your day
        </div>
      </Link>

      <div className="main_menu">
        <Link to={"/time"}>Time</Link>
        <Link to={"/schedule"}>Schedule</Link>
        <Link to={"/mydays"}>Mydays</Link>

        <nav className="navBar">
          <Link to={"/mypage"}>
            {<FontAwesomeIcon icon={faPropUserIcon} />}
          </Link>
          <Link to={"#"}>
            <FontAwesomeIcon icon={faPropBellIcon} />
          </Link>
        </nav>
      </div>
    </div>
  );
}
