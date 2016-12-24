const keystone = require('keystone');
const User = keystone.list('User');
const Registration = keystone.list('Registration');
const Event = keystone.list('Event');

const handlers = {};

handlers.getUser = (req, res)=>{
    res.json(req.decoded._doc);
};

handlers.getUserEvents = (req, res)=>{
  Registration.model.find({user: req.decoded._doc._id}).populate('event').exec().then(r=>{
    res.json(r);
  }, e=>{res.json({error:e})});
};

handlers.getEvent = (req, res)=>{
  Event.model.findById(req.params.id).then(e=>res.json(e), e=>res.json({error:e}));
};

handlers.registerEvent = (req, res)=>{
  new Registration.model({
    event: req.params.id,
    user: req.decoded._doc._id
  }).save(function(err, user){
    if (err) {
      res.json({error: 'Registration failed'});
    }
    else {
      res.json(user);
    }
  });
};

handlers.deleteEvent = (req, res)=>{
  Registration.model.find({event: req.params.id}).remove((err)=>{
    if (err) {
      res.json({error:{message:'Error'}});
    }
    else {
      res.json({success: true});
    }
  });
};

module.exports = exports = handlers;

/*
GET /events
POST /events
*/
