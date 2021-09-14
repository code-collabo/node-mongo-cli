import inquirer from 'inquirer';
import chalk from 'chalk';

let skipPromptsModified = (options, defaultFolderName, notAmongTemplateCollection, defaultTemplate) => {
  if (notAmongTemplateCollection && options.template !== undefined) {
    console.log( chalk.cyanBright(`Cli does not have template: "${options.template}" in its template collection, the default template: "${defaultTemplate}" will be used instead.`) );
    options.template = defaultTemplate;
  }

  if (notAmongTemplateCollection && options.template === undefined) {
    console.log( chalk.cyanBright(`--yes or -y flag detected. Generate "${defaultTemplate}" template since no template is specified.`) );
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

export const templateMissingOptionPrompt = async (options, folderNameAnswers, defaultFolderName) => {
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

  let templateAnswers;

  if (options.skipPrompts) {
    options = skipPromptsModified(options, defaultFolderName, notAmongTemplateCollection, defaultTemplate);
    templateQuestions.template = defaultTemplate;
    templateAnswers = templateQuestions;
  } 

  if (notAmongTemplateCollection && options.template !== undefined && !options.skipPrompts) {
    console.log( chalk.cyanBright(`Cli does not have template: "${options.template}" in its template collection`) );
  }

  if (!options.skipPrompts) templateAnswers = await inquirer.prompt(templateQuestions);

  if (notAmongTemplateCollection) {
    options = {
      ...options,
      folderName: options.folderName || folderNameAnswers.folderName,
      template: templateAnswers.template,
      git: options.git
    }
  }

  options = {
    ...options,
    folderName: options.folderName || folderNameAnswers.folderName,
    template: options.template || templateAnswers.template,
    git: options.git
  }

  return options;
}