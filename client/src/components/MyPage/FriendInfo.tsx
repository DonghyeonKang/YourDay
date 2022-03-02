import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function FriendInfo() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(0);

  async function fetchData() {
    try {
      const friendList = await axios.get(
        "http://localhost:3001/mypage/friendList"
      );

      setUsers(friendList.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  //{`/${user.id}`}
  return (
    <div className="mypage_friendInfo">
      {users.map((user) => (
        <span>
          <Link to="#" style={{ textDecoration: "none", color: "white" }}>
            {" "}
            {user}{" "}
          </Link>
        </span>
      ))}
      {/* 친구 요청목록  */}
      {/* <span> 소열 </span>
          <span> 윤수 </span> */}
    </div>
  );
}
