const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { findUser } = require('../repository/userRepository');
const { JWT_SECRET, JWT_EXPIRY } = require('../config/serverConfig');

async function loginUser(authDetails) {

    const email = authDetails.email

    const plainPasswod = authDetails.password

    // check if there is a registered user with this email 

    const user = await findUser({ email });

    if(!user) {
        throw { message: "No user found with this email", statusCode: 404 }
    }
    // if the user is found we need to compare plain pass wih hashed one
    const isPasswordValidate = await bcrypt.compare(plainPasswod, user.password);

    if(!isPasswordValidate) {
        throw { message: "Invalid password, please try again later", statusCode: 401 }
    }

    // if the pass is validated, create a token and return it
    const token = jwt.sign({ email: user.email, id: user._id }, JWT_SECRET, {
        expiresIn: JWT_EXPIRY
    });
    
    return token
}

module.exports = loginUser;