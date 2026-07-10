// Find the sum of the first N numbers.

const prompt = require('prompt-sync')()

let num = Number(prompt("Input Number: "))

let sum = 0

for (let i = 1; i <= num; i++){
  sum += i;
}

console.log("Sum =" , sum)