/* @flow */

let keystone = require('keystone');
let Types = keystone.Field.Types;

let Event = new keystone.List('Event', {
  noedit: true,
  nocreate: true,
  nodelete: true
});

let fsStorage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: keystone.expandPath('./uploads'),
    publicPath: '/public/uploads',
  },
});

Event.add({
  domain: {type: Types.Relationship, ref: 'Domain'},
  name: { type: Types.Text, required: true },
  introduction: { type: Types.Textarea },
  image: { type: Types.File, storage: fsStorage }
});

Event.register();