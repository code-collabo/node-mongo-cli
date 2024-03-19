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