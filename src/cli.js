import arg from 'arg';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { folderNamePrompt } from './prompts/folder';
import { createProject } from './main';

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

let skipPrompts = (options, defaultFolderName, notAmongTemplateCollection, defaultTemplate) => {
  if (notAmongTemplateCollection && options.template !== undefined) {
    console.log( chalk.cyanBright(`Cli does not have template: "${options.template}" in its template collection, the default template: "${defaultTemplate}" will be used instead.`) );
    options.template = defaultTemplate;
  }

  if (notAmongTemplateCollection && options.template === undefined) {
    console.log( chalk.cyanBright(`No template specified, the default template: "${defaultTemplate}" will be used instead.`) );
    options.template = defaultTemplate;
  }

  options = {
    ...options,
    folderName: options.folderName || defaultFolderName,
    template: options.template,
    runInstall: false,
    git: false
  }

  return options;
}

let promptForMissingOptions = async (options, folderNameAnswers, defaultFolderName) => {
  const defaultTemplate = 'esm';

  const templateQuestions = [];

  const templateCollection = [defaultTemplate, 'cjs', 'ts-esm'];

  const equalToAtLeastOneTemplate = templateCollection.some(tc => {
    return tc === options.template;
  });

  const notAmongTemplateCollection = equalToAtLeastOneTemplate === false;

  if (!options.template || notAmongTemplateCollection) {
    templateQuestions.push({
      type: 'list',
      name: 'template',
      message: 'Please choose which project template to use',
      choices: templateCollection,
      default: defaultTemplate
    });
  }

  if (options.skipPrompts) {
    options = skipPrompts(options, defaultFolderName, notAmongTemplateCollection, defaultTemplate);
  } 

  if (notAmongTemplateCollection && options.template !== undefined) {
    console.log( chalk.cyanBright(`Cli does not have template: "${options.template}" in its template collection`) );
  }

  const templateAnswers = await inquirer.prompt(templateQuestions);

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

  let [updatedOptions, folderNameAnswers, defaultFolderName] = await folderNamePrompt(options);

  options = await promptForMissingOptions(updatedOptions, folderNameAnswers, defaultFolderName);

  console.log(options);

  try {
    await createProject(options);
  } catch (err) {
    console.log('Error | ', err);
  }
}
