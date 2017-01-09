let keystone = require('keystone');
let Types = keystone.Field.Types;

let Registration = new keystone.List('Registration', {
  nodelete: true
});

Registration.add({
  event: {type: Types.Relationship, ref: 'Event', initial: true, index: true, noedit: true},
  user: {type: Types.Relationship, ref: 'User', initial: true, index: true, noedit: true},
  confirmed: {type: Types.Boolean, default: false},
  comments: {type: Types.Textarea},
  // mailStatus: {type: Types.Boolean, noedit: true, default: false}
});

// Registration.schema.pre('save', function(next){
//     if (!this.mailStatus && this.confirmed) {
//         User.model.findById(this.user).then((user)=>{
//             this.mailStatus = true;
//             require('../routes/mail.js').sendRMail(user.email, user.name.first+' '+user.name.last);
//             next();
//         }, (err)=>{
//             console.log(err);
//             next();
//         });
//     }
//     else if (!this.confirmed) {
//         this.mailStatus = false;
//         next();
//     }
//     else {
//         next();
//     }
// });

Registration.defaultColumns = '_id, event, user, confirmed, comments';

Registration.register();
