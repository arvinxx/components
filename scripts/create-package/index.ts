/* eslint-disable @typescript-eslint/explicit-function-return-type */
const fs = require('fs-extra');
const path = require('path');
const fg = require('fast-glob');
const ejs = require('ejs');
const argv = require('yargs').argv;
const lernaConfig = require('../../lerna.json');

const packagePath = path.join(__dirname, '../../packages');

/**
 * 检查是否已经存在模块
 * @param pkg
 */
const checkExistingPackage = async (pkg: string) => {
  const list = await fs.readdir(packagePath);

  if (list.some((name) => name === pkg)) {
    console.error(`\nPackage ${pkg} exists.\n`);
    process.exit(1);
  }
};

/**
 * 检查模板文件
 * @param entries
 */
const checkTemplateFiles = (entries) => {
  const invalidFile = entries.find((entry) => !entry.endsWith('ejs'));
  if (invalidFile) {
    console.error(
      `\nFile ${path.resolve(__dirname, invalidFile)} is not a template.\n`,
    );
    process.exit(1);
  }
};

/**
 * 创建
 */
const create = async () => {
  if (!argv._[0]) {
    console.error(
      `\nPackage name is required.\n\nyarn create-package <name>\n`,
    );
    process.exit(1);
  }

  const pkg: string = argv._[0].toLowerCase();
  await checkExistingPackage(pkg);

  const templatePath = path.join(__dirname, 'template');

  const entries = await fg(['**/*'], {
    cwd: templatePath,
    dot: true,
  });
  checkTemplateFiles(entries);

  const filesPromise = entries.map(async (entry) => {
    const data = {
      version: lernaConfig.version,
      pkg,
      componentName:
        pkg[0].toUpperCase() +
        pkg.slice(1).replace(/\-(\w)/g, (all, letter) => letter.toUpperCase()),
    };

    const result = await ejs.renderFile(path.join(templatePath, entry), data, {
      async: true,
    });

    await fs.outputFile(
      path.join(
        packagePath,
        pkg,
        entry.replace(/{([^}]*)}/g, (m, key) => data[key]).slice(0, -4),
      ),
      result,
    );
  });

  await Promise.all(filesPromise);
};

create();
