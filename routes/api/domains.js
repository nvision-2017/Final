const keystone = require('keystone');
const Domain = keystone.list('Domain');
const Event = keystone.list('Event');

const handlers = {};

handlers.getEvents = (req, res) => {
  Event.model.find()
    .then(events => {
      res.json(events);
    }, err => {
      res.json({error:err});
    })
};

handlers.getEventsOfDomain = (req, res) => {
  Event.model.find({
    domain: req.params.domain
  })
    .then(evts => res.json(evts), err => res.json({error:err}));
};

handlers.getDomains = (req, res) => {
  Domain.model.find()
    .then(d => res.json(d), e => res.json({error:e}));
};

handlers.getDomain = (req, res) => {
  Domain.model.findById(req.params.domain)
    .then(d => res.json(d), e => res.json({error:e}));
};

handlers.getEvent = (req, res) => {
  Event.model.findById(req.params.event)
    .then(e => res.json(e), e => res.json({error:e}));
};

module.exports = exports = handlers;

/*
GET /events
POST /events
*/