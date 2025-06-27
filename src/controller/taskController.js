const { createTaskServ } = require("../service/taskService");

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

module.exports = {
    createTaskController
}