import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Users List</h1>

      <ul
        style={{
          listStyle: "none",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          padding: 0,
          width: "80%",
          margin: "0 auto",
        }}
      >
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              fontSize: "18px",
              cursor: "pointer",
              padding: "20px",
              margin: "20px",
              width: "300px",
              color: "white",
              background: "#62c400",
              borderRadius: "8px",
              fontWeight: "bold",
              textAlign: "center",
            }}
            onClick={() => navigate(`/user/${user.id}`)}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
