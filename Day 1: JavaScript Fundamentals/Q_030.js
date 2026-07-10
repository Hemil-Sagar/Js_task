// Find whether a number is divisible by both 3 and 5.

const prompt = require('prompt-sync')()

let num = Number(prompt("Input Number: "))

if (num % 3 === 0 && num % 5 === 0) {
  console.log(`${num} is divisible by both 3 and 5`)
} else {
  console.log(`${num} is not divisible by both 3 and 5`)
}