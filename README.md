# node-mongo-cli

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat) ![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg) ![GitHub issues](https://img.shields.io/github/issues/code-collabo/node-mongo-cli?color=red) ![GitHub pull requests](https://img.shields.io/github/issues-pr/code-collabo/node-mongo-cli?color=goldenrod)

The **node-mongo-cli** is a command-line interface made with nodejs. It bootstraps any of these 3 boilerplate templates for your nodejs and/or mongoDB development:
- ES module template
- Commonjs template
- Typescript (coming soon)

## Features
- CLI bootstraps the esm, cjs or ts templates for nodejs and/or mongoDB development.
- Install dependencies and intialize git for the template bootstrapped or choose to skip them.
- Folders are automatically created based on user entry in prompt or command-line.
- Default folder name is provided and incremented if name already exists.
- Two connection options to pick from: your installed mongoDB and mongoDBatlas.
- Demo CRUD app to test that your connection is setup and show example usage of the templates.

## Installation
Install CLI globally with this command:
````
npm install -g @code-collabo/node-mongo-cli
````

## Command
After installing globally, use the node-mongo command.
````
node-mongo
````

### Usage
````
node-mongo <folder_name> <template>  
````

### Usage example
The example below will bootstrap the cjs template i.e. the common js template into a folder named test-folder.
````
node-mongo test-folder cjs
````

### Flags
````
-h, --help          Show help
-i, --install       Install dependencies
-g, --git           Initialize git repo
-s, --skip-install  Skip installing dependencies
-x, --skip-git      Skip initializing git
-y, --yes           See note on --yes flag below
````

### Prompts
If you do not specify one or both arguments above, 
you will be prompted to add your folder name and/or 
choose template option from list. For foldername, you 
can choose to use the default foldername provided in
the prompt or type in your preferred folder name.

### --yes flag
No prompt when --yes flag is used. It skips both 
install and git init, and uses esm template as default 
if no template is specified or if template entered is 
not in the template collection. In the case of folder
name, default foldername is used if no folder name is
specified or when folder name already exists.

## Documentation
More about the node-mongo project in Code Collabo's documentation.

## Appreciation
Appreciation goes to [@dkundel](https://github.com/dkundel), [@academind](https://github.com/academind), [@CodAffection](https://github.com/CodAffection), [@coryhouse](https://github.com/coryhouse) whose awesome youTube videos, articles and/or courses helped a lot while building the node-mongo project.

Consider adding the 4 authors pictures here too

## Contributors
Decide if contributors should be here since they are still few or in a separate file.

<!--

node-mongo

Use the help command

node-mongo --help


tool useful to initialize, scaffold and make mongoDB development easier in nodejs environment. With the CLI, you can install any of the starter kit templates - [esm](https://github.com/code-collabo/node-mongo-starter-kit) and [cjs](https://github.com/code-collabo/node-mongo-starter-cjs). It not only helps install the starter-kit, but also allows you to add new model and controller files with content using simple commands.

The [cli](https://github.com/code-collabo/node-mongo-cli) is built to help provide better experience when using the starter-kit in MongoDB, MERN or MEAN projects.

## Documentation
For easy maintenance (due to modifications to be made and addition of more features) and also to provide you better support, sections previously included in the readme have been [moved to our docs](https://code-collabo.gitbook.io/docs/) - see [this section of the docs](https://code-collabo.gitbook.io/docs/contributor-guide/docs) in case you also wish to contribute to the docs. Simply click on any of the links to learn to install, use and contribute to the node-mongo project.
#### Using node-mongo
No user guide yet, work is still in progress.

#### Contributing to node-mongo
* See [contributor guide](https://code-collabo.gitbook.io/docs/contributor-guide/contributor-guide) which contains ***contributing.md***, ***CODE_OF_CONDUCT***, ***git workflow*** and ***project development setup*** to help you get started.

## Contributors ✨

[Thanks to these wonderful people](https://github.com/code-collabo/node-mongo-cli/blob/develop/contributor.md) helping to improve the [node-mongo-cli project](https://github.com/code-collabo/node-mongo-cli), and [all contributors](https://code-collabo.gitbook.io/docs/meet-our-awesome-contributors/all-contributors) to the [Code Collabo community project](https://github.com/code-collabo)_**.**_

## Technologies

[<img alt="javascript" height="25px" src="https://www.freepnglogos.com/uploads/javascript/javascript-online-logo-for-website-0.png" />](https://github.com/code-collabo/node-mongo-cli)
[<img alt="node js" height="25px" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" />](https://github.com/code-collabo/node-mongo-cli)
[<img alt="mongoDB" height="25px" src="https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png" />](https://github.com/code-collabo/node-mongo-cli)

-->
