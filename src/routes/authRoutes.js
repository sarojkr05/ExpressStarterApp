const express = require('express');
const { login, logout } = require('../controller/authController')
//We have to initislise a router object to add routes in a new file 
//Routers are used to segregate your routes in different module
const authRoutes = express.Router();

authRoutes.post('/login', login) // this is a route registration
authRoutes.post('/logout', logout)

module.exports = authRoutes;