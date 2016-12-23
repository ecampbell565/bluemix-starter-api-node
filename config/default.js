'use strict';

const cfenv = require('cfenv');

const appEnv = cfenv.getAppEnv();
const port = appEnv.isLocal ? 3000 : appEnv.port; // eslint-disable-line no-magic-numbers
const host = appEnv.isLocal ? 'localhost' : appEnv.bind;

module.exports = {
  PORT: process.env.PORT || port,
  HOST: process.env.HOST || host,
};
