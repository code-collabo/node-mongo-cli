import http from 'http';
import { app as app } from './app';
import chalk from 'chalk';

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
