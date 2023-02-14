'use strict';

const express = require('express');
const logger = require('./middleware/logger.js');
const notFound = require('./handlers/404');
const errorHandler = require('./handlers/500');

const app = express();

app.get('/', logger, (req, res, next) => {

  res.status(200).send(req.log);
});

app.get('/bad', (req, res, next) => {
  next('we have an error');
});

app.use('*', notFound);
app.use(errorHandler);

const start = () => {
  app.listen(3001, () => console.log('server running'));
};

module.exports = { start, app };
