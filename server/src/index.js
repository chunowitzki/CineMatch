import OpenAI from 'openai';
import cors from "cors";
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ message: "Server is running!" });
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});