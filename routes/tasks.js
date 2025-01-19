import express, { response } from "express";
import {
  addNewTask,
  deleteTask,
  editNewTask,
  getAllTask,
} from "../controllers/tasks.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tasks = await getAllTask();
    if (tasks.length <= 0) {
      return res.status(404).json({ message: "No data found" });
    }
    return res.status(200).json({ data: tasks });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    if (!parseInt(req.params.id)) {
      return res.status(400).json({ error: "Invalid Request" });
    }
    const tasks = await getAllTask({ _id: req.params.id });
    if (tasks.length > 0) {
      return res.status(200).json({ data: tasks });
    }
    return res.status(404).json({ error: "No data found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/add", async (req, res) => {
  try {
    const newTask = await addNewTask(req);
    if (!newTask) {
      console.log(newTask);
      return res.status(400).json({ error: "Error Occured adding New Task" });
    }
    return res
      .status(201)
      .json({ message: "new task added succesfully", data: newTask });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/edit/:id", async (req, res) => {
  try {
    if (parseInt(req.params.id) && req.body) {
      const newEditedTask = await editNewTask(req);
      if (!newEditedTask) {
        return res.status(400).json({ error: "Error occured in edit task" });
      }
      return res
        .status(200)
        .json({ message: "Task updated sucessfully", data: newEditedTask });
    }
    return res.status(400).json({ error: "Invalid Request" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    if (parseInt(req.params.id)) {
      const isTaskDeleted = await deleteTask(req);
      if (!isTaskDeleted) {
        return res
          .status(400)
          .json({ error: "Error occured while deleting the task" });
      }
      return res.status(200).json({ message: "Deleted Data succesfully" });
    }
    return res.status(400).json({ error: "Invalid request" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

export const taskRouter = router;
