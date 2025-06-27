const { createTaskRepo } = require("../repository/taskRepo");

async function createTaskServ(taskDetails) {
    try {
        const res = await createTaskRepo(taskDetails)
        return res;
    } catch (error) {
        console.log("error creating task from service", error)
        throw error;
    }
}

module.exports = {
    createTaskServ
}