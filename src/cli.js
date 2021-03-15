import arg from 'arg';
import inquirer from 'inquirer';

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
        '--skip-git': arg.flag(myHandler),
        '-x': '--skip-git',
        '-y': '--yes',
        '-i': '--install',
        '-s': '--skip-install'
    },
    {
       argv: rawArgs.slice(2),
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

  const templateCollection = ['es6', 'cjs', 'ts-es6'];

  const answers = await inquirer.prompt(questions);

  return {
      ...options
  }
}

export let cli = async (args) => {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  console.log(options);
}
