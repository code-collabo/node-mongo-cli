import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs';

export const folderNameMissingOptionPrompt = async (options) => {
    let defaultFolderName = 'node-mongo-kit';
    const folderQuestions = [];
  
    let questionPush = (msgString, folder) => {
      folderQuestions.push({
        type: 'input',
        name: 'folderName',
        message: msgString,
        default: folder
      });
    }

    const rootDir = process.cwd();
    const rootDirContent = fs.readdirSync(rootDir, (err, files) => {
      if (err) {
        throw err;
      }
  
      return files;
    });
  
    rootDirContent.push('');
  
    let matchDefaultValue = rootDirContent.filter(content => {
      return content.match(defaultFolderName);
    });
  
    let folderNameAnswers;

    let incrementFolderName = () => {
        if (matchDefaultValue.length >= 1) {
            defaultFolderName = `${defaultFolderName}-${matchDefaultValue.length}`;
          }
    }

    if (!options.folderName && options.skipPrompts) incrementFolderName();
  
    if (!options.folderName && !options.skipPrompts) {
      incrementFolderName();
      questionPush('Please enter folder name:', defaultFolderName);
      folderNameAnswers = await inquirer.prompt(folderQuestions);
    }
  
    if (options.folderName && !options.skipPrompts) {
      try {
        fs.accessSync(`./${options.folderName}`, fs.constants.F_OK);
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
  
      let equalToAtLeastOneFolder;
  
      do {
        equalToAtLeastOneFolder = rootDirContent.some(content => {
          return content === folderNameAnswers.folderName;
        });
  
        if (equalToAtLeastOneFolder === true) {
          if (folderNameAnswers.folderName !== '') {
            console.log( chalk.cyanBright(`Folder name: "${folderNameAnswers.folderName}" already exists, enter a different folder name instead`) );
          } else {
            console.log( chalk.cyanBright(`Folder name cannot be empty`) );
          }
          folderQuestions.push({
            type: 'input',
            name: 'folderName',
            message: 'Enter different folder name:',
          });
          if (options.folderName) {
            folderNameAnswers = await inquirer.prompt(folderQuestions);
          } else {
            folderNameAnswers = await inquirer.prompt([folderQuestions[1]]);
          }
        }
      } while (equalToAtLeastOneFolder === true);
  
    } catch (err) {
      if (err) {
        //Dummy if statement to prevent: unhandledPromiseRejectionWarning in console
      }
    }
  
    //Note: This affects only the try block of the previous if (options.folderName && !options.skipPrompts) statement
    if (options.folderName && !options.skipPrompts) {
      options.folderName = folderNameAnswers.folderName;
    }
    
    if (options.folderName && options.skipPrompts) {
      let matchFolderNameArg = rootDirContent.some(content => {
        return content === options.folderName;
      });

      if (matchFolderNameArg) {
        options.folderName = incrementFolderName();
      }
    }
  
    return [options, folderNameAnswers, defaultFolderName];
}