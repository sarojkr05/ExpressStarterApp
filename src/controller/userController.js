const createUserService = require("../service/userService");

async function registerUser(req, res) {
    try {
        const user = await createUserService(req.body); 
        return res.status(201).json({
            message: "Successfully created the user",
            success: true,
            data: user,
            error: {}
        });
    } catch (error) {
         console.error("Error in registerUser:", error);
        return res.status(500).json({
            message: error.reason || "Internal server error",
            success: false,
            data: {},
            error: error
        });
    }
}

module.exports = registerUser;