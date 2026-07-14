// Recursive factorial.

const prompt = require('prompt-sync')()

let num = Number(prompt('Input Number: '))

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1
  }
  return num*factorial(num - 1)
}

console.log("factorial of number is: ", factorial(num))