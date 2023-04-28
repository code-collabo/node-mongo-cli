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
    console.log(chalk.redBright(`\nYou can report the error you encountered at https://github.com/code-collabo/node-mongo-cli/issues/new?assignees=&labels=bug&template=cli-user-error-report.md\n`));
    console.log(chalk.redBright(`\nThere is a manual download option for the API boilerplate templates at: https://github.com/code-collabo/node-mongo-api-boilerplate-templates\n`))
  }
});
