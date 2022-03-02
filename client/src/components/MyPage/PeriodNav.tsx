import { OptionBox } from "./optionBox";
import { Link } from "react-router-dom";
import "../../routes/css/MyPage.css";
import { useState } from "react";

export function PeriodNav() {
  const [codeName, setCodeName] = useState("list");
  const [titleName, setTitleName] = useState("요청 목록");

  return (
    <div className="option">
      <aside className="option_nav">
        <div
          className="list"
          onClick={() => {
            setCodeName("list");
            setTitleName("요청 목록");
          }}
        >
          목록
        </div>
        <div
          className="edit"
          onClick={() => {
            setCodeName("edit");
            setTitleName("친구 추가");
          }}
        >
          편집
        </div>
      </aside>

      <OptionBox code={codeName} title={titleName} />
    </div>
  );
}

export interface PeriodNavProps {
  code: string;
  title: string;
}
