import React from "react";
import useFetchUsers from "./useFetchUsers";

const Users = () => {
  const { users, loading, error } = useFetchUsers();

  if (loading) return <h2 className="status">Loading...</h2>;
  if (error) return <h2 className="status error">{error}</h2>;

  return (
    <div className="container">
      <h1 className="title">User Details</h1>

      <div className="card-container">
        {users.map((user) => (
          <div key={user.id} className="card">
            <h2>{user.name}</h2>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Website:</strong> {user.website}
            </p>
            <p>
              <strong>Company:</strong> {user.company.name}
            </p>
            <p>
              <strong>City:</strong> {user.address.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
