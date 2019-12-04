"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiRouter = require('express').Router();
const controllers_1 = require("../../controllers");
apiRouter.route('/').get(controllers_1.apiController.welcome);
module.exports = apiRouter;
//# sourceMappingURL=apiRoutes.js.map