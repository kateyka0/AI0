import React, { useState } from "react";
import ChatWindow from "./component/ChatSection/ChatSection";
import InputBar from "./component/InputBar/InputBar";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { text: message, sender: "user" }]);

    // Імітація відповіді від AI
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Це відповідь від AI", sender: "ai" },
      ]);
    }, 1000);
  };

  return (
    <div className="app">
      <ChatWindow messages={messages} />
      <InputBar onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;




