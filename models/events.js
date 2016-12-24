let keystone = require('keystone');
let Types = keystone.Field.Types;

let Event = new keystone.List('Event', {
  nocreate: true,
  nodelete: true
});

Event.add({
  domain: {type: Types.Relationship, ref: 'Domain'},
  name: { type: Types.Text, required: true, index: true, unique:true },
  introduction: { type: Types.Textarea },
  rules: { type: Types.Textarea },
  image: { type: Types.Text },
  link: { type: Types.Text },
  file: { type: Types.Text },
  prize: {type: Types.Text }
});

Event.relationship({path: 'registrations', ref: 'Relationship', refPath: 'event'});

Event.register();