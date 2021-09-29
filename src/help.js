
export const help = () => {
console.log(
`
Usage:
node-mongo <folder_name> <template>  

Command:
node-mongo

Arguments:
<folder_name>   Replace this with your folder name
<template>      Available templates: esm, cjs (and ts coming soon)

Usage example:
node-mongo test-folder cjs

The above example bootstraps the cjs template i.e. 
the common js template into a folder named test-folder.

Prompts:
If you do not specify one or both arguments above, 
you will be prompted to add your folder name and/or 
choose template option from list. For foldername, you 
can choose to use the default foldername provided in
the prompt or type in your preferred folder name.

Flags:
-h, --help          Show help
-i, --install       Install dependencies
-g, --git           Initialize git repo
-s, --skip-install  Skip installing dependencies
-x, --skip-git      Skip initializing git
-y, --yes           See note on --yes flag below

No prompt when --yes flag is used. It skips both 
install and git init, and uses esm template as default 
if no template is specified or if template entered is 
not in the template collection. In the case of folder
name, default foldername is used if no folder name is
specified or when folder name already exists.
`
);
}

export const notRecognised = () => {
console.log(
`
Flag(s) not recognised. Use the help command below for more info:

node-mongo --help`
);
}