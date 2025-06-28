const { createTaskRepo, getAllTaskRepo, getTaskByIdRepo, updateTaskByIdRepo, deleteTaskById } = require("../repository/taskRepo");

async function createTaskServ(taskDetails) {
    try {
        const res = await createTaskRepo(taskDetails)
        return res;
    } catch (error) {
        console.log("error creating task from service", error)
        throw error;
    }
}

async function getAllTaskServ() {
    try {
        const tasks = await getAllTaskRepo()
        return tasks;
    } catch (error) {
        console.log("Error fetching tasks from service", error)
        throw error
    }
}

async function getTaskByIdServ(taskId) {
    try {
        const task = await getTaskByIdRepo(taskId);
        return task;
    } catch (error) {
        console.log("Error fetching tasks from service", error)
        throw error
    }
}

async function updateTaskByIdServ(taskId, updatedData) {
    try {
        const task = await updateTaskByIdRepo(taskId, updatedData);
        return task;
    } catch (error) {
        console.log("Error fetching tasks from service", error)
        throw error
    }
}

async function deleteTaskByIdSer(taskId) {
    try {
        const task = await deleteTaskById(taskId);
        return task;
    } catch (error) {
        console.log("Error fetching tasks from service", error)
        throw error
    }
}

module.exports = {
    createTaskServ,
    getAllTaskServ,
    getTaskByIdServ,
    updateTaskByIdServ,
    deleteTaskByIdSer
}