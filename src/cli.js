import arg from 'arg';
import { help } from './help';
import { version } from './version';
import { notRecognised } from './help';
import { folderNameMissingOptionPrompt } from './prompts/foldername';
import { templateMissingOptionPrompt } from './prompts/template';
import { downloadTemplateKit } from './main';

let parseArgumentsIntoOptions = (rawArgs) => {

  //configure --skip-git flag
  let myHandler = (value, argName, previousValue) => {
    return previousValue || '--skip-git';
  }

  //configure --help flag
  let helpHandler = (value, argName, previousValue) => {
    return previousValue || '--help';
  }

  //configure --version flag
  let versionHelper = (value, argName, previousValue) => {
    return previousValue || '--version';
  }

  try {
    const args = arg({
      '--git': Boolean,
      '--skip-git': Boolean,
      '--yes': Boolean,
      '--install': Boolean,
      '--skip-install': Boolean,
      '--help': Boolean,
      '-g': '--git',
      '--skip-git': arg.flag(myHandler), //eslint-disable-line no-dupe-keys
      '-x': '--skip-git',
      '-y': '--yes',
      '-i': '--install',
      '-s': '--skip-install',
      '--help': arg.flag(helpHandler),
      '-h': '--help',
      '--version': arg.flag(versionHelper),
      '-v': '--version'
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
      skipInstall: args['--skip-install'] || false,
      help: args['--help'] || false,
      version: args['--version'] || false
    }  
  } catch (err) {
    notRecognised();
  }
}

let otherOptions = async (options) => {
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

export let cli = async (args) => {
  let options = parseArgumentsIntoOptions(args);

  try {
    if (options.help) {
      help();
    } else if (options.version) {
      version();
    } else {
      await otherOptions(options);
    }
  } catch (err) {
    console.log('');
  } 
}
