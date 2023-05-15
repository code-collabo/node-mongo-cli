import express from 'express';
import { getAppController } from '../controllers/app.controller';

const router = express.Router();

router.get('/', getAppController);

export { router };
