import { Request, Response } from "express";
import { Quiz } from "../models/quiz.model";

export const getAllQuizzes = async (_req: Request, res: Response) => {
  const quizzes = await Quiz.find();
  res.json(quizzes);
};

export const createQuiz = async (req: Request, res: Response) => {
  const { question, options, correctAnswer, course, topic, dueDate } = req.body;
  const quiz = new Quiz({
    question,
    options,
    correctAnswer,
    course,
    topic,
    dueDate,
  });
  await quiz.save();
  res.status(201).json(quiz);
};

export const updateQuiz = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updated = await Quiz.findByIdAndUpdate(id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: "Not found" });
  res.json(updated);
};

export const deleteQuiz = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = await Quiz.findByIdAndDelete(id);
  if (!deleted) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Deleted successfully" });
};
