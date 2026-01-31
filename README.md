# HealthCare ChatBot 🏥🤖

An intelligent healthcare chatbot powered by Google Gemini AI. This is a full-stack React + Node.js application that provides medical information and health guidance using real AI responses.

## 📋 What We Built

A **real-time medical chatbot** that:
- Uses **Google Gemini 2.5 Flash-Lite API** for intelligent, context-aware responses
- Provides **accurate health information** on fever, headaches, allergies, anxiety, depression, and more
- Features a **beautiful chat UI** with message bubbles (user on left in purple, bot on right in white)
- Supports **markdown formatting** for well-structured medical advice with bullet points and bold text
- **Auto-scrolls** to the latest message in the chat
- Shows **loading states** while waiting for AI responses

## 🏗️ Tech Stack

**Frontend:**
- React 19.2.0
- Vite (fast build tool)
- React Markdown (for formatted AI responses)
- CSS with custom styling

**Backend:**
- Node.js with ES modules
- Express 5.2.1 (REST API)
- Google Generative AI SDK
- CORS enabled for frontend-backend communication
- Dotenv for secure API key management

## 🛠️ Installation

### Prerequisites
- Node.js (v18+)
- npm
- Google Gemini API Key (free tier: https://aistudio.google.com)

### Step 1: Frontend Setup
```bash
npm install
npm install react-markdown
```

### Step 2: Backend Setup
```bash
cd backend
npm install
npm install @google/generative-ai
```

### Step 3: Configure API Key
Create `.env` in backend folder:
```
GEMINI_API_KEY=your_api_key_here
```

## ▶️ How to Run

**Terminal 1 - Backend:**
```bash
cd backend
node server.js
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

Visit: **http://localhost:5174**

## 💬 Usage Examples

- "I have a fever"
- "How to manage anxiety?"
- "What's a good diet?"
- "I have a headache"

## 🎨 Features

✅ Real-time AI Responses (Gemini 2.5 Flash-Lite)  
✅ Beautiful Chat UI (purple user bubbles, white bot bubbles)  
✅ Auto-scroll to latest messages  
✅ Markdown formatting support  
✅ Loading states with disabled input  
✅ Error handling  

## 📝 Free Tier Limits

- 15 requests per minute
- 1,000 requests per day
- 250,000 tokens per minute

## 🔧 How It Works

1. User types message in frontend
2. Frontend sends to backend via POST /chat
3. Backend forwards to Google Gemini API
4. Gemini processes and responds with medical advice
5. Backend returns formatted response
6. Frontend renders with markdown formatting
7. Chat auto-scrolls to show latest message

## 📁 Project Structure

```
ChatBot-Prototype/
├── src/
│   ├── components/
│   │   ├── ChatForm.jsx      (Input form)
│   │   ├── ChatMessage.jsx   (Message display)
│   │   └── ChatbotIcon.jsx   (Bot avatar)
│   ├── App.jsx               (Main container)
│   ├── index.css             (Styling)
│   └── main.jsx              (Entry point)
├── backend/
│   ├── server.js             (Express API)
│   ├── .env                  (API key)
│   └── package.json
└── README.md
```

## 📊 API Endpoint

### POST /chat
```json
Request: { "prompt": "I have fever" }
Response: { "aiResponse": "Detailed medical advice..." }
```

## 🚀 Future Enhancements

- Message history (localStorage/database)
- Chat export (PDF/JSON)
- Typing indicator
- Copy response button
- Message timestamps
- User authentication

## 📚 Resources

- [Google Gemini API](https://ai.google.dev/)
- [React Docs](https://react.dev/)
- [Express.js](https://expressjs.com/)
- [Vite](https://vitejs.dev/)

---

**Status:** ✅ Fully Functional  
**Last Updated:** February 2026
