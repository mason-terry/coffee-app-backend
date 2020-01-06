const userRouter = require('express').Router()
import { userController } from '../../controllers'

userRouter.route('/').post(userController.addUser)

userRouter.route('/login').post(userController.login)

module.exports = userRouter