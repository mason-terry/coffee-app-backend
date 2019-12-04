"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRouter = require('express').Router();
const controllers_1 = require("../../controllers");
userRouter.route('/').get(controllers_1.userController.fetchUsers).post(controllers_1.userController.addUser);
userRouter.route('/login').post(controllers_1.userController.login);
module.exports = userRouter;
//# sourceMappingURL=userRoutes.js.map