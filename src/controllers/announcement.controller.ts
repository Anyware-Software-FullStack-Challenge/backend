import { Request, Response } from "express";
import { Announcement } from "../models/announcement.model";

export const getAllAnnouncements = async (_req: Request, res: Response) => {
  const announcements = await Announcement.find();
  res.json(announcements);
};

export const createAnnouncement = async (req: Request, res: Response) => {
  const { title, content, author, role } = req.body;
  const newAnnouncement = new Announcement({ title, content, author, role });
  await newAnnouncement.save();
  res.status(201).json(newAnnouncement);
};

export const updateAnnouncement = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updated = await Announcement.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updated) return res.status(404).json({ message: "Not found" });
  res.json(updated);
};

export const deleteAnnouncement = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = await Announcement.findByIdAndDelete(id);
  if (!deleted) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Deleted successfully" });
};
