const userRouter = require('express').Router()
import { userController } from '../../controllers'

userRouter.route('/').get(userController.fetchUsers).post(userController.addUser)

userRouter.route('/login').post(userController.login)

module.exports = userRouter