// Find factorial.

const prompt = require("prompt-sync")();

let num = Number(prompt("Input a number: "))
let fact = 1

for (let i = 2; i <= num; i++){
  fact *= i
}

console.log(`Factorial of ${num} is ${fact}`)