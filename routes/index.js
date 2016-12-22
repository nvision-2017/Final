const keystone = require('keystone'),
    middleware = require('./middleware'),
    importRoutes = keystone.importer(__dirname),
    User = keystone.list('User');

const jwt = require('jsonwebtoken');

let tokenSecret = 'varyverysecrettokenithinkso';

const Event = keystone.list('Event');

// Common Middleware
keystone.pre('routes', middleware.initErrorHandlers);
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

const routes = {
    views: importRoutes('./views'),
    domains: require('./api/domains')
}

const api = require('./api/users');

// Handle 404 errors
keystone.set('404', function (req, res, next) {
    res.notfound();
});

// Handle other errors
keystone.set('500', function (err, req, res, next) {
    var title, message;
    if (err instanceof Error) {
        message = err.message;
        err = err.stack;
    }
    res.err(err, title, message);
});

// Bind Routes
exports = module.exports = function (app) {
    // views
    app.get('/mobile', (req, res) => {
        res.send(require('../lib/detectmobilebrowser')(req));
    });
    app.get('/iotduino', (req, res) => {
        res.redirect('/iotDuino');
    });
    app.get('/mobilemaking', (req, res) => {
        res.redirect('/mobileMaking');
    });
    app.get('/about', routes.views.about);
    app.get('/', routes.views.index);
    app.get('/sponsors', routes.views.sponsors);
    app.get('/events', routes.views.events);
    app.get('/team', routes.views.team);
    app.get('/workshops', routes.views.workshops);
    app.get('/exhibitions', routes.views.exhibitions);
    // app.get('/register', routes.views.register);
    app.get('/events/:event', (req, res) => {
        Event.model.findOne({ link: `/events/${req.params.event}` })
            .then(e => {
                if (!e) return res.notfound();
                var view = new keystone.View(req, res);
                view.render('event', e);
            }, e => res.err(e));
    });

    // app.post('/signup', (req, res) => {
    //     return res.send('coming soon ...');
    //     new User.model({
    //         name: { first: req.body.first, last: req.body.last },
    //         email: req.body.email,
    //         password: req.body.password,
    //         canAccessKeystone: false
    //     }).save(() => { res.send('done') });
    // });

    app.post('/api/auth', (req, res)=>{
        keystone.session.signin({
            email: req.body.email,
            password: req.body.password
        }, req, res, (user)=>{
            console.log(user);
            if (!user) return res.json({success: false, message: "Invalid credentials"});
            var token = jwt.sign(user, tokenSecret, {expiresIn: 3600});
            return res.json({success:true, message: 'Auth success', token: token});
        }, (err) => res.json({success: false, message: "Auth failed"}));
    });

    app.use('/api/*', function(req, res, next){
        let token = req.body.token || req.query.token || req.headers['x-access-token'];
        if (token) {
            jwt.verify(token, tokenSecret, function(err, decoded){
                if (err) {
                    return res.json({success: false, message: 'Auth failed'});
                }
                else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.status(403).json({success: false, message: 'Token required'});
        }
    });

    app.get('/api/user', api.getUser);

    // Domain API
    app.get('/domains', routes.domains.getDomains);
    app.get('/domains/:domain', routes.domains.getDomain);
    app.get('/domains/:domain/events', routes.domains.getEventsOfDomain);
    app.get('/domains/:domain/events/:event', routes.domains.getEvent);

};
