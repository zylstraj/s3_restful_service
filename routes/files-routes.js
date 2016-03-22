'use strict';

var AWS = require('aws-sdk');
var s3 = new AWS.S3();
AWS.config.update({region: 'us-west-2'});
var params = {Bucket: 'joshonceinalifetime', Key: 'myKey'};
var url = s3.getSignedUrl('getObject', params);
console.log("The URL is", url);


let File = require(__dirname + '/../models/File.js');

module.exports = (router) => {

s3.createBucket({Bucket: 'joshonceinalifetime'}, function() {

// var params = {Bucket: 'joshonceinalifetime', Key: 'fileOne', Body: 'Hello world!'};
}
  router.route('/files/:id')
    .get((req, res) => {
      File.findById(req.params.id, (err, file) => {
        if (err) return res.send(err);
        res.json(file);
      });
    })
    .put((req, res) => {
      File.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, file) => {
        if (err) return res.send(err);
        res.json(file);
      });
    })
    .delete((req, res) => {
      File.findByIdAndRemove(req.params.id, (err, file) => {
        if (err) return res.send(err);
        res.json({message: 'File Deleted'})
      });
    });
};
