import { useState, useEffect, useRef } from 'react';
import ChatbotIcon from './components/ChatbotIcon';
import ChatForm from './components/ChatForm';
import ChatMessage from './components/ChatMessage';

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  // 🔥 REF for auto-scroll
  const chatBodyRef = useRef(null);

  // 🔥 Auto-scroll when chatHistory updates
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [chatHistory]);

  return (
    <div className="container">
      <div className="chatbot-popup">
        <div className="chatbot-bg-image" style={{ backgroundImage: 'url(/robot-doctor.png.jpeg)' }}></div>

        
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">HealthCare Bot</h2>
          </div>
        </div>

        {/* 🔥 ref attached here */}
        <div className="chat-body" ref={chatBodyRef}>
          <div className="message bot-message">
            <p className="message-text">
              Hey there <br /> How can I help you?
            </p>
          </div>

          {/* Render chat history */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        <div className="chat-footer">
          <ChatForm setChatHistory={setChatHistory} />
        </div>
      </div>
    </div>
  );
};

export default App;