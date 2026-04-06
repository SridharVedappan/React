import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Sridhar V",
    role: "Frontend Developer",
    email: "sridhar@example.com",
  },
  {
    id: 2,
    name: "Ananya R",
    role: "Backend Developer",
    email: "ananya@example.com",
  },
  {
    id: 3,
    name: "Karthik S",
    role: "UI/UX Designer",
    email: "karthik@example.com",
  },
  {
    id: 4,
    name: "Priya M",
    role: "Project Manager",
    email: "priya@example.com",
  },
  { id: 5, name: "Rahul D", role: "QA Engineer", email: "rahul@example.com" },
];

export default function TeamList() {
  return (
    <div className="team-list">
      {teamMembers.map((member) => (
        <div key={member.id} className="team-card">
          <h2>{member.name}</h2>
          <p>
            <strong>Role:</strong> {member.role}
          </p>
          <p>
            <strong>Email:</strong> {member.email}
          </p>
        </div>
      ))}
    </div>
  );
}
