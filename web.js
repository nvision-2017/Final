/* @flow */

const keystone = require('keystone');
const cons = require('consolidate');

keystone.init({
  'name': 'nvision 2017',

  'favicon': 'public/favicon.ico',
  'less': 'public',
  'static': ['public'],
  'auto update': true,
  'mongo': 'mongodb://localhost/nvision2017v0',

  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': 'This is a Huuge Secret',
  'views': 'templates/views',
  'custom engine': cons.handlebars,
  'view engine': 'html'
});

require('./models');

keystone.set('routes', require('./routes'));

keystone.start();
