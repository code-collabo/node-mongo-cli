import arg from 'arg';
import inquirer from 'inquirer';
import { createProject } from './main';
import chalk from 'chalk';

let parseArgumentsIntoOptions = (rawArgs) => {

  //make -x the alias for --skip-git
  let myHandler = (value, argName, previousValue) => {
    return previousValue || '--skip-git';
  }

  const args = arg({
    '--git': Boolean,
    '--skip-git': Boolean,
    '--yes': Boolean,
    '--install': Boolean,
    '--skip-install': Boolean,
    '-g': '--git',
    '--skip-git': arg.flag(myHandler), //eslint-disable-line no-dupe-keys
    '-x': '--skip-git',
    '-y': '--yes',
    '-i': '--install',
    '-s': '--skip-install'
  },
  {
    argv: rawArgs.slice(2)
  });

  return {
    skipPrompts: args['--yes'] || false,
    git: args['--git'] || true,
    skipGit: args['--skip-git'],
    folderName: args._[0],
    template: args._[1],
    runInstall: args['--install'] || true,
    skipInstall: args['--skip-install'] || false
  }
}

let promptForMissingOptions = async (options) => {
  const [defaultFolderName, defaultTemplate] = ['node-mongo-starter-kit', 'es6'];

  const questions = [];

  if (!options.folderName) {
    questions.push({
      type: 'input',
      name: 'folderName',
      message: 'Please enter folder name:',
      default: defaultFolderName
    });
  }

  const templateCollection = [defaultTemplate, 'cjs', 'ts-es6'];

  const equalToAtLeastOneTemplate = templateCollection.some(tc => {
    return tc === options.template
  });

  const notAmongTemplateCollection = equalToAtLeastOneTemplate === false;

  if (!options.template || notAmongTemplateCollection) {
    questions.push({
      type: 'list',
      name: 'template',
      message: 'Please choose which project template to use',
      choices: templateCollection,
      default: defaultTemplate
    });
  }

  if (notAmongTemplateCollection && options.template !== undefined) {
    console.log( chalk.cyanBright(`Cli does not have template: "${options.template}" in its template collection`) );
  }

  const answers = await inquirer.prompt(questions);

  if (notAmongTemplateCollection) {
    return {
      ...options,
      folderName: options.folderName || answers.folderName,
      template: answers.template
    }
  }

  return {
    ...options,
    folderName: options.folderName || answers.folderName,
    template: options.template || answers.template
  }
}

export let cli = async (args) => {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);

  console.log(options);

  try {
    await createProject(options);
  } catch (err) {
    console.error('\n%s options.template is undefined: \nThis error will stop to show up when prompt for options.template has been added as instructed.\n', chalk.red.bold('ERROR'));
    process.exit(1);
  }
}
