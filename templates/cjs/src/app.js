const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
let appRouter = require('./api/routes/app.route');
let demoRouter = require('./api/routes/demo.route');

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(cors({ origin: [`http://localhost:${process.env.CLIENT_APP_PORT}`, `${process.env.CLIENT_APP_URL}`] }));

//====== Use Routers =======
app.use('/', appRouter);
app.use('/demo', demoRouter);
//==========================

app.use(function (req, res, next) {
  const error = new Error('Route not found!');
  error.status = 404;
  next(error);
});

app.use(function (error, req, res) {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = { app };
