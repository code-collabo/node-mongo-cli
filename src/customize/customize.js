import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';

export const customize = async () => {
  clear();
  console.log( chalk.greenBright(figlet.textSync('node-mongo', {
    font: 'Small',
    horizontalLayout: 'full'
  })) );
  console.log('Installing...');
}
