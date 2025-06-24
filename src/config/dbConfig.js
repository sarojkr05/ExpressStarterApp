const mongoose = require("mongoose");
const serverConfig = require("./serverConfig.js");

const connectDB = async () => {
    try {
        await mongoose.connect(serverConfig.DB_URL);
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB connection failed:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
