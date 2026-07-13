// Sum of digits.
const prompt = require('prompt-sync')()

let num = Number(prompt("Input Number: "))
let sum = 0

num = Math.abs(num)

while (num > 0) {
  let digit = num % 10;
  sum += digit
  num = Math.floor(num/10)
}

console.log("Sum = ", sum)