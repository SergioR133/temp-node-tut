// Here we do not use module.exports(), However, we can require this file and it will still run the function becuase we invoked it.
const num1 = 5,
      num2 = 10;

function addValues() {
    console.log(`The sum is ${num1 + num2}`);
}

addValues();