import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Root GET route
app.get("/", (req, res) => {
  res.send("Backend is running 👋");
});

// Chat route
app.post("/chat", async (req, res) => {
  const userMessage = req.body.prompt;
  if (!userMessage) return res.status(400).json({ error: "No prompt provided" });

  try {
    console.log("User message:", userMessage);
    
    // Use Gemini 2.5 Flash-Lite model (best free tier limits)
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
    
    const result = await model.generateContent(userMessage);
    const response = await result.response;
    const text = response.text();
    
    console.log("Response:", text);
    res.json({ aiResponse: text });
  } catch (err) {
    console.error("Full Error:", err.message);
    console.error("Error Details:", err);
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
