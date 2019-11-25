const userRouter = require('express').Router()
const userController = require('../../controllers/userController')

userRouter.route('/').get(userController.fetchUsers).post(userController.addUser)

module.exports = userRouter