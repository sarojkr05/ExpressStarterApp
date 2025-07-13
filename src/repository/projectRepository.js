const Project = require("../schema/projectSchema");
const Task = require("../schema/taskSchema");

async function createProjectRepo(projectDetails) {
    try {
        const res = await Project.create(projectDetails)
        return res;
    } catch (error) {
        console.log("Failed creating project from repo", error)
        throw error
    }
}

async function getAllProjectRepo() {
    try {
        const projects = await Project.find().populate("assignedTo", "firstName lastName email")
        return projects
    } catch (error) {
        console.log("Error fetching all project", error)
        throw error;
    }
}

async function getProjectByIdRepo(projectId) {
    try {
        const project = await Project.findById(projectId)
        .populate("assignedTo", "firstName email")
        .populate("createdBy", "_id")
        return project
    } catch (error) {
        console.log("Error fetching a project", error)
        throw error;
    }
}

async function updateProjectByIdRepo(projectId, updatedData) {
    try {
        const project = await Project.findByIdAndUpdate(projectId, updatedData, {
            new: true, runValidators: true
        });
        return project
    } catch (error) {
        console.log("Error updating project", error)
        throw error;
    }
}

async function deleteProjectById(projectId) {
    try {
        const project = await Project.findByIdAndDelete(projectId);
        return project
    } catch (error) {
        console.log("Error deleting project", error)
        throw error;
    }
}

module.exports = {
    createProjectRepo,
    getAllProjectRepo,
    getProjectByIdRepo,
    updateProjectByIdRepo,
    deleteProjectById
}
