import { basename, resolve, dirname } from 'path';
// file to get and save if user still has the
// Initial settings...

const { chdir } = process;

// Dynamically get current the name of this file you are in, and its parent folder
const developerJsFileName = basename(__filename/*, extname(__filename)*/);

const currentFileUrl = import.meta.url;

let newUrl;
if (process.platform === "darwin" || process.platform === "linux") {
  newUrl = new URL(currentFileUrl).pathname;
} else
  newUrl = new URL(currentFileUrl).pathname.substring(
    new URL(currentFileUrl).pathname.indexOf("/") + 1
  );

  const cleanupFolderPath = dirname(newUrl);
// Change directory into the dynamically gotten parent folder, then extract folder name from path
chdir(cleanupFolderPath);
const cleanupFolderName = basename(resolve());

// CLI repo's original content config object
export const repo = {
  hasOriginalContentOnly: true,
  originalContentList: [
    cleanupFolderName,
    '.all-contributorsrc',
    '.babelrc',
    '.editorconfig',
    '.eslintrc.json',
    '.git',
    '.github',
    '.gitignore',
    '.npmrc',
    'LICENSE',
    'README.md',
    'bin',
    'cleanup.js',
    'node_modules',
    'package-lock.json',
    'package.json',
    'spec',
    'src',
    'templates'
  ],
  developerJsFileName,
  cleanupFolderName,
}
