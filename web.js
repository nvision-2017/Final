var keystone = require('keystone');
keystone.init({

  'name': 'ηvision 2017',

  'favicon': 'public/favicon.ico',
  'less': 'public',
  'static': ['public'],

  'views': 'templates/views',
  'view engine': 'ejs',

  'auto update': true,
  'mongo': 'mongodb://localhost/nvision-2017',

  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': 'th1$_1$_my_$3cr37'

});

require('./models');

keystone.set('routes', require('./routes'));

keystone.start();
