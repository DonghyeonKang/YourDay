import "../../routes/css/MyPage.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faSearch } from "@fortawesome/free-solid-svg-icons";

import { PeriodNavProps } from "./PeriodNav";
import { useState, useEffect } from 'react';
import axios from "axios";
import { faXbox } from "@fortawesome/free-brands-svg-icons";

export function OptionBox(prop: PeriodNavProps) {
  const [searchEmail, setsearchEmail] = useState("");
  const [friend, setFriend] = useState("");
  const [friendExist, setFriendExist] = useState(false);
  const [requestTo, setRequestTo] = useState("");
  const [reqStatus, setReqStatus] = useState("");
  const [reqFriendsName, setReqFriendsName] = useState([]);


  const fetchReqList = async() => {
    try {
      const friend_req__list = await axios.get(
        "http://localhost:3001/mypage/friendReqList"
      );
      const array = friend_req__list.data[0].map((req:any)=> req);
      setReqFriendsName(array);

    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchReqList();
  });
  const faPropIcon = faSearch as IconProp;
  const faCheckIcon = faCheck as IconProp;


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: email } = e.target;
    setsearchEmail(email);
  };

  const handleSearch = async () => {
    console.log("search : " + searchEmail);

    await axios
      .get(`http://localhost:3001/mypage/friendList/edit/${searchEmail}`)
      .then((result) => {
        setFriend(result.data);
        setFriendExist(true);
        setRequestTo(searchEmail);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setFriendExist(false);
          setFriend("존재하지 않는 유저");
        }
      });
  };



  const handleFriendRequest = async () => {
    // setReqStatus("send");
    console.log("send");

    await axios
      .post("http://localhost:3001/friends/req/send", {email: requestTo}, {})
      .then((e) => {
        if(e.data === "duplicated request"){
          setFriend("발송된 요청입니다.");
        }
      });
      
    //친구 요청
    // await axios
    //   .post("http://localhost:3001/friends/req/send", { name: requestTo }, {})
    //   .then((e) => {
    //     if(e.status === 200) {
          //이미 보낸 요청처리 => DB
          
          //1.해당유저 의 2.reqFriend에 있는지
          //userDB에서 이름으로 정보->정보내에 reqFriendId email에 있는지 있으면, 또 추가안되게, 없으면 추가되게service

          //화면에 메세지 띄우기 (친구 요청을 보냈습니다.)
          //이미 보낸요청입니다 => 초록색으로 표시바뀌기
      //   }
      // });
  };


  const handleAccept = async(id:any, email:string) => {
    await axios
      .delete(`http://localhost:3001/friends/req/delete/${id}`)
      .then(async(result) => {
        if(result.status === 200) {
          await axios
            .post(`http://localhost:3001/friends`, {email,})
            .then((e)=> {
              console.log(e);
            });
        }
      })
  }

  
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <div className="optionBox">
      <h3 className="optionBox_title"> {prop.title} </h3>
      {prop.code === "edit" ? (
        <form onSubmit={handleSubmit}>
          <div className="optionBox_inner">
            <input
              type="text"
              value={searchEmail}
              onChange={onChange}
              name="name"
            ></input>
            <FontAwesomeIcon
              onClick={handleSearch}
              type="submit"
              icon={faPropIcon}
              className="search"
            />
          </div>
          <div className="optionBox_inner-searchResult">
            {friendExist !== true ? (
              <div className="optionBox_inner-fail">
                <span> {friend} </span>
              </div>
            ) : (
              <div className="optionBox_inner-success">
                <span> {friend} </span>
                {friend !== "발송된 요청입니다." ?
                <FontAwesomeIcon
                  onClick={handleFriendRequest}
                  type="submit"
                  icon={faCheckIcon}
                  className="friendRequest"
                />
                :
                <></>
              }
              </div>
            )}
          </div>
        </form>
      ) : (
        <>
          <div>
            {reqFriendsName.map((req:any) => (
              <div key={req.received_req__id}>
                <span>{req.name}</span>
                <button onClick={ () => handleAccept(`${req.received_req__id}`, req.email)}>O</button>
                <button>X</button> 
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
