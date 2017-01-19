let keystone = require('keystone');
let Types = keystone.Field.Types;

let autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(keystone.mongoose);

let User = new keystone.List('User', {
    // map: {name: 'nvisionID'},
    searchFields: "name, email, phone, college",
    nodelete: true
});

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

User.add({
    name: { type: Types.Name, required: true, index: true },
    userid: {type: Types.Number, noedit: true, unique: true},
    email: { type: Types.Email, initial: true, required: true, index: true, unique: true, noedit: false },
    password: { type: Types.Password, required: true, initial: true },
    college: {type: Types.Text, initial: true, index: true},
    phone: {type: Types.Text, initial:true, index: true},
    canAccessKeystone: { type: Boolean, initial: true },
    emailVerified: {type: Types.Boolean, initial: false, noedit: true},
    checkedIn: {type: Types.Boolean, initial: true, default: false},
    onlyCryptex: {type: Types.Boolean, default: false},
    verificationToken: {type: Types.Text, initial: false, noedit: true}
});

User.schema.plugin(autoIncrement.plugin, {model: 'User', field: 'userid'});

User.schema.virtual('nvisionID').get(function(){
    return 'IITH17'+pad(this.userid,4);
});

User.relationship({path: 'registrations', ref: 'Registration', refPath: 'user'});
User.relationship({path: 'accommodations', ref: 'Accommodation', refPath: 'user'});

User.defaultColumns = 'name, userid, email, college, phone, checkedIn';

User.register();