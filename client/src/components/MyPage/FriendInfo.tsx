import axios from "axios";
import { useState, useEffect } from "react";
import { Link as ReactRouterDomLink } from "react-router-dom";
import styled from "styled-components";

export function FriendInfo() {
  const [friends, setFriends] = useState([]);

  async function fetchData() {
    try {
      const friend_list = await axios.get(
        "http://localhost:3001/friends/getAllFriends/2" //TODO session id로 수정
      );
      const array = friend_list.data.map((friend:any) => (friend));
      setFriends(array);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  });

  //{`/${user.id}`}

  const Link = ({ children, ...props }: any) => {
    return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
  };

  const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
  `;

  return (
    <div className="mypage_friendInfo">
      <div>
        {friends.map((friend:any) => (
          <div key={friend.friend_id}>
            {/* <Link to="#">{friend.name}</Link> */}
            {friend.name}
          </div>
         ) )}
      </div>
    </div>
  );
}
