// config/serverConfig.js
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL
};
