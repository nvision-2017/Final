let keystone = require('keystone');
let Types = keystone.Field.Types;

let autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(keystone.mongoose);

let Elmatrico = new keystone.List('Elmatrico', {
    nodelete: true
});

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

var storage = new keystone.Storage({
    adapter: require('keystone-storage-adapter-s3'),
    s3: {
        path: '/'
    },
    schema: {
        bucket: true,
        etag: true,
        path: true,
        url: true
    }
});

Elmatrico.add({
    user: { type: Types.Relationship, initial:true, required: true, ref: 'User', index: true, unique: true},
    answerid: {type: Types.Number, noedit: true, unique: true},
    download: {type: Types.Url, noedit: true},
    answer: {type: Types.File, storage: storage, initial: true, index: true, required: true}
});

Elmatrico.schema.plugin(autoIncrement.plugin, {model: 'Elmatrico', field: 'answerid'});

Elmatrico.schema.pre('save', function(next){
    this.download = 'https://nvision.org.in/elmatrico/'+this._id;
    next();
});

Elmatrico.defaultColumns = 'user, download';
Elmatrico.register();
