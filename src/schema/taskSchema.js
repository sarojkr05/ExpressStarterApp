const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: [5, "The title of a task must contain 5 characters"],
        trim: true
    },
    description: {
        type: String,
        required: true,
        minLength: [10, "The title of a task must contain 10 characters"],
        trim: true
    },
    status: {
        type: String,
        enum: ["pending", "completed"],
        default: "pending"
    },
    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "low"
    }
},
    {timestamps: true}
);
const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
