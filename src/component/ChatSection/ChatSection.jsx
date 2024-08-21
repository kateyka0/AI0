import React from "react";
import css from './ChatSection.module.css';

function ChatWindow({ messages }) {
  return (
    <div className={css.chatWindow}>
      {messages.map((message, index) => (
        <div
          key={index}
          className={`${css.message} ${message.sender === "user" ? css.user : css.ai}`}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
}

export default ChatWindow;
