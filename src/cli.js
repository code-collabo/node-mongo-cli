import arg from 'arg';
import inquirer from 'inquirer';
import { createProject } from './main';
import chalk from 'chalk';
import fs from 'fs';

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

  const folderQuestions = [];

  let questionPush = (msgString, folder) => {
    folderQuestions.push({
      type: 'input',
      name: 'folderName',
      message: msgString,
      default: folder
    });
  }

  let folderNameAnswers;

  if (!options.folderName) {
    try {
      fs.accessSync(`./${defaultFolderName}`, fs.constants.F_OK); //, () => {
        console.log( chalk.cyanBright(`Folder name: ${options.folderName} already exists, enter a different folder name instead`) );
        questionPush( 'Enter different folder name:', null);
    } catch (err) {
      if (err) {
        questionPush('Please enter folder name:', defaultFolderName);
      }
    }
    folderNameAnswers = await inquirer.prompt(folderQuestions);
  }

  if (options.folderName) {
    try {
      fs.accessSync(`./${options.folderName}`, fs.constants.F_OK); //, () => {
        console.log( chalk.cyanBright(`Folder name: ${options.folderName} already exists, enter a different folder name instead`) );
        questionPush( 'Enter different folder name:', null);
        folderNameAnswers = await inquirer.prompt(folderQuestions);
    } catch (err) {
      if (err) {
        folderNameAnswers = {};
        folderNameAnswers.folderName = options.folderName;
       }
    }
  }

  try {
    fs.accessSync(`./${folderNameAnswers.folderName}`, fs.constants.F_OK);

    const rootDir = process.cwd();
    //console.log(rootDir);
    const rootDirContent = fs.readdirSync(rootDir, (err, files) => {
      if (err) {
        throw err;
      }

      return files;
    });

    //console.log(rootDirContent);

    let equalToAtLeastOneFolder;

    do {
      equalToAtLeastOneFolder = rootDirContent.some(content => {
        return content === folderNameAnswers.folderName;
      });

      console.log(equalToAtLeastOneFolder);

      if (equalToAtLeastOneFolder === true) {
        console.log( chalk.cyanBright(`Folder name: "${folderNameAnswers.folderName}" already exists, enter a different folder name instead`) );
        folderQuestions.push({
          type: 'input',
          name: 'folderName',
          message: 'Enter different folder name:',
        });
        folderNameAnswers = await inquirer.prompt(folderQuestions);
      }
    } while (equalToAtLeastOneFolder === true);

  } catch (err) {
    if (err) {
      //console.log('if (err) statement & the comment prevents: unhandledPromiseRejectionWarning in console');
    }
  }

  //Note: This affects only the try block (when options.folderName arg is present)
  if (options.folderName) {
    options.folderName = folderNameAnswers.folderName;
  }

  console.log(folderNameAnswers);

  const templateQuestions = [];

  const templateCollection = [defaultTemplate, 'cjs', 'ts-es6'];

  const equalToAtLeastOneTemplate = templateCollection.some(tc => {
    return tc === options.template
  });

  const notAmongTemplateCollection = equalToAtLeastOneTemplate === false;

  if (notAmongTemplateCollection && options.skipPrompts && options.template !== undefined) {
    console.log( chalk.cyanBright(`Cli does not have template: "${options.template}" in its template collection, the default template: "${defaultTemplate}" will be used instead.`) );
  }

  if (notAmongTemplateCollection && options.skipPrompts && options.template === undefined) {
    console.log( chalk.cyanBright(`No template specified, the default template: "${defaultTemplate}" will be used instead.`) );
  }

  if (options.skipPrompts) {
    return {
      ...options,
      folderName: options.folderName || defaultFolderName,
      template: defaultTemplate,
      runInstall: false,
      git: false
    }
  }

  if (!options.template || notAmongTemplateCollection) {
    templateQuestions.push({
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

  const templateAnswers = await inquirer.prompt(templateQuestions);
  console.log(templateAnswers);

  if (notAmongTemplateCollection) {
    return {
      ...options,
      folderName: options.folderName || folderNameAnswers.folderName,
      template: templateAnswers.template,
      git: options.git
    }
  }

  return {
    ...options,
    folderName: options.folderName || folderNameAnswers.folderName,
    template: options.template || templateAnswers.template,
    git: options.git
  }
}

export let cli = async (args) => {
  let options = parseArgumentsIntoOptions(args);

  if (options.skipInstall) {
    options.runInstall = false;
  }

  if (options.skipGit) {
    options.git = false;
  }

  options = await promptForMissingOptions(options);

  //console.log(options);

  try {
    await createProject(options);
  } catch (err) {
    console.log('Error | ', err);
  }
}
