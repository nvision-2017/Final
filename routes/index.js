const keystone = require('keystone'),
middleware = require('./middleware'),
importRoutes = keystone.importer(__dirname),
User = keystone.list('User'),
Registration = keystone.list('Registration');

var randtoken = require('rand-token');

const Mail = require('./mail');

var sendVEmail = Mail.sendVEmail;

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
    app.get('/signin', (req, res, next)=>{
        if (req.user) {
            return res.redirect('/dashboard');
        }
        next();
    }, routes.views.register);
    app.get('/events/:event', (req, res) => {
        var view = new keystone.View(req, res);
        Event.model.findOne({ link: `/events/${req.params.event}` }).then(e => {
            if (!e) return res.notfound();
            e.registered = false;
            if (req.user) {
                Registration.model.findOne({event: e._id, user: req.user._id}).then(reg=>{
                    if (reg) e.registered = true;
                    else e.registered = false;
                    e.user = req.user;
                    e.updates = keystone.get('updatesWeb');
                    view.render('event', e);
                }, err=>{
                    e.registered = false;
                    e.user = req.user;
                    e.updates = keystone.get('updatesWeb');
                    view.render('event', e);
                });
            }
            else {
                e.updates = keystone.get('updatesWeb');
                view.render('event', e);
            }
            
        }, e => res.err(e));
    });

    app.post('/signin', (req, res)=>{
        keystone.session.signin({
            email: req.body.email,
            password: req.body.password
        }, req, res, user=>{
            if (!user) res.json({status: false, message: 'Invalid credentials'});
            else res.json({status: true, redirectURL: '/dashboard'});
        }, err=>{res.json({status: false, message: 'Invalid credentials'});});
    });

    app.post('/signup', (req, res) => {
        var tk = randtoken.generate(64);
        if (!req.body.name) {
            return res.json({status:false, message: 'Name cannot be empty'});
        }
        var i = req.body.name.indexOf(' ');
        var f,l;
        if (i==-1){
            f = req.body.name;
            l = ''
        }
        else
        {
            f = req.body.name.substr(0, i);
            l = req.body.name.substr(i);
        }
        if(!req.body.password || req.body.password.length < 6) {
            return res.json({status:false, message: 'Password must have atleast 6 characters'});
        }
        if (!req.body.email) {
            return res.json({status:false, message: 'Enter a valid email address'});
        }
        if (!req.body.college) {
            return res.json({status:false, message: 'College name cannot be empty'});
        }
        if (!req.body.phone) {
            return res.json({status:false, message: 'Phone cannot be empty'});
        }
        new User.model({
            name: { first: f, last: l },
            email: req.body.email,
            password: req.body.password,
            college: req.body.college,
            phone: req.body.phone,
            canAccessKeystone: false,
            emailVerified: false,
            verificationToken: tk
        }).save().then((user)=>{
            var token = jwt.sign({token:tk}, tokenSecret, {expiresIn: 900});
            sendVEmail(token, req.body.email);
            keystone.session.signin({
                email: req.body.email,
                password: req.body.password
            }, req, res, (user)=>{
                return res.json({status: true, verified: false, redirectURL: '/dashboard', message: 'A verification email sent'});
            }, (err) => res.json({status: false, message: "Auth failed"}));
        }, (err)=>{
            res.json({status: false, message: "Use another email"});
        });
    });

    app.get('/verify', (req, res)=>{
        var token = req.query.token;
        if (!token) {
            return res.notfound();
        }
        jwt.verify(token, tokenSecret, function(err, decoded){
            if (err) {
                return res.notfound();
            }
            else {
                User.model.findOne({emailVerified: false, verificationToken: decoded.token}).then(user=>{
                    if (!user) return res.notfound();
                    user.emailVerified = true;
                    user.save().then(usr=>{
                        res.redirect('/dashboard');
                    }, e=>{
                        res.redirect('/dashboard');
                    });
                }, err=>{
                    res.notfound();
                });
            }
        });
    });

    app.get('/forgot', (req, res)=>{
        var token = req.query.token;
        if (!token) {
            return res.notfound();
        }
        jwt.verify(token, tokenSecret, function(err, decoded){
            if (err) return res.notfound();
            else {
                var token = decoded.token;
                if (token.substr(0, 6) != "forgot") return res.notfound();
                User.model.findOne({verificationToken: token.substr(6)}).then(user=>{
                    if (!user) return res.notfound();
                    res.render('forgot', {user: req.user, token: token, updates: keystone.get('updatesWeb')});
                }, err=>res.notfound());
            }
        });
    });

    app.post('/forgot', (req, res)=>{
        var token = req.body.token;
        var password = req.body.password;
        if (!token) {
            return res.json({status:false, message: 'No token'});
        }
        if (!password || password.length < 6) {
            return res.json({status:false, message: 'Password should have min 6 characters'});
        }
        jwt.verify(token, tokenSecret, function(err, decoded){
            if (err) return res.notfound('Invalid token');
            else {
                var token = decoded.token;
                if (token.substr(0, 6) != "forgot") return res.notfound();
                User.model.findOne({verificationToken: token.substr(6)}).then(user=>{
                    if (!user) return res.json({status:false, message: 'Invalid token'});
                    user.verificationToken = 
                    user.password = password;
                    user.verificationToken = randtoken.generate(64);
                    user.save().then(user=>{
                        res.json({status: true, message: 'Updated password'});
                    }, err=>{
                        res.json({status: false, message: 'Error'});
                    });
                }, err=>{
                    res.json({status: false, message: 'Invalid token'});
                });
            }
        });
    });

    app.post('/events/:id/register', (req, res)=>{
        if (!req.user) {
            return res.json({status: false, message: 'Auth failed'});
        }
        if (!req.user.emailVerified) {
            return res.json({status: false, message: 'Email not verified'});
        }
        Registration.model.findOne({event: req.params.id, user: req.user._id}).then((user)=>{
            if (user) {
                return res.json({
                    status: true,
                    message: 'Registered'
                });
            }
            new Registration.model({
                event: req.params.id,
                user: req.user._id
            }).save().then(reg=>{
                Event.model.findById(reg.event).then(e=>{
                    Mail.sendRegisteredMail(req.user.email, `${req.user.name.first} ${req.user.name.last}`, e.name, `https://nvision.org.in${e.link}`);
                });
                res.json({
                    status: true,
                    message: 'Registered'
                });
            }, err=>{
                res.json({
                    status: false,
                    message: 'Error'
                });
            });
        }, err=>{
            res.json({
                status: false,
                message: 'Error'
            });
        });
        
    });

    app.post('/events/:id/unregister', (req, res)=>{
        if (!req.user) {
            return res.json({status: false, message: 'Auth failed'});
        }
        if (!req.user.emailVerified) {
            return res.json({status: false, message: 'Email not verified'});
        }
        Registration.model.findOne({
            event: req.params.id,
            user: req.user._id
        }).remove().then(user=>{
            res.json({status: true, message: 'Unregistered'});
        },err=>{
            res.json({status:false, message: 'Error'});
        });
    });

    app.get('/dashboard', (req, res)=>{
        var view = new keystone.View(req, res);
        if (!req.user) {
            return res.redirect('/signin');
        }
        if (!req.user.emailVerified) {
            return view.render('dashboard', {emailnv:true, user:req.user, updates: keystone.get('updatesWeb')});
        }
        Registration.model.find({user: req.user._id}).populate('event').exec().then(r=>{
            return view.render('dashboard', {reg:r, n:r.length, user:req.user, updates: keystone.get('updatesWeb')});
        }, e=>{
            return res.redirect('/');
        });
    });

    app.post('/resendemail', (req, res)=>{
        if (!req.user){
            return res.json({status:false, message: 'Auth failed'});
        }
        if (!req.emailVerified) {
        var token = jwt.sign({token:req.user.verificationToken}, tokenSecret, {expiresIn: 900});
            sendVEmail(token, req.user.email);
            return res.json({status:true});
        }
    });

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
                    return res.status(403).json({error: {message: 'Auth failed'}});
                }
                else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.status(403).json({error: {message: 'Token required'}});
        }
    });

    app.get('/api/me', api.getUser);
    app.get('/api/me/events', api.getUserEvents);
    app.get('/api/event/:id', api.getEvent);
    app.post('/api/me/:id', api.registerEvent);
    app.delete('/api/me/:id', api.deleteEvent);

    // Domain API
    app.get('/domains', routes.domains.getDomains);
    app.get('/domains/:domain', routes.domains.getDomain);
    app.get('/domains/:domain/events', routes.domains.getEventsOfDomain);
    app.get('/domains/:domain/events/:event', routes.domains.getEvent);

};
