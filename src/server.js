const express = require("express");
const serverConfig = require("./config/serverConfig.js");
const connectDB = require("./config/dbConfig.js");

const app = express();

app.listen(serverConfig.PORT, async () => {
    await connectDB();
    console.log(`Server got started at port ${serverConfig.PORT}...`);
});
