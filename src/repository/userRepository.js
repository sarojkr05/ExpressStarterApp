const User = require("../schema/userSchema");

async function findUser(parameters) {
    try {
        const res = await User.findOne({ ...parameters })
        return res;
    } catch (error) {
        console.log(error)
    }
}

async function createUser(userDetails) {
    try {
        const response = await User.create(userDetails)
        return response;
    } catch (error) {
         console.log("Error in userRepository:", error);
    }
}

module.exports = {
    findUser,
    createUser
}