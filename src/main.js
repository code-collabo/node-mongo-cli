import chalk from 'chalk';
import fs from 'fs';
import ncp from 'ncp';
import path from 'path';
import { promisify } from 'util';
import Listr from 'listr';
import { projectInstall } from 'pkg-install';

const access = promisify(fs.access);
const copy = promisify(ncp);

let copyTemplateFiles = async (options) => {
  return copy(options.templateDirectory, options.targetDirectory, {
    clobber: false
  });
}

export let createProject = async (options) => {
  options = {
    ...options,
    targetDirectory: options.targetDirectory || process.cwd() //root/parent folder at this point
  };

  //create folder with user input here...
  fs.mkdirSync(`./${options.folderName}`, { recursive: true });

  //change directory from root/parent folder into user's own folder (so that it becomes cwd)
  process.chdir(`./${options.folderName}`);
  options.targetDirectory = process.cwd();

  const currentFileUrl = import.meta.url;

  const templateDir = path.resolve(
    new URL(currentFileUrl).pathname.substring(new URL(currentFileUrl).pathname.indexOf('/') + 1),
    '../../templates',
    options.template.toLowerCase()
  );

  options.templateDirectory = templateDir;

  try {
    await access(templateDir, fs.constants.R_OK);
  }catch (err) {
    console.error(`\n%s "${options.template}" is an invalid template name i.e. not among template name stored in the templateCollection variable/array: this error will no longer show up when prompt for options.template has been added as instructed.`, chalk.red.bold('ERROR'));
    process.exit(1);
  }

  const tasks = new Listr([
    {
      title: 'copy project files',
      task: () => copyTemplateFiles(options)
    },
    {
        title: 'Install dependencies',
        task: () => projectInstall({
            cwd: options.targetDirectory
        }),
        skip: () => !options.runInstall ? 'Automatically install dependencies by doing nothing. Alternatively, pass --install or -i' : undefined
    }
  ]);

  await tasks.run();

  console.log(`%s Project bootstrapped into the folder you specified => ${options.folderName} <=`, chalk.green.bold('DONE'));
  return true;
}
