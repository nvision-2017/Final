var keystone = require('keystone');

var exec = require('child_process').exec;

var PaperPresentation = keystone.list('PaperPresentation');
var Elmatrico = keystone.list('Elmatrico');

// var request = require('request');

let handlers = {};

handlers.getPP = (req, res)=>{
    var view = new keystone.View(req, res);
    view.render('paper', {user: req.user, updates: keystone.get('updatesWeb')});
};

handlers.upload = (req, res)=>{
    if (!req.user) {
        return res.json({status:false, message: 'Auth failed'});
    }
    if (!req.user.emailVerified) {
        return res.json({status:false, message: 'Email is not verified'});
    }
    if (!req.body.ugOrG) {
        return res.json({status:false, message: 'Select undergraduate or graduate'});
    }
    if (!req.files.paper) {
        return res.json({status: false, message: 'No file selected'});
    }
    if (!req.body.topic) {
        return res.json({status: false, message: 'Topic field cannot be empty'});
    }
    if (req.files.paper.mimetype != 'application/pdf') {
        return res.json({status: false, message: 'Invalid file type'});
    }
    if (req.files.paper.size > 25*1024*1024) {
        return res.json({status: false, message: 'File size should be less than 25MB'});
    }
    var item = new PaperPresentation.model();
    req.body.user = req.user._id;
    data = req.body;
    item.getUpdateHandler(req).process(data, function(err){
        if (err) return res.json({status:false, message: 'Error uploading try again'});
        require('./mail').sendPPMail(req.user.email, req.user.name.first+' '+req.user.name.last);
        res.json({
            status:true,
            message: "Paper uploaded successfully"
        })
    })
};

const jwt = require('jsonwebtoken');

let tokenSecret = 'varyverysecrettokenithinkso';

var elamt = process.env.ELMATRICO;

handlers.elmatrico = (req, res)=>{
    res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    jwt.verify(req.body.token, tokenSecret, (err, decoded)=>{
        if (err) {
            return res.redirect(elamt+'/profile?status=false&message=Auth%20Failed');
        }
        req.user = decoded.user;
        if (!req.files.answer) {
            return res.redirect(elamt + '/profile?status=false&message=No%20File%20Selected');
        }
        if (req.files.answer.mimetype != 'application/zip') {
            return res.redirect(elamt + '/profile?status=false&message=Invalid%20file%20type');
        }
        if (req.files.answer.size > 25*1024*1024) {
            return res.redirect(elamt + '/profile?status=false&message=File%20size%20should%20be%20less%20than%2025MB');
        }
        var item = new Elmatrico.model();
        req.body.user = req.user
        data = req.body;
        item.getUpdateHandler(req).process(data, function(err){
            if (err) return res.json({status:false, message: 'Error uploading try again'});
            // require('./mail').sendPPMail(req.user.email, req.user.name.first+' '+req.user.name.last);
            return res.redirect(elamt + '/profile?status=true&message=Answer%20Submitted');
        })
    });
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

handlers.getElmatrico = function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log(req.body);
    jwt.verify(req.body.token, tokenSecret, (err, decoded)=>{
        if (err) {
            return res.json({status: false, message: 'Auth failed'});
        }
        req.user = decoded.user;
        Elmatrico.model.findOne({user: req.user}).then(el=>{
            if (!el) {
                res.json({status: false});
            }
            else {
                res.json({status: true});
            }
        })
    })
}

handlers.getAnswer = function(req, res) {
    if (!req.user) {
        return res.notfound();
    }
    if (!req.user.canAccessKeystone) {
        return res.notfound();
    }
    Elmatrico.model.findById(req.params.id).then(pp=>{
        if (!pp) {
            return res.notfound();
        }
        var options = {
            Bucket    : 'test-ppp',
            Key    : pp.answer.filename,
        };
        res.attachment(pp.answer.filename);
        var fileStream = s3.getObject(options).createReadStream();
        fileStream.pipe(res);
    });
}

module.exports = exports = handlers;