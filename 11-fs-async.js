// Async is similar to sync but we need to provide a callback.
// A callback is esencially we run that function when we are done.
const { readFile, writeFile } = require('fs');

// If we run the code without specifying 'utf8' (encoding) we get the buffer as a result below:
// <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 74 68 65 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>
// Adding the 'utf8' in between the path and the callback will prevent this form happening.
console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    } else {
        const first = result;
        readFile('./content/second.txt', 'utf8', (err, result) => {
            if (err) {
                console.log(err);
                return;
            } else {
                const second = result;
                writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
                    if (err) {
                        console.log(err);
                        return;
                    } else {
                        console.log('done with this file');
                        console.log(result);
                    }
                })
            }
        })
    }
})
console.log('starting next task');