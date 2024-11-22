// module.exports.UserRoutes = require('./user.routes')
// module.exports.UserRoutes = require('./user.routes')

const userRoutes = require('./user.routes');
const authRoutes = require('./auth.routes');

const apiRouter = (app) => {
    app.use('/user', userRoutes);
    app.use('/auth', authRoutes);
};

module.exports = apiRouter;
