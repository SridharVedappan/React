import React, { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export default function Crud() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.name || !form.email) return;

    if (editId) {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "PUT",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });

      setUsers(
        users.map((update) =>
          update.id === editId ? { ...update, ...form } : update,
        ),
      );
      setEditId(null);
    } else {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });

      const newUser = {
        id: users.length + 1,
        ...form,
      };

      setUsers([...users, newUser]);
    }

    setForm({ name: "", email: "" });
  };

  const handleDelete = (id) => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "DELETE",
    });

    setUsers(users.filter((update) => update.id !== id));
  };

  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email });
    setEditId(user.id);
  };

  return (
    <div className="container">
      <div className="form">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
        />

        <button onClick={handleAdd}>{editId ? "Update" : "Add"}</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className="edit" onClick={() => handleEdit(user)}>
                  Edit
                </button>
                <button
                  className="delete"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
