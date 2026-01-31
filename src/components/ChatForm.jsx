import { useState } from "react";

const ChatForm = ({ setChatHistory }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to chat
    setChatHistory((prev) => [
      ...prev,
      { role: "user", text: message },
    ]);

    const userMessage = message;
    setMessage("");
    setLoading(true);

    try {
      // Call backend API
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userMessage }),
      });

      const data = await response.json();
      
      // Add AI response to chat
      setChatHistory((prev) => [
        ...prev,
        { role: "model", text: data.aiResponse || "Error: No response from AI" },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setChatHistory((prev) => [
        ...prev,
        { role: "model", text: "Error: Backend connection failed" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="chat-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="message-input"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={loading}
      />

      <button type="submit" disabled={!message.trim() || loading}>
        <span className="material-symbols-outlined">{loading ? "hourglass_empty" : "send"}</span>
      </button>
    </form>
  );
};

export default ChatForm;