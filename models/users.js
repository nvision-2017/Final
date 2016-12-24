let keystone = require('keystone');
let Types = keystone.Field.Types;

let autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(keystone.mongoose);

let User = new keystone.List('User', {
    noedit: true,
    nodelete: true
});

User.add({
    name: { type: Types.Name, required: true, index: true },
    nvisionID: {type: Types.Text },
    userid: {type: Types.Number},
    email: { type: Types.Email, initial: true, required: true, index: true, unique: true },
    password: { type: Types.Password, required: true, initial: true },
    canAccessKeystone: { type: Boolean, initial: true },
    emailVerified: {type:Boolean, initial: false},
    verificationToken: {type: Types.Text, initial: false}
});

User.schema.plugin(autoIncrement.plugin, {model: 'User', field: 'userid'});

User.relationship({path: 'registrations', ref: 'Registration', refPath: 'user'});

User.register();