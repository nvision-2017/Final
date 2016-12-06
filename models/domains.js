/* @flow */

let keystone = require('keystone');
let Types = keystone.Field.Types;

let fsStorage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: keystone.expandPath('./uploads'),
    publicPath: '/public/uploads',
  },
});

let Domain = new keystone.List('Domain', {
  noedit: true,
  nocreate: true,
  nodelete: true
});

Domain.add({
  name: { type: Types.Text, required: true },
  introduction: { type: Types.Textarea },
  image: { type: Types.File, storage: fsStorage }
});

Domain.register();
