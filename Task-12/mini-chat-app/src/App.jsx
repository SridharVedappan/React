import { useState } from "react";
import "./App.css";
import MiniChatApp from "./assets/components/MiniChatApp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MiniChatApp />
    </>
  );
}

export default App;
