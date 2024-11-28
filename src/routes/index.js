const authRoutes = require('./auth.routes');
const adminRoutes = require('./admin.routes');
const commonRoutes = require('./common.routes');

const apiRouter = (app) => {
    app.use('/admin', adminRoutes);
    app.use('/auth', authRoutes);
    app.use('/common',commonRoutes)
};

module.exports = apiRouter;