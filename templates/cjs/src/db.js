const mongoose = require('mongoose');
const chalk = require('chalk');

require('dotenv').config();

/* eslint-disable no-console */

mongoose.connect(`mongodb://localhost:27017/${process.env.DBNAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
},
 err => {
    if (!err) {
      console.log( chalk.greenBright('\nInstalled MongoDB connection successful!!!') );
    }
    else {
      console.log( chalk.redBright(`\nError in DB connection: ${err.message} \n`) );
      console.log( chalk.yellowBright(`To use installed mongoDB option, make sure you:
      => Have mongoDB installed & running locally
        - See https://docs.mongodb.com/guides/server/install/
      => Update src > nodemon.json file with your DB name
        - ensure you didn't mispell or include wrong details.

    To use or see guide for MongoDB ATLAS option:
      => Comment out "const mongoose = require('./db')" in src > app.js,
        and use "const mongoose = require('./atlas/db')" instead.
      `
    ) );
    }
});

module.exports = mongoose;
