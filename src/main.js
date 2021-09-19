import chalk from 'chalk';
import fs from 'fs';
import ncp from 'ncp';
import path from 'path';
import { promisify } from 'util';
import execa from 'execa';
import Listr from 'listr';
import { spawn } from 'child_process';

const access = promisify(fs.access);
const copy = promisify(ncp);

let copyTemplateFiles = async (options) => {
  return copy(options.templateDirectory, options.targetDirectory, {
    clobber: false
  });
}

export async function initGit(options) {
  if (options.git) { //git init only if git returns true
    const result = await execa('git', ['init'], {
      cwd: options.targetDirectory
    });

    if (result.failed) {
      return Promise.reject(new Error('Failed to initialize git'));
    }
  }

  return;
}

let npmInstall = async (cliOptions) => {
  if (cliOptions.runInstall) { //install only if runInstall returns true
    const install = spawn('npm', ['install'], {cwd: cliOptions.targetDirectory, stdio: 'inherit'});
    
    //console.log(install.stdout);
    //console.log(install);
    
    install.stdout.on('data', (data) => {
      console.log(`${data}`);
    });

    install.stderr.on('data', (data) => {
      console.log(`${data}`);
    });
  }

  return;
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

  let newUrl;
  if (process.platform === 'darwin') newUrl = new URL(currentFileUrl).pathname;
   else newUrl = new URL(currentFileUrl).pathname.substring(new URL(currentFileUrl).pathname.indexOf('/') + 1);

  const templateDir = path.resolve(newUrl, '../../templates', options.template.toLowerCase());
  
  options.templateDirectory = templateDir;

  try {
    await access(templateDir, fs.constants.R_OK);
  }catch (err) {
    console.error(`\n%s "${options.template}" is (probably) an invalid template name i.e. not among template name stored in the templateCollection variable/array.`, chalk.red.bold('ERROR'));
    process.exit(1);
  }

  const listrTasks = new Listr([
    {
      title: `Project bootstrapped into the generated folder ${chalk.green(`=> ${options.folderName}`)}`,
      task: () => copyTemplateFiles(options)
    },
    {
      title: 'Git init',
      task: () => initGit(options),
      skip: () => !options.git ? 'Automatically initialize git by doing nothing. Alternatively, pass --git or -g' : undefined
    }
  ]);

  await listrTasks.run();

  await npmInstall(options);

  return true;
}
