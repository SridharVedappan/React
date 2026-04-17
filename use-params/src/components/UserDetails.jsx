import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">User Details</h2>

        <p>
          <b>Name:</b> {user.name}
        </p>
        <p>
          <b>Email:</b> {user.email}
        </p>
        <p>
          <b>Phone:</b> {user.phone}
        </p>
        <p>
          <b>Website:</b> {user.website}
        </p>
        <p>
          <b>Company:</b> {user.company.name}
        </p>

        <h3 className="address">Address</h3>
        <p>{user.address.street}</p>
        <p>{user.address.city}</p>
        <p>{user.address.zipcode}</p>
      </div>
    </div>
  );
}
