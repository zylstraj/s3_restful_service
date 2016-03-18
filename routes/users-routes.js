'use strict';

let User = require(__dirname + '/../models/User.js');

module.exports = (router) => {
  router.route('/users')
    .get((req, res) => {
      User.find({}, (err, users) => {
        if (err) return res.send(err);
        res.json({data: users});
      });
    })
    .post((req, res) => {
      var newUser = new User(req.body);
      newUser.save((err, user) => {
        if (err) return res.send(err);
        res.json(user);
      });
    });

  router.route('/users/:id')
    .get((req, res) => {
      User.findById(req.params.id, (err, user) => {
        if (err) return res.send(err);
        res.json(user);
      });
    })
    .put((req, res) => {
      User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, user) => {
        if (err) return res.send(err);
        res.json(user);
      });
    })
    .delete((req, res) => {
      User.findByIdAndRemove(req.params.id, (err, user) => {
        if (err) return res.send(err);
        res.json({message: 'User Removed'})
      });
    });

  router.route('/users/:id/files')
    .get((req, res) => {
      //TO DO
    })
    .post((req, res) => {
      //TO DO
    });
}