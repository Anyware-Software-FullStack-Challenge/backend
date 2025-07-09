import { Announcement } from "../models/announcement.model";
import { Quiz } from "../models/quiz.model";

export const seedDatabase = async () => {
  const announcementsCount = await Announcement.countDocuments();
  const quizzesCount = await Quiz.countDocuments();

  if (announcementsCount === 0) {
    await Announcement.insertMany([
      {
        title: "Welcome Back!",
        content: "New semester starts next week.",
        author: "Admin",
        role: "events",
      },
      {
        title: "Math Lecture Cancelled",
        content: "Tomorrow’s class is canceled.",
        author: "Dr. Ahmed",
        role: "math",
      },
    ]);
    console.log("✅ Seeded announcements");
  }

  if (quizzesCount === 0) {
    await Quiz.insertMany([
      {
        question: "What is 5 + 7?",
        options: ["10", "12", "14"],
        correctAnswer: "12",
        course: "Math 101",
        topic: "Addition",
        dueDate: new Date("2025-12-20T09:00:00Z"),
      },
      {
        question: "What is the unit of Force?",
        options: ["Joule", "Newton", "Watt"],
        correctAnswer: "Newton",
        course: "Physics 101",
        topic: "Forces",
        dueDate: new Date("2025-12-22T10:00:00Z"),
      },
    ]);
    console.log("✅ Seeded quizzes");
  }
};
