const loginUser = require("../service/authService");

async function login(req, res) {
    try {
        const loginPayload = req.body;

        const { token, userData } = await loginUser(loginPayload);

        res.cookie("authToken", token, {
            httpOnly: true,
            secure: false, // should be true in production with HTTPS
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        return res.status(200).json({
            success: true,
            message: "Logged in successfully",
            token: token,
            userData: userData
        });
    } catch (error) {
        console.log("Error while logging in user:", error);
        return res.status(error.statusCode || 500).json({
            success: false,
            message: error.message || "Something went wrong",
            error: error
        });
    }
}

async function logout(req, res) {

    res.cookie("authToken", "", {
        httpOnly: true,
        secure: false,
        maxAge: 0
    });
    return res.status(200).json({
        success: true,
        message: "Log out successfull",
        error: {},
        data: {}
    });
}

module.exports = {
    login,
    logout
}
