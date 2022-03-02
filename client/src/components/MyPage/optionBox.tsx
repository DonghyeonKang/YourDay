import "../../routes/css/MyPage.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { PeriodNavProps } from "./PeriodNav";
import { useState } from "react";
import axios from "axios";

export function OptionBox(prop: PeriodNavProps) {
  const [searchName, setSearchName] = useState("");
  const [friend, setFriend] = useState("");
  const [ friendExist, setFriendExist ] = useState(false);

  const [requestTo, setRequestTo] = useState("");

  const [request, setRequest] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: name } = e.target;
    setSearchName(name);
  };

  const faPropIcon = faSearch as IconProp;

  const handleSearch = async () => {
    console.log(searchName);
    console.log("search : " + searchName);

    await axios
      .get(`http://localhost:3001/mypage/friendList/edit/${searchName}`)
      .then((result) => {
        setFriend(result.data);
        setFriendExist(true);
        setRequestTo(result.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setFriendExist(false);
          setFriend("존재하지 않는 유저");
        }
      });
  };

  const handleFriendRequest = async () => {
    setRequest("send");

    //친구 요청 부분
    // await axios.get(`http://localhost:3001/mypage/`)
    // .then()
    // await axios.post('http://localhost:3001/friends', {name: requestTo} ,{})
    // .then((result) => {

    //   console.log(`결과: ${result.data}`);
    // })
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <div className="optionBox">
      <h2 className="optionBox_title"> {prop.title} </h2>
      {prop.code === "edit" ? (
        <form onSubmit={handleSubmit}>
          <div className="optionBox_inner">
            <input
              type="text"
              value={searchName}
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
                <button type="submit" onClick={handleFriendRequest}>
                  O
                </button>
                <button>X</button>
              </div>
            )}
          </div>
        </form>
      ) : (
        <>
          {request !== "" ? (
            <>
              <span>hi</span>
              <button>수락</button>
              <button>거절</button>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
}
