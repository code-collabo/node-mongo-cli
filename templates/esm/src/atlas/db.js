import mongoose from 'mongoose';
import chalk from 'chalk';
import dotenv from 'dotenv';

dotenv.config();

/* eslint-disable no-console */

mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.CLUSTERNAME}.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
},
err => {
  if (!err) {
    console.log( chalk.greenBright('\nMongoDB ATLAS connection successful!!!\n') );
  }
  else {
    console.log( chalk.redBright(`\nError in ATLAS DB connection: ${err.message} \n`) );
    console.log( chalk.yellowBright(`To use MongoDB ATLAS option, make sure you:
    => Have wifi/ data turned on and are connected to mongoDB atlas
       - See https://docs.atlas.mongodb.com/getting-started/
    => Update src > atlas > db.js with your username, password, clusterName and DBname respectively
       - ensure you didn't mispell or include wrong details.

  To use or see guide for installed mongoDB option:
    => Comment out "import mongooseModuleExportAtlas from './atlas/db'" in src > app.js,
      and use "import mongooseModuleExport from './db'" instead.
    `
    ) );
  }
});

export const mongooseModuleExportAtlas = mongoose;
