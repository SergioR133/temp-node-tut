// npm - global command comes with node

// local dependency - use it only in this particular project
// npm i <packageName> or npm install <packageName>

// global dependency - use it in any project
// npm install -g <packageName
// sudo npm install -g <packageName> (mac)

// Package.json - manifest file (stores inmprtant info about project/package)
// Manual approach (create package.json in the root, create properties, etc)
// Npm init (step by step, press enter to skip)
// Npm init -y (everything default)

// In order to start using the modules we downloaded, we require them.
// Unlike built-in node modules, we need to install the packages before we can use them.
const _ = require('lodash');

const items = [1, [2, [3, [4, [5]]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)