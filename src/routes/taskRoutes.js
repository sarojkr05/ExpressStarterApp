const express = require("express");
const {
  createTaskController,
  getAllTaskController,
  getTaskByIdController,
  updateTaskByIdController,
  deleteTaskByIdController,
} = require("../controller/taskController");
const authMiddleware = require("../middleware/authMiddleware");

const taskRouter = express.Router();

// Protect all routes below with auth middleware
taskRouter.use(authMiddleware); // applies to all routes below

taskRouter.post("/", createTaskController);
taskRouter.get("/", getAllTaskController);
taskRouter.get("/:taskId", getTaskByIdController);
taskRouter.put("/:taskId", updateTaskByIdController);
taskRouter.delete("/:taskId", deleteTaskByIdController);

module.exports = taskRouter;
