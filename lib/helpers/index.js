import chalk from 'chalk';

/* eslint-disable no-console */

// console: same as in new boileplates api templates
export const success = (message) => {
  console.log( chalk.greenBright(message) );
}

export const warning = (message) => {
  console.log( chalk.yellowBright(message) );
}

export const error = (message) => {
  console.log( redBrightNoConsole(message) );
}


// console: other colors
export const consoleLog = (message) => {
    console.log(message);
}

export const cyanBrightLog = (message) => {
    console.log( chalk.cyanBright(message) );
}

export const redBoldLog = (message, err) => {
    console.log( redBoldNoConsole(message), err );
}

// just colors, no console log
export const redBoldNoConsole = (message) => {
    chalk.red.bold(message);
}

export const redBrightNoConsole = (message) => {
    chalk.redBright(message);
}

export const greenNoConsole = (message) => {
    chalk.green(message);
}
