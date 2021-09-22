
export const help = () => {
console.log(
`
Usage:
node-mongo <folder_name> <template>  

Command:
node-mongo

Arguments:
<folder_name>   Replace this with your folder name
<template>      Available templates: esm, cjs and ts

Usage example:
node-mongo test-folder cjs

The above example bootstraps the cjs template i.e. 
the common js template into a folder named test-folder.

Prompts:
If you do not specify one or both arguments above, 
you will be prompted to type in folder name and/or 
choose template option from list.

Flags:
-h, --help          Show help
-i, --install       Install dependencies
-g, --git           Initialize git repo
-s, --skip-install  Skip installing dependencies
-x, --skip-git      Skip initializing git
-y, --yes           Skip both install and git, and use esm template as default
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