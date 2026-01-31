import ChatbotIcon from './ChatbotIcon';
import ReactMarkdown from 'react-markdown';

const ChatMessage = ({ chat }) => {
  return (
    <div className={`message ${chat.role === "model" ? "bot" : "user"}-message`}>
      {chat.role === "model" && <ChatbotIcon />}
      <div className="message-text">
        {chat.role === "model" ? (
          <ReactMarkdown>{chat.text}</ReactMarkdown>
        ) : (
          chat.text
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
