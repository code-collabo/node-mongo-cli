const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
let appController = require('./api/controllers/appController');
let demoController = require('./api/controllers/demoController');

//===== Installed mongoDB's db =======
const mongoose = require('./db'); //eslint-disable-line no-unused-vars

//===== MongoDB ATLAS db =======
//const mongoose = require('./atlas/db'); //eslint-disable-line no-unused-vars

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.use('/', appController);
app.use('/demo', demoController);

app.use((req, res, next) => {
  const error = new Error('Route not found!');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {//eslint-disable-line no-unused-vars
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
