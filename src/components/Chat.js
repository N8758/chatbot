import React, { useState } from "react";
import ChatBubble from "./ChatBubble";
import axios from "axios";
import "./Chat.css";

function Chat({ theme }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false); // Added state for loading

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    setLoading(true); // Show the spinner

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: input }],
        },
        {
          headers: {
            Authorization: `Bearer YOUR_API_KEY`,
          },
        }
      );

      const aiMessage = { sender: "bot", text: response.data.choices[0].message.content };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error fetching from OpenAI:", error);
    } finally {
      setLoading(false); // Hide the spinner once done
    }
    setInput("");
  };

  return (
    <div className="chat">
      <div className="messages">
        {messages.map((msg, index) => (
          <ChatBubble key={index} message={msg} theme={theme} />
        ))}
        {loading && <div className="loading-spinner">...</div>} {/* Spinner when loading */}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
