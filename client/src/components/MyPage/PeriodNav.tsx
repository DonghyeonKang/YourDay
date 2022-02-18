import { OptionBox } from './optionBox';
import { Link } from 'react-router-dom';
import { EditProps } from '../../routes/Edit';
import "../../routes/css/MyPage.css";

export function PeriodNav(prop: EditProps) {
    return (
      <div className="option">
        <aside className="option_nav">
          <Link className="list" to="/mypage/FriendList">
            목록
          </Link>
          <Link className="edit" to="/mypage/FriendList/edit">
            편집
          </Link>
        </aside>
  
        <OptionBox type={prop.type} name={prop.name} />
      </div>
    );
  }
  
  export interface PeriodNavProps {
    type: string;
    name: string;
  }