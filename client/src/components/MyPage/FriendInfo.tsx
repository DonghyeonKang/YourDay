import axios from "axios";
import { useState, useEffect } from "react";
import { Link as ReactRouterDomLink, Link } from 'react-router-dom';
import styled from "styled-components";

export function FriendInfo() {
  const [friends, setFriends] = useState([]);

  const fetchData = async() => {
    try {
      const friend_list = await axios.get(
        "http://localhost:3001/friends/getAllFriends" //TODO session id로 수정
      );
      const array = friend_list.data.map((friend:any) => friend);
      setFriends(array);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  });

  //{`/${user.id}`}

  // const Link = ({ children, ...props }: any) => {
  //   return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
  // };

  // const StyledLink = styled(Link)`
  //   color: white;
  //   text-decoration: none;
  // `;

  return (
    <div className="mypage_friendInfo">
      <div>
        {friends.map((friend:any) => (
          <div key={friend.friend_id}>
            {/* TODO  친구 홈페이지로*/}
            <Link to="#">{friend.name}</Link>
          </div>
         ) )}
      </div>
    </div>
  );
}
