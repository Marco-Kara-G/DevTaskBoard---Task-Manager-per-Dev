import express, { json } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(json());
app.use(cors());

// Rotte API per i task
app.get("/tasks", async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

app.post("/tasks", async (req, res) => {
  const { title } = req.body;
  const newTask = await prisma.task.create({ data: { title } });
  res.json(newTask);
});

app.put("/tasks", async (req, res) => {
  const { id, status } = req.body;
  try {
    await prisma.task.update({
      where: { id: id },
      data: { status: status },
    });
    res.status(200).json({ msg: "task status update" });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
