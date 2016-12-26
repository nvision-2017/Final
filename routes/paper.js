var keystone = require('keystone');

var exec = require('child_process').exec;

var PaperPresentation = keystone.list('PaperPresentation');

let handlers = {};

handlers.getPP = (req, res)=>{
    if (!req.user) {
        return res.redirect('/signin?from=/paperpresentation');
    }
    var view = new keystone.View(req, res);

    view.render('paper', {user: req.user, updates: keystone.get('updatesWeb')});
};

handlers.upload = (req, res)=>{
    if (!req.user) {
        return res.render('paper', {status:false, message: 'Auth failed'});
    }
    if (!req.body.ugorg) {
        return res.render('paper', {status:false, message: 'Select undergraduate or graduate'});
    }
    if (!req.body.topic) {
        return res.render('paper', {status: false, message: 'Topic field cannot be empty'});
    }
    if (!req.files.paper) {
        return res.render('paper', {status: false, message: 'Upload the paper'});
    }
    var item = new PaperPresentation.model();
    req.body.user = req.user._id;
    data = req.body;
    item.getUpdateHandler(req).process(data, function(err){
        if (err) return res.render('paper', {status:false, message: 'Error uploading try again'});
        res.render('paper', {
            status:true,
            message: "Paper uploaded successfully"
        })
    })
};

module.exports = exports = handlers;