'use strict';

const { db } = require('./src'); //api - added users into 
const server = require('./src/server.js');

require('dotenv').config();

db.sync().then(() => {
  server.start(process.env.PORT || 3000);
});

