var keystone = require('keystone'),
Accommodation = keystone.list('Accommodation'),
    User = keystone.list('User');

exports = module.exports = function(done) {

   Accommodation.model.find({}).populate('user').then(usrs=>{
       var l = usrs.length;
       for (var i=0; i<l; i++) {
           usrs[i].email= usrs[i].user.email;
           usrs[i].save();
       }
   });
   done(null);
};
