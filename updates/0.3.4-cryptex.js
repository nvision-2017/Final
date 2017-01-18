var keystone = require('keystone'),
    User = keystone.list('User'),
    Registration = keystone.list('Registration');

var async = require('async');
var cr = require('./data/users.js');

exports = module.exports = function(done) {
    for (i in cr) {
        let userid = cr[i]["_id"]["$oid"];
        Registration.model.find({user: userid}).then(evts=>{
            if (evts.length == 0) {
                User.model.findById(userid).then(usr=>{
                    if (!usr) return;
                    usr.onlyCryptex = true;
                    // console.log(usr);
                    usr.save();
                })
            }
        })
    }
    done(null);

};
