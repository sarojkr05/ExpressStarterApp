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
module.exports = {
    createTaskRepo
}