const keystone = require('keystone'),
middleware = require('./middleware'),
importRoutes = keystone.importer(__dirname),
User = keystone.list('User'),
Registration = keystone.list('Registration');

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport('smtps://nvision2k17%40gmail.com:p%40$$w0rd@smtp.gmail.com');
var randtoken = require('rand-token');

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function sendVEmail(tk, email, cb) {
    var mailOptions = {
        from: 'nvision 2017 <nvison2k17@gmail.com>',
        to: email,
        subject: 'Email verfication',
        text: `Verify your email here : https://nvision.org.in/verify?token=${tk}`,
        html: `Verify your email here : <a href="https://nvision.org.in/verify?token=${tk}">Verify</a>`
    };
    transporter.sendMail(mailOptions, function(err, info){
        if (err) return console.log(err);
        console.log('Message sent : '+info.response);
    });
}

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
    app.get('/auth', routes.views.auth);
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
            Registration.model.findOne({event: e._id, user: req.user._id}).then(reg=>{
                if (reg) e.registered = true;
                else e.registered = false;
                view.render('event', e);
            }, err=>{
                e.registered = false;
                view.render('event', e);
            });
        }, e => res.err(e));
    });

    app.post('/signin', (req, res)=>{
        keystone.session.signin({
            email: req.body.email,
            password: req.body.password
        }, req, res, user=>{
            if (!user) res.redirect('/signin');
            else res.redirect('/dashboard');
        }, err=>{res.redirect('/signin')});
    });

    app.post('/signup', (req, res) => {
        var tk = randtoken.generate(64);
        new User.model({
            name: { first: req.body.first, last: req.body.last },
            email: req.body.email,
            password: req.body.password,
            canAccessKeystone: false,
            emailVerified: false,
            verificationToken: tk
        }).save().then((user)=>{
            var token = jwt.sign({token:token}, tokenSecret, {expiresIn: 900});
            sendVEmail(token, req.body.email);
            keystone.session.signin({
                email: req.body.email,
                password: req.body.password
            }, req, res, (user)=>{
                return res.json({status: true, verified: false, message: 'Email verification email sent'});
            }, (err) => res.json({status: false, message: "Auth failed"}));
        }, (err)=>{
            res.json({status: false, message: "Auth failed"});
        });
    });

    app.get('/verify', (req, res)=>{
        var token = req.query.token;
        if (!token) {
            return res.send('error');
        }
        jwt.verify(token, tokenSecret, function(err, decoded){
            if (err) {
                return res.send('error');
            }
            else {
                User.model.findOne({emailVerified: false, verificationToken: decoded.token}).then(user=>{
                    if (!user) return res.send('Error');
                    user.emailVerified = true;
                    user.nvisionID = 'NVISION17'+pad(user.userid,4);
                    user.save().then(usr=>{
                        res.send('verified');
                    }, e=>{
                        res.send('Error');
                    });
                }, err=>{
                    res.send('error');
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
        new Registration.model({
            event: req.params.id,
            user: req.user._id
        }).save().then(reg=>{
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
            return view.render('dashboard', {emailnv:true});
        }
        Registration.model.find({user: req.user._id}).populate('event').exec().then(r=>{
            return view.render('dashboard', {reg:r, user:req.user});
        }, e=>{
            return res.redirect('/');
        });
    });

    app.post('/resendemail', (req, res)=>{
        if (!req.user){
            return res.json({status:false, message: 'Auth failed'});
        }
        if (!req.emailVerified) {
        var token = jwt.sign({toen:req.user.verificationToken}, tokenSecret, {expiresIn: 900});
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
