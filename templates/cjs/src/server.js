const http = require('http');
const app = require('./app');
const chalk = require('chalk');

const port = process.env.PORT || 3000;
const server = http.createServer(app);

/* eslint-disable no-console */

server.listen(port, () => {
  try {
    console.log( chalk.cyanBright(`\nServer running at http://localhost:${port}`) );
  }catch(err) {
    console.log(err);
  }
});
