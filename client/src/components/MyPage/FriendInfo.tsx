import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export function FriendInfo() {
    const [users, setUsers] = useState([
      {
        id: 0,
        name: "소열",
      },
      {
        id: 1,
        name: "윤수",
      },
    ]);
  
    const addUser = () => {
      setUsers([
        ...users,
        {
          id: 2,
          name: "동현",
        },
      ]);
    };
  
    // useEffect(()=>{
    //   addUser();
    // },[]);
  
  
    return (
      <div className="info">
        <ul className="info_inner">
          {users.map((user) => 
            <span>
              <Link to={`/${user.id}`}> {user.name} </Link> 
            </span>
          )}
        </ul>
      </div>
    );
  }
  
  