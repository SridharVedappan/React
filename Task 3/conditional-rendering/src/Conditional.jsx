import React, { useState } from "react";

function Conditional() {
  const [mood, setMood] = useState("");

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Conditional Rendering</h1>

      <div
        style={{
          width: "200px",
          height: "200px",
          margin: "20px auto",
          backgroundColor:
            mood === "Happy"
              ? "green"
              : mood === "Sad"
                ? "blue"
                : mood === "Angry"
                  ? "red"
                  : "#000000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#ffffff",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        {mood === "Happy"
          ? "I am Happy Now 😂"
          : mood === "Sad"
            ? "I am Sad Now 😒"
            : mood === "Angry"
              ? "I am Angry Now 😡"
              : "Click Your Mood"}
      </div>

      <div>
        <button
          onClick={() => setMood("Happy")}
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "10px 20px",
            border: "none",
            margin: "5px",
            cursor: "pointer",
          }}
        >
          Happy
        </button>
        <button
          onClick={() => setMood("Sad")}
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px 20px",
            border: "none",
            margin: "5px",
            cursor: "pointer",
          }}
        >
          Sad
        </button>
        <button
          onClick={() => setMood("Angry")}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "10px 20px",
            border: "none",
            margin: "5px",
            cursor: "pointer",
          }}
        >
          Angry
        </button>
      </div>
    </div>
  );
}

export default Conditional;
