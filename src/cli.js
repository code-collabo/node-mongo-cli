import arg from 'arg';

function parseArgumentsIntoOptions(rawArgs) {

    //make -x the alias for --skip-git
    function myHandler(value, argName, previousValue) {
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

export let cli = (args) => {
  let options = parseArgumentsIntoOptions(args);
  console.log(options);
}


