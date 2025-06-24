const express = require('express');
const registerUser = require('../controller/userController');
//We have to initislise a router object to add routes in a new file 
//Routers are used to segregate your routes in different module
const userRouter = express.Router();

userRouter.post('/', registerUser) // this is a route registration

module.exports = userRouter;