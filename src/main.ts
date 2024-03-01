import chalk from "chalk";
import fs from "fs";
import ncp from "ncp";
import path from "path";
import { promisify } from "util";
import execa from "execa";
import Listr from "listr";
import { spawn } from "child_process";
import { userSupport } from "./help";

const access = promisify(fs.access);
const copy = promisify(ncp);

type ItemplateOptions = "ts" | "esm" | "cjs";

let createGitIgnoreFile = async (options: { targetDirectory: string }) => {
  const content =
    "# See http://help.github.com/ignore-files/ for more about ignoring files.\n\n#.env file\n.env\n\n# dependencies\n/node_modules";
  fs.writeFileSync(path.join(options.targetDirectory, ".gitignore"), content);
  return;
};

let createEnvFiles = async (options: {
  template: ItemplateOptions;
  targetDirectory: string;
}) => {
  let atlasPort;
  let localPort;
  const assignPort = () => {
    if (options.template === "ts") {
      atlasPort = 8070;
      localPort = 8071;
    }
    if (options.template === "esm") {
      atlasPort = 8080;
      localPort = 8081;
    }
    if (options.template === "cjs") {
      atlasPort = 8090;
      localPort = 8091;
    }
  };
  assignPort();
  const content = `\nPORT_ATLAS=${atlasPort}\nMONGODB_ATLAS_URI=\n\nPORT_LOCAL=${localPort}\nMONGODB_LOCAL_URI=\n\nCLIENT_APP_PORT=\nCLIENT_APP_URL=\n`;
  fs.writeFileSync(path.join(options.targetDirectory, ".env.example"), content);
  return;
};

let createLisenceFiles = async (options: { targetDirectory: string }) => {
  const content =
    'ISC License (ISC)\n\nCopyright 2022-2023 Author Name\n\nPermission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.\n\nTHE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.';
  fs.writeFileSync(path.join(options.targetDirectory, "LICENSE"), content);
  return;
};

let copyTemplateFolderContent = async (options: {
  templateDirectory: string;
  targetDirectory: string;
}) => {
  return copy(options.templateDirectory, options.targetDirectory, {
    clobber: false,
  });
};

let gitInit = async (options: { git: any; targetDirectory: any }) => {
  if (options.git) {
    //git init only if git returns true
    const result = await execa("git", ["init"], {
      cwd: options.targetDirectory,
    });

    if (result.failed) {
      return Promise.reject(new Error("Failed to initialize git"));
    }
  }

  return;
};

let npmInstall = async (options: { runInstall: any; targetDirectory: any }) => {
  if (options.runInstall) {
    //install only if runInstall returns true
    if (process.platform === "win32")
      spawn("npm.cmd", ["install"], {
        cwd: options.targetDirectory,
        stdio: "inherit",
      });
    else
      spawn("npm", ["install"], {
        cwd: options.targetDirectory,
        stdio: "inherit",
      });
  }

  return;
};

export let downloadTemplateKit = async (options: {
  targetDirectory: string;
  folderName: string;
  template: ItemplateOptions;
  templateDirectory: string;
  git: any;
  runInstall: any;
}) => {
  options = {
    ...options,
    targetDirectory: options.targetDirectory || process.cwd(), //root/parent folder at this point
  };

  //create folder with user input here...
  fs.mkdirSync(`./${options.folderName}`, { recursive: true });

  //change directory from root/parent folder into user's own folder (so that it becomes cwd)
  process.chdir(`./${options.folderName}`);
  options.targetDirectory = process.cwd();

  // const currentFileUrl = import.meta.url;
  const currentFileUrl = __filename;

  console.log(new URL(currentFileUrl).pathname);

  let newUrl;
  if (process.platform === "darwin" || process.platform === "linux") {
    newUrl = new URL(currentFileUrl).pathname;
  } else
    newUrl = new URL(currentFileUrl).pathname.substring(
      new URL(currentFileUrl).pathname.indexOf("/") + 1
    );

  const templateDir = path.resolve(
    newUrl,
    "../../../templates",
    options.template.toLowerCase()
  );

  options.templateDirectory = templateDir;

  try {
    await access(templateDir, fs.constants.R_OK).then(async () => {
      /* rename name option in package.json same as project/folder name */
      execa("npx", ["npe", "name", options.folderName], {
        cwd: options.targetDirectory,
      }).stdout.pipe(process.stdout);
    });
  } catch (err) {
    console.error(
      `\n%s Template name or directory path is (probably) incorrect`,
      chalk.red.bold("ERROR")
    );
    userSupport();
    process.exit(1);
  }

  await createGitIgnoreFile(options);

  await createEnvFiles(options);

  await createLisenceFiles(options);

  const listrTasks = new Listr([
    {
      title: `${chalk.green(
        `${options.template} template`
      )} copied into the generated folder ${chalk.green(
        `=> ${options.folderName}`
      )}`,
      task: () => copyTemplateFolderContent(options),
    },
    {
      title: "git init",
      task: () => gitInit(options),
      skip: () =>
        !options.git
          ? "Skipped because you specified either --skip-git or --yes flags"
          : undefined,
    },
    {
      title: "npm install",
      task: () => npmInstall(options),
      skip: () =>
        !options.runInstall
          ? "Skipped because you specified either --skip-install or --yes flags"
          : undefined,
    },
  ]);

  await listrTasks.run();

  return true;
};
