const express = require("express");
const serverConfig = require("./config/serverConfig.js");
const connectDB = require("./config/dbConfig.js");
const userRouter = require("./routes/userRoutes.js");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes.js");
const taskRouter = require("./routes/taskRoutes.js");

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// this is the place where the endpoints starts from
app.use('/users', userRouter)
app.use('/auth', authRoutes)
app.use('/task', taskRouter)

app.listen(serverConfig.PORT, async () => {
    await connectDB();
    console.log(`Server got started at port ${serverConfig.PORT}...`);
});
