'use strict';

// const { db } = require('./src/auth/models');
// const { db } = require('./src/models');
const server = require('./src/server.js');

require('dotenv').config();

db.sync().then(() => {
  server.start(process.env.PORT || 3000);
});

// figure out with db requirement will need to be taken