'use strict';

let File = require(__dirname + '/../models/File.js');

module.exports = (router) => {
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