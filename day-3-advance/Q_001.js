// Write an addition function.

const prompt = require("prompt-sync")() 

let x = Number(prompt('Input first number: '))
let y = Number(prompt('Input second number: '))

function add(a, b) {
  return a + b;
}

console.log('Addtion of two numbers are: ', add(x, y))