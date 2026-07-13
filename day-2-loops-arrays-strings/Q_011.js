// Find GCD.

const prompt = require('prompt-sync')()

let num1 = Number(prompt('Input first number: '))
let num2 = Number(prompt('Input second number: '))

let gcd = 1

for (let i = 1; i <= Math.min(num1, num2); i++){
  if (num1 % i === 0 && num2 % i === 0) {
    gcd = i
  }
}

console.log("GCD = ", gcd)