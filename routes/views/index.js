var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var view = new keystone.View(req, res);
    if (require('../../lib/detectmobilebrowser')(req))
        view.render('index_mobile', {user: req.user});
    else
        view.render('index', {user: req.user, updates: keystone.get('updatesWeb')});

}
