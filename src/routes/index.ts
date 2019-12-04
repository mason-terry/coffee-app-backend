const router = require('express').Router()
const mainRoutes = require('./api')

router.use('/api', mainRoutes)

module.exports = router