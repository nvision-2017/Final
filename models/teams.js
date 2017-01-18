let keystone = require('keystone');
let Types = keystone.Field.Types;

let autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(keystone.mongoose);

let Team = new keystone.List('Team', {
    map: {name: 'teamID'},
    searchFields: "teamID, name",
    nodelete: true
});

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

Team.add({
    name: { type: Types.Text, initial: true,  required: true, index: true },
    teamid: {type: Types.Number, noedit: true, unique: true},
    teamID: {type: Types.Text, initial: false, index: true, noedit: true},
    members: {type: Types.Relationship, ref: 'User', many: true, initial: true},
    event: {type: Types.Relationship, ref: 'Event', initial: true, index: true},
    isWinner: {type: Types.Boolean, default: false, noedit: true},
    attendance: {type: Types.Boolean, default: false, noedit: true},
    orgComments: {type: Types.Textarea, initial: false, noedit: true}
});

Team.schema.plugin(autoIncrement.plugin, {model: 'Team', field: 'teamid'});

// Team.schema.virtual('teamID').get(function(){
//     return 'IITHT17'+pad(this.teamid,4);
// });

Team.schema.pre('save', function(next){
    this.teamID = 'IITHT17'+pad(this.teamid,4);
    next();
});

Team.defaultColumns = 'teamID, name, teamID, event, members';

Team.register();
