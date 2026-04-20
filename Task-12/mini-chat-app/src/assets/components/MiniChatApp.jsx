import React, { useState } from "react";

export default function MiniChatApp() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div>
      <h2 className="Title">Mini Chat App</h2>
      <div className="chat-container">
        <div className="input-area">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={handleChange}
          />
          <button onClick={handleSend}>Send Message</button>
        </div>

        <div className="messages">
          {messages.map((msg, index) => (
            <p key={index} className="message">
              {msg}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
