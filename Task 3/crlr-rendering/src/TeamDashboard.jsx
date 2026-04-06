import React, { useState } from "react";

const teamMembers = [
  { id: 1, name: "Sridhar V", role: "Software Developer" },
  { id: 2, name: "Ananya R", role: "Backend Developer" },
  { id: 3, name: "Karthik S", role: "UI/UX Designer" },
  { id: 4, name: "Priya M", role: "Project Manager" },
  { id: 5, name: "Rahul D", role: "QA Engineer" },
];

export default function TeamDashboard() {
  const [showList, setShowList] = useState(true);
  const [search, setSearch] = useState("");

  const filteredMembers = teamMembers.filter((member) =>
    member.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="dashboard">
      <div className="controls">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {showList &&
        (filteredMembers.length > 0 ? (
          <div className="team-list">
            {filteredMembers.map((member) => (
              <div key={member.id} className="team-card">
                <h2>{member.name}</h2>
                <p>
                  <strong>Role:</strong> {member.role}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-data">No Data Available</p>
        ))}

      <div className="button-container">
        <button onClick={() => setShowList(!showList)}>
          {showList ? "Hide List" : "Show List"}
        </button>
      </div>

      {!showList && <p className="no-data">List is Hidden</p>}
    </div>
  );
}
