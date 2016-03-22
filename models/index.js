'use strict';

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

let models = {};
require('./File.js')(mongoose, models);
require('./User.js')(mongoose, models);

module.exports = models;
