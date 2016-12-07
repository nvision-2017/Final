var keystone = require('keystone'),
    middleware = require('./middleware'),
    importRoutes = keystone.importer(__dirname);

const Event = keystone.list('Event');

// Common Middleware
keystone.pre('routes', middleware.initErrorHandlers);
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

const routes = {
  views: importRoutes('./views'),
  domains: require('./api/domains')
}

// Handle 404 errors
keystone.set('404', function(req, res, next) {
    res.notfound();
});

// Handle other errors
keystone.set('500', function(err, req, res, next) {
    var title, message;
    if (err instanceof Error) {
        message = err.message;
        err = err.stack;
    }
    res.err(err, title, message);
});

// Bind Routes
exports = module.exports = function(app) {
  // views
  app.get('/', routes.views.index);
	app.get('/sponsors', routes.views.sponsors);
	app.get('/about', routes.views.about);
	app.get('/events', routes.views.events);
	app.get('/team', routes.views.team);
	app.get('/workshops', routes.views.workshops);
    app.get('/events/:event', (req, res) => {
        Event.model.findOne({name: req.params.event})
        .then(e => {
            if (!e) return res.notfound();
            var view = new keystone.View(req, res);
            view.render('event', e);
        }, e => res.err(e));
    });

  // Domain API
  app.get('/domains', routes.domains.getDomains);
  app.get('/domains/:domain', routes.domains.getDomain);
  app.get('/domains/:domain/events', routes.domains.getEventsOfDomain);
  app.get('/domains/:domain/events/:event', routes.domains.getEvent);
  
};
