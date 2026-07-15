// Recursive Fibonacci.

const prompt = require('prompt-sync')()

let num = Number(prompt('Input Number: '))

function fibonacci(num) {
  if (num <= 1) {
    return num
  }
  return fibonacci(num-1) + fibonacci(num-2)
}
console.log(fibonacci(num))