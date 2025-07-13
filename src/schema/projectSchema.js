const { default: mongoose } = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        minLength: [5, "Title of project must contain 5 characters"],
        required: true
    },
    description: {
        type: String,
        trim: true,
        minLength: [10, "Title of project must contain 10 characters"],
        required: true
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" // This refers to your user model/schema
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true
})

const Project = mongoose.model("Project", projectSchema)
module.exports = Project;