import http from 'http';
import { app as app } from './app';
import chalk from 'chalk';

const port = process.env.PORT || 3000;
const server = http.createServer(app);

/* eslint-disable no-console */

server.listen(port, () => {
  try {
    if(process.env.NODE_ENV == "development"){
      return console.log( chalk.cyanBright(`\nServer running at http://localhost:${port}`) );
    }
    return console.log('Server started.')
  }catch(err) {
    console.log(err);
  }
});
