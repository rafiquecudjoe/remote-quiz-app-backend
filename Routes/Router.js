const express = require('express')
const LoginController = require("../controller/loginController")
const SignupController = require('../controller/signupController')

const Router = express()

Router.post('/login', LoginController)

Router.post('/signup', SignupController)

module.exports = Router