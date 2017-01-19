var keystone = require('keystone'),
    User = keystone.list('User');

exports = module.exports = function(done) {

   User.model.find({}).then(usrs=>{
       var l = usrs.length;
       for (var i=0; i<l; i++) {
           console.log(usrs[i]);
            usrs[i].phone = ("" +(usrs[i].phone) + " ").substring();
           usrs[i].save();
       }
   });
   done(null);
};
