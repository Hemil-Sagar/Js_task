// Reverse a number.

const prompt = require('prompt-sync')()

let num = Number(prompt('Input number: '))
let reverse = 0

while (num > 0) {
  let r = num % 10
  reverse = reverse * 10 + r
  num = Math.floor(num / 10)
}

console.log("Reversed number: ", reverse)