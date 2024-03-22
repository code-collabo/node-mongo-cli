export interface TemplateQuestions {
    type: string;
    name: string;
    message: string;
    choices: string[];
    default: string;
  }

export type ItemplateOptions = string;

export interface Ioptions {
    skipPrompts: boolean;
    git: boolean;
    skipGit: string | undefined;
    folderName: string;
    template: ItemplateOptions;
    targetDirectory: string;
    templateDirectory: string;
    runInstall: boolean;
    skipInstall: boolean;
    help: string | boolean;
    version: string | boolean;
}

export interface IFoldernameAnswers {
  folderName:string
}

export interface IFolderQuestions {
  type: string; 
  name: string; 
  message: string; 
  default?:string | null
}