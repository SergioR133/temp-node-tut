setInterval(() => {
    console.log('hello world');
}, 2000)
console.log('I will run first');
// Process stays alive unless you kill process with CONTROL + C
// or if there is an unexpected error

// Notice how 'I will run first' displays before 'hello world'.
// This is because setInterval() is asynchronous.
// The difference between setTimeout() and setInterval() is timeout will execute once, as interval is continuous. 