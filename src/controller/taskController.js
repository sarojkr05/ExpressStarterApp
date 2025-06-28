const { createTaskServ, getAllTaskServ, getTaskByIdServ, updateTaskByIdServ, deleteTaskByIdSer } = require("../service/taskService");

async function createTaskController(req, res) {
    try {
        const task = await createTaskServ(req.body);
        res.status(201).json({
            success: true,
            message: "Successfully created the task",
            task: task,
        })
    } catch (error) {
        console.log("error while creating a task", error),
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message,
            data: {},
            error: error
        })
    }
}

async function getAllTaskController(req, res) {
    try {
        const tasks = await getAllTaskServ();
        res.status(200).json({
            success: true,
            message: "All tasks fetched successfully",
            task: tasks,
        })
    } catch (error) {
        console.log("error while fetching all task", error),
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message,
            data: {},
            error: error
        })
    }
}

async function getTaskByIdController(req, res) {
    try {
        const task = await getTaskByIdServ(req.params.taskId)
        if(!task) {
            res.status(404).json({
            success: false,
            message: "Error fetching a task",
            task: {}
        })
        }
        res.status(200).json({
            success: true,
            message: "Task fetched successfully",
            task: task,
        })
    } catch (error) {
        console.log("error while fetching all task", error),
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message,
            data: {},
            error: error
        })
    }
}

async function updateTaskByIdController(req, res) {
    try {
        const task = await updateTaskByIdServ(req.params.taskId, req.body)
        if(!task) {
            res.status(404).json({
            success: false,
            message: "Error updating  task",
            task: {}
        })
        }
        res.status(200).json({
            success: true,
            message: "Task updated successfully",
            task: task,
        })
    } catch (error) {
        console.log("error while fetching all task", error),
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message,
            data: {},
            error: error
        })
    }
}

async function deleteTaskByIdController(req, res) {
    try {
        const task = await deleteTaskByIdSer(req.params.taskId)
        if(!task) {
            res.status(404).json({
            success: false,
            message: "Error updating  task",
            task: {}
        })
        }
        res.status(200).json({
            success: true,
            message: "Task deleted successfully",
        })
    } catch (error) {
        console.log("error while fetching all task", error),
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message,
            data: {},
            error: error
        })
    }
}

module.exports = {
    createTaskController,
    getAllTaskController,
    getTaskByIdController,
    updateTaskByIdController,
    deleteTaskByIdController
}
