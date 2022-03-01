import { useState, useEffect } from "react";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import user from '../../modules/user';

// interface UserProps {
//   userInfo: string;
//   onName: () => void;
// }

//{ userInfo, onName }: UserProps

export function UserInfo() {
  const [name, setName] = useState("");

  async function getUserName() {
    const userData = await axios.get("http://localhost:3001/mypage");
    console.log(userData.data);
    setName(userData.data);
  }

  useEffect(() => {
    getUserName();
  }, []);

  return (
    <div className="mypage_userInfo">
      <span>이름 : {name}</span>
    </div>
  );
}
