import { Request, Response } from 'express';
import { success } from '../../../node-mongo-helpers';

export const getAppController = async (req: Request, res: Response) => {
  const message = 'App works!';
  success(message);
  return res.status(200).json({ message });
}
