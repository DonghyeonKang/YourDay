import { Link } from "react-router-dom";
import "../../routes/css/MyPage.css";

function InfoNav() {
  return (
    <aside className="menu">
      <Link className="menu_profile" to="/mypage">
        프로필
      </Link>
      <Link className="menu_friendList" to="/mypage/friendList">
        친구 목록
      </Link>
    </aside>
  );
}

export default InfoNav;
