import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import { router as appRouter } from './api/routes/app.route';
import { router as demoRouter } from './api/routes/demo.route';

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

app.use((req, res, next) => {
  const error = new Error('Route not found!');
  error.status = 404;
  next(error);
});

app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

export { app };
