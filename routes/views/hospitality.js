var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var view = new keystone.View(req, res);

    view.render('hospitality', {user: req.user, updates: keystone.get('updatesWeb')});

}
