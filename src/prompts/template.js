import inquirer from 'inquirer';
import chalk from 'chalk';

let skipPromptsModified = (options, defaultFolderName, notAmongTemplateCollection, defaultTemplate) => {
  if (notAmongTemplateCollection && (options.template !== undefined || options.template === undefined)) {
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

  if (notAmongTemplateCollection && options.template !== undefined && !options.skipPrompts) console.log(`${chalk.redBright(`${options.template}`)} is not in the node-mongo template collection`);

  if (!options.template || notAmongTemplateCollection) {
    templateQuestions.push({
      type: 'list',
      name: 'template',
      message: 'Please choose which node-mongo template kit to use',
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