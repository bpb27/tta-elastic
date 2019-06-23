const fs = require('fs-extra');
const rl = require('readline');
const camelize = require('lodash.camelcase');
const upperFirst = require('lodash.upperfirst');
const fileText = require('./file-text');

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('enter the directory (e.g. src/pages)\n', (directory) => {
  readline.question('enter the component name in dash case (e.g. example-component)\n', (componentName) => {
    readline.close();
    generate({ componentName, directory });
  });
});

const generate = async ({ directory, componentName }) => {
  const directoryPath = (directory[directory.length - 1] === '/' ? directory.slice(0, -1) : directory);
  const componentPath = `${directoryPath}/${componentName}`;

  const names = {
    camelCaseName: camelize(componentName),
    dashCase: componentName,
    titleCaseName: upperFirst(camelize(componentName)),
  };

  await fs.mkdir(componentPath);
  await fs.writeFile(`${componentPath}/${componentName}.component.js`, fileText.component(names));
  await fs.writeFile(`${componentPath}/${componentName}.style.scss`, fileText.style(names));
  await fs.writeFile(`${componentPath}/${componentName}.test.js`, fileText.test(names));
  await fs.writeFile(`${componentPath}/index.js`, fileText.index(names));

  console.log('\nsuccess!'); // eslint-disable-line
};
