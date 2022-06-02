// Secret will remain local since i will not export it
const secret = 'SUPER SECRET',
// The names below will be shared with other files that require it becasie i am exporting them using the module's export property.
      john = 'john',
      susan = 'susan',
      sergio = 'sergio';

// ES6 allows us to write shorthand verisons. so the variable will also be the name of the prop being sent over.
module.exports = {john, susan, sergio}