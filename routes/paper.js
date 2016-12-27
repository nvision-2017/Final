var keystone = require('keystone');

var exec = require('child_process').exec;

var PaperPresentation = keystone.list('PaperPresentation');

// var request = require('request');

let handlers = {};

handlers.getPP = (req, res)=>{
    var view = new keystone.View(req, res);
    view.render('paper', {user: req.user, updates: keystone.get('updatesWeb')});
};

handlers.upload = (req, res)=>{
    if (!req.user) {
        return res.render('paper', {status:false, message: 'Auth failed'});
    }
    if (!req.user.emailVerified) {
        return res.render('paper', {status:false, message: 'Email is not verified'});
    }
    if (!req.body.ugOrG) {
        return res.render('paper', {status:false, message: 'Select undergraduate or graduate'});
    }
    if (!req.files.paper) {
        return res.render('paper', {status: false, message: 'No file selected'});
    }
    if (!req.body.topic) {
        return res.render('paper', {status: false, message: 'Topic field cannot be empty'});
    }
    if (req.files.paper.mimetype != 'application/pdf') {
        return res.render('paper', {status: false, message: 'Invalid file type'});
    }
    if (req.files.paper.size > 25*1024*1024) {
        return res.render('paper', {status: false, message: 'File size should be less than 25MB'});
    }
    var item = new PaperPresentation.model();
    req.body.user = req.user._id;
    data = req.body;
    item.getUpdateHandler(req).process(data, function(err){
        if (err) return res.render('paper', {status:false, message: 'Error uploading try again'});
        require('./mail').sendPPMail(req.user.email, req.user.name.first+' '+req.user.name.last);
        res.render('paper', {
            status:true,
            message: "Paper uploaded successfully"
        })
    })
};

var AWS = require('aws-sdk');
// AWS.config.update(
//     {
//         accessKeyId: process.env.S3_KEY,
//         secretAccessKey: process.env.S3_ACCESS
//     }
// );

var s3 = new AWS.S3();

handlers.getFile = function(req, res) {
    if (!req.user) {
        return res.notfound();
    }
    if (!req.user.canAccessKeystone) {
        return res.notfound();
    }
    PaperPresentation.model.findById(req.params.id).then(pp=>{
        if (!pp) {
            return res.notfound();
        }
        var options = {
            Bucket    : 'test-ppp',
            Key    : pp.paper.filename,
        };
        res.attachment(pp.paper.filename);
        var fileStream = s3.getObject(options).createReadStream();
        fileStream.pipe(res);
    });
}

module.exports = exports = handlers;