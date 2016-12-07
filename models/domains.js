let keystone = require('keystone');
let Types = keystone.Field.Types;

let Domain = new keystone.List('Domain', {
  noedit: true,
  nocreate: true,
  nodelete: true
});

Domain.add({
  name: { type: Types.Text, required: true },
  introduction: { type: Types.Textarea }
});

Domain.register();
