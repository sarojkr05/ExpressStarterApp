const express = require("express");
const serverConfig = require("./config/serverConfig.js");
const connectDB = require("./config/dbConfig.js");
const userRouter = require("./routes/userRoutes.js");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/users', userRouter)

app.listen(serverConfig.PORT, async () => {
    await connectDB();
    console.log(`Server got started at port ${serverConfig.PORT}...`);
});
