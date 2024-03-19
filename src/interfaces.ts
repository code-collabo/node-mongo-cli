export interface TemplateQuestions {
    type: string;
    name: string;
    message: string;
    choices: string[];
    default: string;
  }

export type ItemplateOptions = "ts" | "esm" | "cjs";

export interface Ioptions {
  skipPrompts: boolean;
    git: true;
    skipGit: string | undefined;
    folderName: string;
    template: ItemplateOptions;
    targetDirectory: string;
    templateDirectory: string;
    runInstall: true;
    skipInstall: boolean;
    help: string | boolean;
    version: string | boolean;
}