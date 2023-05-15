const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { afterAtlasDBconnectSuccessful, connectToDBunsuccessful } = require('../node-mongo-helpers');

dotenv.config();

const mongooseAtlasConnect = async function (port) {
  try {
    await mongoose.connect(`${process.env.MONGODB_ATLAS_URI}`);
    afterAtlasDBconnectSuccessful(port);
  } catch (err) {
    connectToDBunsuccessful(err);
  }
}

module.exports = mongooseAtlasConnect;
