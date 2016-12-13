// @flow

const keystone = require('keystone');
const Event = keystone.list('Event');
const Domain = keystone.list('Domain');

const async = require('async');

const events = require('./data/events.js');

const DomainIdMap  = {};

const newEvt = (evt, domain) => new Event.model({
  domain: domain,
  name: evt.name,
  introduction: evt.introduction,
  rules: evt.rules || "Coming soon...",
  file: evt.file,
  image: evt.image || "/img/event.png",
  prize: evt.prize || "",
  link: '/events/'+evt.name.replace(/\s+/g, '').toLowerCase()
});

const handleEvents = (evts, cb2) => {
  async.map(evts, (evt, cb) => {
    if (DomainIdMap[evt.domain]) {
      return newEvt(evt, DomainIdMap[evt.domain]).save(cb);
    }

    Domain.model.findOne({name: evt.domain}, (err, d) => {
      if (!err && d) {
        DomainIdMap[d.name] = d._id;
        return newEvt(evt, d._id).save(cb);
      }

      return cb(err);
    });
  }, (err, rs) => {
    cb2(err, rs);
  })
}

exports = module.exports = (done) => {
  handleEvents(events, done);
};
