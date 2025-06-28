const {
  createTaskRepo,
  getAllTaskRepo,
  getTaskByIdRepo,
  updateTaskByIdRepo,
  deleteTaskById,
} = require("../repository/taskRepo");
const User = require("../schema/userSchema.js");

async function createTaskServ(taskDetails) {
  try {
    if (taskDetails.assignedTo) {
      const assignedUser = await User.findById(taskDetails.assignedTo);
      if (!assignedUser) {
        throw new Error("Assigned user not found");
      }
    }
    const res = await createTaskRepo(taskDetails);
    return res;
  } catch (error) {
    console.log("error creating task from service", error);
    throw error;
  }
}

async function getAllTaskServ() {
  try {
    const tasks = await getAllTaskRepo();
    return tasks;
  } catch (error) {
    console.log("Error fetching tasks from service", error);
    throw error;
  }
}

async function getTaskByIdServ(taskId) {
  try {
    const task = await getTaskByIdRepo(taskId);
    return task;
  } catch (error) {
    console.log("Error fetching tasks from service", error);
    throw error;
  }
}

async function updateTaskByIdServ(taskId, userId, updatedData) {
  try {

    const task = await getTaskByIdRepo(taskId);
    if (!task) {
      throw { reason: "Task not found", statusCode: 404 };
    }
    // Permission check
    const isOwner =
      task.createdBy?._id?.toString?.() === userId ||
      task.createdBy?.toString?.() === userId;
    const isAssignee = task.assignedTo?.toString() === userId;

    if (!isAssignee && !isOwner) {
      throw { reason: "Unauthorized to updated this task" };
    }

    const updatedTask = await updateTaskByIdRepo(taskId, updatedData);
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
