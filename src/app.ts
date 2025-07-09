// src/app.ts
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import announcementRoutes from "./routes/announcement.routes";
import quizRoutes from "./routes/quiz.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/announcements", announcementRoutes);
app.use("/api/quizzes", quizRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

// DB connect + start server
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });
