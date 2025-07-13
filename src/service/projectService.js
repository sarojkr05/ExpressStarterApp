const { createProjectRepo, getAllProjectRepo } = require("../repository/projectRepository.js");
const {
  createTaskRepo,
  getAllTaskRepo,
  getTaskByIdRepo,
  updateTaskByIdRepo,
  deleteTaskById,
} = require("../repository/taskRepo");
const User = require("../schema/userSchema.js");

async function createProjectServ(projectDetails) {
  try {
    if (projectDetails.assignedTo) {
      const assignedUser = await User.findById(projectDetails.assignedTo);
      if (!assignedUser) {
        throw new Error("Assigned user not found");
      }
    }
    const res = await createProjectRepo(projectDetails);
    return res;
  } catch (error) {
    console.log("error creating project from service", error);
    throw error;
  }
}

async function getAllProjectServ() {
  try {
    const projects = await getAllProjectRepo();
    return projects;
  } catch (error) {
    console.log("Error fetching projects from service", error);
    throw error;
  }
}

async function getProjectByIdServ(projectId) {
  try {
    const project = await getTaskByIdRepo(projectId);
    return project;
  } catch (error) {
    console.log("Error fetching project from service", error);
    throw error;
  }
}

async function updateProjectByIdServ(projectId, userId, updatedData) {
  try {

    const project = await getTaskByIdRepo(projectId);
    if (!project) {
      throw { reason: "Project not found", statusCode: 404 };
    }
    // Permission check
    const isOwner =
      project.createdBy?._id?.toString?.() === userId ||
      project.createdBy?.toString?.() === userId;
    const isAssignee = task.assignedTo?.toString() === userId;

    if (!isAssignee && !isOwner) {
      throw { reason: "Unauthorized to updated this task" };
    }

    const updatedProject = await updateTaskByIdRepo(taskId, updatedData);
    return updatedTask;

  } catch (error) {
    console.log("Error fetching tasks from service", error);
    throw error;
  }
}

async function deleteTaskByIdSer(taskId, userId) {
  try {
    // This checks if the owner of task and the assigneed is valid or not, that's all
    const task = await getTaskByIdRepo(taskId);
    if (!task) {
      throw { reason: "Task not found", statusCode: 404 };
    }

    const isOwner =
      task.createdBy?._id?.toString?.() === userId ||
      task.createdBy?.toString?.() === userId;
    const isAssignee = task.assignedTo?.toString() === userId;

    if (!isAssignee && !isOwner) {
      throw { reason: "Unauthorized to delete this task" };
    }

    const deletedTask = await deleteTaskById(taskId);
    return deletedTask;

  } catch (error) {
    console.log("Error deleting task from service", error);
    throw error;
  }
}


module.exports = {
  createTaskServ,
  getAllTaskServ,
  getTaskByIdServ,
  updateTaskByIdServ,
  deleteTaskByIdSer,
};
