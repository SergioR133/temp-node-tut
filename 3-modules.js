// CommonJS - every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHello = require('./5-utils');
const data = require('./6-alternative')
// When we require something without storing it a variable, it will automatically call the file. In this case addValues() was invoked
// in the mind-grenade file and is run on here.
// When you import a module, you actually invoke it.
require('./7-mind-grenade')

sayHello(names.sergio);
sayHello(names.susan);
sayHello(names.john);

console.log(data)