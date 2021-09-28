# Untitled

## Development environment

Eslint has already been set up and automated for development purpose. Babel also \(for transpiling the es6 template of the starter kit\). After cloning your fork on to your computer as explained in the [git workflow page](https://code-collabo.gitbook.io/docs/contributor-guide/git-workflow), here's how to get your [node-mongo-esm-kit](https://github.com/code-collabo/node-mongo-esm-kit) or [node-mongo-cjs-kit](https://github.com/code-collabo/node-mongo-cjs-kit) development environment running:

* Run `npm install` to install dependencies.
* Use `npm start` or `npm start -s` to start the project.

## Installed mongoDB and atlas options

There are two options - `installed MongoDB` option and `MongoDB ATLAS` option. To setup successful connection for whichever option you wish to use for your project, follow the guide written in yellow, which comes up after `Server running at http://localhost:3000` and `Error in DB connection` message in the console.

### Project resources

A number of resources have been put together to help understand the project, or have an understanding of the sources where the idea used to write the base code came from. Feel free to use other materials alongside these:

* [How to build a CLI with node.js](https://youtu.be/s2h28p4s-Xs) - _youTube video_.
* [How to build a CLI with node.js](https://www.twilio.com/blog/how-to-build-a-cli-with-node-js) - _the article_.
* [How to use node fs to scaffold files for any project](https://youtu.be/U9lSmRBPqFY).
* [Building a restful API with node.js](https://academind.com/tutorials/building-a-restful-api-with-nodejs/).
* [MEAN stack CRUD operations](https://youtu.be/UYh6EvpQquw) - _1st 33 minutes_.



## Development environment

Jasmine and eslint have already been set up and automated for development purpose. After cloning your fork on to your computer as explained in the [git workflow page](https://code-collabo.gitbook.io/docs/contributor-guide/git-workflow), here's how to get your [node-mongo-cli](https://github.com/code-collabo/node-mongo-cli) development environment running:

* Run `npm install` to install dependencies.
* To run eslint, use `npm start` or `npm start -s` .
* To run jasmine tests, use `npm test` or `npm test -s`. 

{% hint style="info" %}
You can decide to open separate terminals for each while you work on the CLI in another terminal.
{% endhint %}

## Commands and test cases

There are 3 templates - `es6`, `cjs`, `ts-es6`. The `es6` template is the default template. A folder is automatically created from your entry, and automatically downloads the template files too.

Run the following commands to test:

* node-mongo
* node-mongo cjs-folder cjs
* node-mongo ts-folder ts-es6
* node-mongo other java

## Flags and test cases

`-i` is alias for `--intstall`, `-g` is alias for `--git`, `-s` is alias for `--skip-intstall`, `-x` is alias for `--skip-git`, `-y` is alias for `--yes`. You can use any of these to test the commands below. Commands that work alike have been grouped together below. Run the following commands to test.

**Group 1** - Installs dependencies and initializes git:

* node-mongo a1
* node-mongo a2 -i -g

**Group 2** - Skips Install and initializes git:

* node-mongo a3 -s
* node-mongo a4 -s -g

**Group 3** - Skips install and skips git init:

* node-mongo a5 -s -x
* node-mongo a6 -y 

{% hint style="info" %}
Ensure to delete the generated folders before committing your changes and sending a pull request.
{% endhint %}

