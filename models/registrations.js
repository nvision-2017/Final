let keystone = require('keystone');
let Types = keystone.Field.Types;

let Registration = new keystone.List('Registration', {
  nodelete: true
});

Registration.add({
  event: {type: Types.Relationship, ref: 'Event', initial: true, index: true},
  user: {type: Types.Relationship, ref: 'User', initial: true, index: true},
  confirmed: {type: Types.Boolean, default: false},
  comments: {type: Types.Textarea},
  isWinner: {type: Types.Boolean, default: false, noedit: true},
  attendance: {type: Types.Boolean, default: false, noedit: true},
  orgComments: {type: Types.Textarea, initial: false, noedit: true}
});

Registration.defaultColumns = '_id, event, user, confirmed, comments';

Registration.register();
