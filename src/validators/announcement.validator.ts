import { z } from "zod";

export const announcementSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(5),
  author: z.string().min(2),
  role: z.enum(["math", "physics", "management", "events", "other"]),
});
