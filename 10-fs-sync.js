// fs or FileSystem module has 2 different approaches. Asynchronously (which is nonblocking) or Synchronously (which is blocking)
// This one will be sync
const { readFileSync, writeFileSync } = require('fs');

console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first)
// console.log(second)

// If the file is not there, Node will create one.
// If the file is there, it will overwrite all the information on it.
// If you want to append to the file, we need to pass in one more argument.
// It will be an object which is basically the options object. adding {flag: 'a'}, will set the option to append.
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`, 
    { flag: 'a' }
);

console.log('done with this task')
console.log('starting the next one')