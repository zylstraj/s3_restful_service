'use strict';

let express = require('express');
let app = express();
let router = express.Router();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let config = require(__dirname + '/config/env.js');

require(__dirname + '/routes/files-routes.js')(router);
require(__dirname + '/routes/users-routes.js')(router);

mongoose.connect(config.MONGOLAB_URI);
app.use(bodyParser.json());
app.use('/', router);

app.listen(config.PORT, () => {
  console.log('server started on port ' + config.PORT);
});