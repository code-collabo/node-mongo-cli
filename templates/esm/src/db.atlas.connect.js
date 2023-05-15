import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { afterAtlasDBconnectSuccessful, connectToDBunsuccessful } from '../node-mongo-helpers';

dotenv.config();

const mongooseAtlasConnect = async (port) => {
  try {
    await mongoose.connect(`${process.env.MONGODB_ATLAS_URI}`);
    afterAtlasDBconnectSuccessful(port);
  } catch (err) {
    connectToDBunsuccessful(err);
  }
}

export default mongooseAtlasConnect;
