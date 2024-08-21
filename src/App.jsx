import React, { useState } from "react";
import ChatWindow from "./component/ChatSection/ChatSection";
import InputBar from "./component/InputBar/InputBar";
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { text: message, sender: "user" }]);

    // Имитируем ответ от AI
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Это ответ от AI", sender: "ai" },
      ]);
    }, 1000);
  };

  return (
    <div className=".container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="chat-container">
          <ChatWindow messages={messages} />
          <InputBar onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}

export default App;



