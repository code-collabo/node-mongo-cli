# Command Line Interface

## Installation

Install CLI globally with this command:

```text
npm install -g @code-collabo/node-mongo-cli
```

## Command

After installing globally, use the node-mongo command.

```text
node-mongo
```

### Usage

```text
node-mongo <folder_name> <template>
```

### Usage example

The example below will bootstrap the cjs template i.e. the common js template into a folder named test-folder.

```text
node-mongo test-folder cjs
```

### Flags

```text
-h, --help          Show help
-i, --install       Install dependencies
-g, --git           Initialize git repo
-s, --skip-install  Skip installing dependencies
-x, --skip-git      Skip initializing git
-y, --yes           See note on --yes flag below
```

### Prompts

If you do not specify one or both arguments above, you will be prompted to add your folder name and/or choose template option from list. For folder name, you can choose to use the default folder name provided in the prompt or type in your preferred folder name.

### Skip prompts

No prompt when --yes flag is used. It skips both install and git init, and uses esm template as default if no template is specified or if template entered is not in the template collection. In the case of folder name, default folder name is used if no folder name is specified or when folder name already exists.

