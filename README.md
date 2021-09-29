# node-mongo-cli
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat) ![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg) ![GitHub issues](https://img.shields.io/github/issues/code-collabo/node-mongo-cli?color=red) ![GitHub pull requests](https://img.shields.io/github/issues-pr/code-collabo/node-mongo-cli?color=goldenrod)

**Supported node versions:** node v12.x to v16.x

The **node-mongo-cli** is a command-line interface made with nodejs. It bootstraps any of these 3 boilerplate templates for your nodejs and/or mongoDB development:
- [ES module template](https://github.com/code-collabo/node-mongo-esm-kit)
- [Commonjs template](https://github.com/code-collabo/node-mongo-cjs-kit)
- Typescript (coming soon)

## Features
### CLI
- CLI bootstraps the esm, cjs or ts templates for nodejs and/or mongoDB development.
- Install dependencies and intialize git for the template bootstrapped or choose to skip them.
- Folders are automatically created based on user entry in prompt or command-line.
- Default folder name is provided and incremented if name already exists.
### Templates
- [Two mongoDB connection options](https://code-collabo.gitbook.io/node-mongo/boilerplate-templates#mongodb-connection-options) to pick from in the templates: your installed mongoDB and mongoDBatlas.
- [Demo CRUD app](https://github.com/code-collabo/node-mongo-demo-app) you can go and download to test that your connection is setup and show example usage of the templates.

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

### Skip prompts
No prompt when --yes flag is used. It skips both 
install and git init, and uses esm template as default 
if no template is specified or if template entered is 
not in the template collection. In the case of folder
name, default foldername is used if no folder name is
specified or when folder name already exists.

## Documentation
* See the links for the official [node-mongo documentation](https://code-collabo.gitbook.io/node-mongo/) and [Code Collabo documentation](https://code-collabo.gitbook.io/doc/).

## Want to contribute?
Love the project and wish to contribute? See contribution guide in the [node-mongo gitbook documentation](https://code-collabo.gitbook.io/node-mongo/) for how to start contributing. You can also reach out to [@Ifycode](https://github.com/Ifycode) in case you need any assistance.

## Appreciation
Appreciation goes to [@dkundel](https://github.com/dkundel), [@academind](https://github.com/academind), [@CodAffection](https://github.com/CodAffection), [@coryhouse](https://github.com/coryhouse) whose awesome youTube videos, articles and/or courses helped a lot while building the node-mongo project - cli, templates and/or demo app. Also to [@IsraelObiagba](https://github.com/IsraelObiagba) and [@jiobiagba](https://github.com/jiobiagba) for their help.

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

<!--
## Technologies

[<img alt="javascript" height="25px" src="https://www.freepnglogos.com/uploads/javascript/javascript-online-logo-for-website-0.png" />](https://github.com/code-collabo/node-mongo-cli)
[<img alt="node js" height="25px" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" />](https://github.com/code-collabo/node-mongo-cli)
[<img alt="mongoDB" height="25px" src="https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png" />](https://github.com/code-collabo/node-mongo-cli)
-->

## Contributors ✨

Thanks to these amazing contributors to the node-mongo-cli project. This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. See [emoji key](https://allcontributors.org/docs/en/emoji-key). Contributions of any kind welcome!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Ifycode"><img src="https://avatars.githubusercontent.com/u/45185388?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Obiagba Mary Ifeoma</b></sub></a><br /><a href="https://github.com/code-collabo/node-mongo-cli/commits?author=Ifycode" title="Code">💻</a> <a href="https://github.com/code-collabo/node-mongo-cli/commits?author=Ifycode" title="Documentation">📖</a></td>
    <td align="center"><a href="http://chuddyjoachim.com"><img src="https://avatars.githubusercontent.com/u/56943504?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Chikezie Joachim</b></sub></a><br /><a href="https://github.com/code-collabo/node-mongo-cli/commits?author=chuddyjoachim" title="Code">💻</a></td>
    <td align="center"><a href="https://allcontributors.org"><img src="https://avatars.githubusercontent.com/u/46410174?v=4?s=100" width="100px;" alt=""/><br /><sub><b>All Contributors</b></sub></a><br /><a href="#infra-all-contributors" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
