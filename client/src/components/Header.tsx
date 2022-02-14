import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div>
      <div className="logo">
        너의하루는,
        <br />
        your day
      </div>
      <div className="item">Time</div>
      <div className="item">Schedule</div>
      <div className="item">My Days</div>
      <div>
        <FontAwesomeIcon icon={["fas", "bell"]} />
        <FontAwesomeIcon icon={["fas", "user"]} />
      </div>
    </div>
  );
}
