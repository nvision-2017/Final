let keystone = require('keystone');
let Types = keystone.Field.Types;

let autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(keystone.mongoose);

let PaperPresentation = new keystone.List('PaperPresentation');

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

PaperPresentation.add({
    user: { type: Types.Relationship, initial:true, required: true, ref: 'User'},
    ugOrG: {type: Types.Select, options: 'Undergraduate, Graduate', default: 'Undergraduate', initial: true},
    paperid: {type: Types.Number, noedit: true, unique: true},
    topic: {type: Types.Text, initial: true},
    download: {type: Types.Url, noedit: true},
    paper: {type: Types.File, storage: storage, initial: true, index: true, required: true}
});

PaperPresentation.schema.plugin(autoIncrement.plugin, {model: 'PaperPresentation', field: 'paperid'});

PaperPresentation.schema.pre('save', function(next){
    this.download = 'https://nvision.org.in/paper/'+this._id;
    next();
});

PaperPresentation.defaultColumns = 'user, ugOrG, topic, download';
PaperPresentation.register();
