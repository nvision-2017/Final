let keystone = require('keystone');
let Types = keystone.Field.Types;

let Domain = new keystone.List('Domain', {
  nodelete: true
});

Domain.add({
  name: { type: Types.Text, required: true, index: true, unique: true },
  introduction: { type: Types.Textarea }
});

Domain.relationship({path: 'events', ref: 'Event', refPath: 'domain'});

Domain.defaultColumns = 'name, introduction';

Domain.register();
