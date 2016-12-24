var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var view = new keystone.View(req, res);

    view.render('auth',{ signupToken:'SOMETHING_dfhiHUHIU823NC38N9QCW8ENCC38C'});

}
