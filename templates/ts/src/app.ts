import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import { router as appRouter } from './api/routes/app.route';
import { router as demoRouter } from './api/routes/demo.route';

dotenv.config();

const app: Express = express();

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

interface Error {
  status?: number;
  message: string;
}

app.use((req: Request, res: Response, next: NextFunction) => {
  const err: Error = new Error('Route not found!');
  err.status = 404;
  next(err);
});

app.use((err: Error, req: Request, res: Response) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

export { app };
