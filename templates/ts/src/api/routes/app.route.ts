import express, { IRouter } from 'express';
import { getAppController } from '../controllers/app.controller';

const router: IRouter = express.Router();

router.get('/', getAppController);

export { router };
