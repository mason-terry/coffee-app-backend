const indexRouter = require('express').Router();
const userRoutes = require('./userRoutes');
const apiRoutes = require('./apiRoutes');
indexRouter.use('/', apiRoutes);
indexRouter.use('/users', userRoutes);
module.exports = indexRouter;
//# sourceMappingURL=index.js.map