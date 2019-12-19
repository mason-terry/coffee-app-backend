const indexRouter = require('express').Router()
const userRoutes = require('./userRoutes')
const apiRoutes = require('./apiRoutes')
const shopRoutes = require('./shopRoutes')

indexRouter.use('/', apiRoutes)

indexRouter.use('/users', userRoutes)

indexRouter.use('/shops', shopRoutes)

module.exports = indexRouter