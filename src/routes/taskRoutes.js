const express = require('express');
const { createTaskController } = require('../controller/taskController');

const taskRouter = express.Router();

taskRouter.post("/", createTaskController)

module.exports = taskRouter;