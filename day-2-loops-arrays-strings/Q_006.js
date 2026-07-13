// Product of digits.

const prompt = require('prompt-sync')()

let num = Number(prompt('Input first number: '))

let product = 1
num = Math.abs(num)

while (num > 0) {
  let digits = num % 10
  product *= digits
  num = Math.floor(num/10)
}

console.log('Product = ', product)