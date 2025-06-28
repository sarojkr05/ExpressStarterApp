const express = require("express");
const {
  createTaskController,
  getAllTaskController,
  getTaskByIdController,
  updateTaskByIdController,
  deleteTaskByIdController,
} = require("../controller/taskController");

const taskRouter = express.Router();

taskRouter.post("/", createTaskController);
taskRouter.get("/", getAllTaskController);
taskRouter.get("/:taskId", getTaskByIdController);
taskRouter.put("/:taskId", updateTaskByIdController);
taskRouter.delete("/:taskId", deleteTaskByIdController);

module.exports = taskRouter;
