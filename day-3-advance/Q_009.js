// Higher-order function.

const prompt = require('prompt-sync')()

let num1 = Number(prompt('Input number: '))
let num2 = Number(prompt('Input number: '))

function add(a, b) {
  return a + b
}

function calculate(num1, num2, operation) {
  return operation(num1, num2)
}

let sum = calculate(num1, num2, add)

console.log('Sum = ', sum)