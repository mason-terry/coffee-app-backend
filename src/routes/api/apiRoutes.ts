const apiRouter = require('express').Router()
import { apiController } from '../../controllers'

apiRouter.route('/').get(apiController.welcome)

module.exports = apiRouter