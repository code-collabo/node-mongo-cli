# node-mongo-cli
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors-)
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



<!--

## Contributors
Decide if contributors should be here since they are still few or in a separate file.

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://dkundel.com"><img src="https://avatars.githubusercontent.com/u/1505101?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dominik Kundel</b></sub></a><br /><a href="#mentoring-dkundel" title="Mentoring">🧑‍🏫</a></td>
    <td align="center"><a href="https://academind.com"><img src="https://avatars.githubusercontent.com/u/28806202?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Academind</b></sub></a><br /><a href="#mentoring-academind" title="Mentoring">🧑‍🏫</a></td>
    <td align="center"><a href="http://codaffection.com/"><img src="https://avatars.githubusercontent.com/u/32505654?v=4?s=100" width="100px;" alt=""/><br /><sub><b>CodAffection</b></sub></a><br /><a href="#mentoring-CodAffection" title="Mentoring">🧑‍🏫</a></td>
    <td align="center"><a href="http://www.bitnative.com"><img src="https://avatars.githubusercontent.com/u/1688997?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Cory House</b></sub></a><br /><a href="#mentoring-coryhouse" title="Mentoring">🧑‍🏫</a></td>
    <td align="center"><a href="https://github.com/IsraelObiagba"><img src="https://avatars.githubusercontent.com/u/14045379?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Israel Obiagba</b></sub></a><br /><a href="#mentoring-IsraelObiagba" title="Mentoring">🧑‍🏫</a></td>
    <td align="center"><a href="https://github.com/jiobiagba"><img src="https://avatars.githubusercontent.com/u/42423547?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Joseph Obiagba</b></sub></a><br /><a href="#mentoring-jiobiagba" title="Mentoring">🧑‍🏫</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
## Technologies

[<img alt="javascript" height="25px" src="https://www.freepnglogos.com/uploads/javascript/javascript-online-logo-for-website-0.png" />](https://github.com/code-collabo/node-mongo-cli)
[<img alt="node js" height="25px" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" />](https://github.com/code-collabo/node-mongo-cli)
[<img alt="mongoDB" height="25px" src="https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png" />](https://github.com/code-collabo/node-mongo-cli)

-->
