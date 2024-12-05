import React from "react";
import "./ChatBubble.css";

function ChatBubble({ message, theme }) {
  const isUser = message.sender === "user";

  return (
    <div
      className={`chat-bubble ${isUser ? "user" : "bot"}`}
      style={{
        backgroundColor: isUser ? theme.color : "#f0f0f0",
        color: isUser ? "white" : "black",
        borderRadius: theme.bubbleSize === "large" ? "20px" : "15px",
        animation: "fadeIn 0.5s ease",
      }}
    >
      {message.text}
    </div>
  );
}

export default ChatBubble;
