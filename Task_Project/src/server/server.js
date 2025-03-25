import express, { json } from "express";
import cors from "cors";
import {
  addProject,
  addUser,
  deleteProject,
  findUser,
  showProjects,
} from "./Controllers/controllers.js";

const app = express();

app.use(json());
app.use(cors());

app.get(`/projects`, showProjects);
app.post(`/projects`, addProject);
app.delete(`/projects/:id`, deleteProject);

app.post(`/user/register`, addUser);
app.post(`/user/login`, findUser);

app.listen(5000, () => console.log("Server running on port 5000"));
