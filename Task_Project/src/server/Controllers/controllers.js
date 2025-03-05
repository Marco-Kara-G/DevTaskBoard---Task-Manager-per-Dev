import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// Rotte API per i task
// app.get("/tasks", async (req, res) => {
//   const tasks = await prisma.task.findMany();
//   res.json(tasks);
// });

// app.post("/tasks", async (req, res) => {
//   const { title } = req.body;
//   const newTask = await prisma.task.create({ data: { title } });
//   res.json(newTask);
// });

// app.put("/tasks", async (req, res) => {
//   const { id, status } = req.body;
//   try {
//     await prisma.task.update({
//       where: { id: id },
//       data: { status: status },
//     });
//     res.status(200).json({ msg: "task status update" });
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

//i use a addproject controller function to add a new projects to my task manager
export const addProject = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newProject = await prisma.project.create({
      data: {
        title: title,
        description: description,
      },
    });
    console.log(newProject);
    res.status(201).json({ msg: `Project add correctly`, newProject });
  } catch (error) {
    res.status(500).json({ msg: { error } });
  }
};

//i use a showProjects controller function to show and get the all list of projects
export const showProjects = async (req, res) => {
  try {
    const projectsList = await prisma.project.findMany();
    return res.status(309).json(projectsList);
  } catch (error) {
    res.status(500).json({ msg: "error in fetch data", error });
  }
};

//i use a deleteProject controller function to delete a projects from my projects list
export const deleteProject = async (req, res) => {
  const { id } = req.body;
  try {
    const deletedProject = await prisma.project.delete({
      where: {
        id: id,
      },
    });

    res.status(200).json({ msg: "project delete correctly", deletedProject });
  } catch (error) {
    res.status(500).json({ msg: "error in delete function: ", error });
  }
};
