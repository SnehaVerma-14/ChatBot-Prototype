import { useState } from "react";

const ChatForm = ({ setChatHistory }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setChatHistory((prev) => [
      ...prev,
      { sender: "user", text: message },
    ]);

    setMessage("");
  };

  return (
    <form className="chat-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="message-input"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button type="submit" disabled={!message.trim()}>
        <span className="material-symbols-outlined">send</span>
      </button>
    </form>
  );
};

export default ChatForm;