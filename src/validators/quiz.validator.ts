import { z } from "zod";

export const quizSchema = z.object({
  question: z.string().min(5),
  options: z.array(z.string()).min(2),
  correctAnswer: z.string(),
  course: z.string(),
  topic: z.string(),
  dueDate: z.coerce.date(),
});
