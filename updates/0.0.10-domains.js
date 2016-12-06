// @flow

const keystone = require('keystone');
const Domain = keystone.list('Domain');
const async = require('async');

exports = module.exports = (done) => {
  async.map(['torque', 'equilibria', 'infero', 'kludge', 'quiz', 'cepheid', 'robotics',
   'electronika', 'e-cell', 'infi', 'online'], (x, cb) => {
      return new Domain.model({
        name: x
      }).save(cb);
    }, done)

};