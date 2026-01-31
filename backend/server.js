import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Root GET route
app.get("/", (req, res) => {
  res.send("Backend is running 👋");
});

// Chat route
app.post("/chat", async (req, res) => {
  const userMessage = req.body.prompt;
  if (!userMessage) return res.status(400).json({ error: "No prompt provided" });

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: { text: userMessage },
          maxOutputTokens: 256,
        }),
      }
    );

    const data = await response.json();
    const aiText = data?.candidates?.[0]?.output || "No answer from AI.";

    res.json({ aiResponse: aiText });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
