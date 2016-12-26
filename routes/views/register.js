var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var view = new keystone.View(req, res);

    if (req.query.from) {
        return view.render('auth', {user: req.user, updates: keystone.get('updatesWeb'), from: req.query.from});
    }

    view.render('auth', {user: req.user, updates: keystone.get('updatesWeb')});

}
