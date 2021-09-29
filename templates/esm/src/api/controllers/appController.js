import express from 'express';
import chalk from 'chalk';

let router = express.Router();

/* eslint-disable no-console */

router.get('/', (req, res) => {//eslint-disable-line no-unused-vars
  res.status(200).json({
    message: 'App works!'
  });
  console.log( chalk.greenBright('\nApp works! \n\nRunning at http://localhost:3000/\n') );
});

export { router };
