
const adminRoutes = require('./admin.routes');
const authRoutes = require('./auth.routes');

const apiRouter = (app) => {
    app.use('/admin', adminRoutes);
    app.use('/auth', authRoutes);
};

module.exports = apiRouter;