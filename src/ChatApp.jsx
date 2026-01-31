import { useState } from "react";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { sender: "ai", text: data.aiResponse }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { sender: "ai", text: "Error! Try again." }]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", fontFamily: "Arial" }}>
      <h2>Healthcare Chatbot</h2>
      <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px", height: "400px", overflowY: "auto" }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ textAlign: msg.sender === "user" ? "right" : "left", margin: "10px 0" }}>
            <span style={{ display: "inline-block", padding: "8px 12px", borderRadius: "16px", backgroundColor: msg.sender === "user" ? "#4caf50" : "#eee", color: msg.sender === "user" ? "#fff" : "#000" }}>
              {msg.text}
            </span>
          </div>
        ))}
        {loading && <p>AI is typing...</p>}
      </div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyPress} placeholder="Type your message..." style={{ width: "80%", padding: "10px", marginTop: "10px", borderRadius: "8px" }} />
      <button onClick={sendMessage} style={{ padding: "10px 20px", marginLeft: "10px", borderRadius: "8px", backgroundColor: "#4caf50", color: "#fff", border: "none", cursor: "pointer" }}>Send</button>
    </div>
  );
};

export default ChatApp;
