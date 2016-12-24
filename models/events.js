let keystone = require('keystone');
let Types = keystone.Field.Types;

let Event = new keystone.List('Event', {
  nocreate: true,
  nodelete: true
});

Event.add({
  domain: {type: Types.Relationship, ref: 'Domain'},
  name: { type: Types.Text, required: true, index: true, unique: true },
  introduction: { type: Types.Textarea },
  rules: { type: Types.Html },
  image: { type: Types.Text },
  link: { type: Types.Text, noedit: true, index: true },
  file: { type: Types.Text },
  prize: {type: Types.Text }
});

Event.schema.pre('save', function(next){
  this.link = '/events/'+this.name.replace(/\s+/g, '').toLowerCase();
  next();
});

Event.relationship({path: 'registrations', ref: 'Registration', refPath: 'event'});

Event.defaultColumns = 'name, introduction, domain';

Event.register();
