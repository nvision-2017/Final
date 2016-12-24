let keystone = require('keystone');
let Types = keystone.Field.Types;

let autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(keystone.mongoose);

let User = new keystone.List('User', {
    noedit: true,
    nodelete: true
});

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

User.add({
    name: { type: Types.Name, required: true, index: true },
    userid: {type: Types.Number},
    email: { type: Types.Email, initial: true, required: true, index: true, unique: true },
    password: { type: Types.Password, required: true, initial: true },
    college: {type: Types.Text, initial: true},
    phone: {type: Types.Number, initial:true},
    canAccessKeystone: { type: Boolean, initial: true },
    emailVerified: {type:Boolean, initial: false},
    verificationToken: {type: Types.Text, initial: false}
});

User.schema.plugin(autoIncrement.plugin, {model: 'User', field: 'userid'});

User.schema.virtual('nvisionID').get(function(){
    return 'NVISION17'+pad(this.userid,4);
});

User.relationship({path: 'registrations', ref: 'Registration', refPath: 'user'});

User.register();