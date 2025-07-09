import { Router } from "express";
import {
  getAllQuizzes,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} from "../controllers/quiz.controller";

const router = Router();

router.get("/", getAllQuizzes);
router.post("/", createQuiz);
router.put("/:id", updateQuiz);
router.delete("/:id", deleteQuiz);

export default router;
