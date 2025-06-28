const Task = require("../schema/taskSchema");

async function createTaskRepo(taskDetails) {
    try {
        const res = await Task.create(taskDetails)
        return res;
    } catch (error) {
        console.log("Failed creating taks from repo", error)
        throw error
    }
}

async function getAllTaskRepo() {
    try {
        const tasks = await Task.find();
        return tasks
    } catch (error) {
        console.log("Error fetching all task", error)
        throw error;
    }
}

async function getTaskByIdRepo(taskId) {
    try {
        const task = await Task.findById(taskId);
        return task
    } catch (error) {
        console.log("Error fetching all task", error)
        throw error;
    }
}

async function updateTaskByIdRepo(taskId, updatedData) {
    try {
        const task = await Task.findByIdAndUpdate(taskId, updatedData, {
            new: true, runValidators: true
        });
        return task
    } catch (error) {
        console.log("Error fetching all task", error)
        throw error;
    }
}

async function deleteTaskById(taskId) {
    try {
        const task = await Task.findByIdAndDelete(taskId);
        return task
    } catch (error) {
        console.log("Error fetching all task", error)
        throw error;
    }
}

module.exports = {
    createTaskRepo,
    getAllTaskRepo,
    getTaskByIdRepo,
    updateTaskByIdRepo,
    deleteTaskById
}
