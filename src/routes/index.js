const routes = require('./routes')
const fnRoutes = app => {
    app.use('/', routes.initRoute)
    app.use('/', routes.calcRoute);
    app.use('/carros', routes.carroRoutes);
}

module.exports = fnRoutes