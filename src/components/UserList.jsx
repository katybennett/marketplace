import { useState, useEffect } from "react";
import { getUsers } from "../api";
import UserCard from "./UserCard";
import { Link } from "react-router";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Link to="/newuser">
        <button>Create User</button>
      </Link>
      <div className="item-list">
        {users.map((user, i) => (
          <UserCard key={i} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UserList;
