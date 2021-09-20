import arg from 'arg';
import { folderNameMissingOptionPrompt } from './prompts/foldername';
import { templateMissingOptionPrompt } from './prompts/template';
import { downloadTemplateKit } from './main';

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

export let cli = async (args) => {
  let options = parseArgumentsIntoOptions(args);

  if (options.skipInstall) {
    options.runInstall = false;
  }

  if (options.skipGit) {
    options.git = false;
  }

  let [updatedOptions, folderNameAnswers, defaultFolderName] = await folderNameMissingOptionPrompt(options);

  options = await templateMissingOptionPrompt(updatedOptions, folderNameAnswers, defaultFolderName);

  //console.log(options);

  try {
    await downloadTemplateKit(options);
  } catch (err) {
    console.log('Error | ', err);
  }
}
