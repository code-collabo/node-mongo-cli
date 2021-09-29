import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { router as appController } from './api/controllers/appController';
import { router as demoController } from './api/controllers/demoController';

//===== Installed mongoDB's db =======
import mongooseModuleExport from './db'; //eslint-disable-line no-unused-vars

//===== MongoDB ATLAS db =======
//import mongooseModuleExportAtlas from './atlas/db'; //eslint-disable-line no-unused-vars

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

export { app };
