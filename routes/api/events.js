const keystone = require('keystone');
const Event = keystone.list('Event');

const handlers = {};

handlers.getEvents = (req, res) => {
  Event.model.find()
    .then(events => {
      res.json(events);
    }, err => {
      res.err(err);
    })
};

handlers.getEventsOfDomain = (req, res) => {
  Event.model.find({
    domain: req.params.domain
  })
    .then(evts => res.json(evts), err => res.json(err));
};

module.exports = exports = handlers;

/*
GET /events
POST /events
*/
