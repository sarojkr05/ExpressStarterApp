const { findUser, createUser } = require("../repository/userRepository");

async function createUserService(userDetails) {
    // It will create a brand new user

    const user = await findUser({
        email: userDetails.email,
    });

    //1. We need to check if the user with this email already exists or not
     if(user) {
        // we found a user
        throw {reason: "User with this email is already exists", statusCode: 401}
    }
    //2. If not then create the user in the DB
    const newUser = await createUser({
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        email: userDetails.email,
        password: userDetails.password
    });

    if(!newUser) {
        throw {reason: "Something went wrong please try again", statusCode: 500}
    }

    //3. return the details of created user
    return newUser;
}

module.exports = createUserService;