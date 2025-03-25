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
  const { title, description, language } = req.body;

  try {
    const newProject = await prisma.project.create({
      data: {
        title,
        description,
        language,
      },
    });

    res.status(201).json({ msg: `Project added correctly`, newProject });
  } catch (error) {
    console.error("Error creating project:", error); // Log dettagliato
    res.status(500).json({ msg: error.message });
  }
};

//i use a showProjects controller function to show and get the all list of projects
export const showProjects = async (req, res) => {
  try {
    const projectsList = await prisma.project.findMany();
    return res.status(200).json(projectsList);
  } catch (error) {
    res.status(500).json({ msg: "error in fetch data", error });
  }
};

//i use a deleteProject controller function to delete a projects from my projects list
export const deleteProject = async (req, res) => {
  const projectId = req.params.id;
  try {
    const deletedProject = await prisma.project.delete({
      where: {
        id: projectId,
      },
    });
    if (!deletedProject) {
      console.error("error: project not found!");
      return;
    }
    res.status(200).json({ msg: "project delete correctly", deletedProject });
  } catch (error) {
    res.status(500).json({ msg: "error in delete function: ", error });
  }
};

export const addUser = async (req, res) => {
  const { name, last_name, username, date_of_birth, email, password } =
    req.body;

  const capitalize = (str) => {
    return str
      .trim()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const nameToUpperCase = capitalize(name);
  const LastNameToUpperCase = capitalize(last_name);

  // Correggi la formattazione della data
  const formatedDate = new Date(date_of_birth);
  if (isNaN(formatedDate.getTime())) {
    return res.status(400).json({ msg: "Invalid date format" });
  }

  try {
    const newUser = await prisma.user.create({
      data: {
        name: nameToUpperCase,
        last_name: LastNameToUpperCase,
        username,
        date_of_birth: formatedDate,
        email,
        password,
      },
    });

    // Correggi il formato della risposta JSON
    res.status(200).json({ msg: "User added correctly", user: newUser });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const findUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userFound = await prisma.user.findUnique({
      where: { email: email },
    });

    if (userFound.username === username && userFound.password === password) {
      return res.status(201).json({ msg: "user found!", userFound });
    } else {
      return res
        .status(201)
        .json({ msg: "Wrong credentials, check again and retry" });
    }
  } catch (error) {
    res.status(500).json({ msg: "no user found" });
  }
};
