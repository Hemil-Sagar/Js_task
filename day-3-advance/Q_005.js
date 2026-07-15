// Prime checker function.

const prompt = require('prompt-sync')()

let num = Number(prompt('Input number: '))

function primeNumber(num) {
  if (num <= 1) {
    return false
  }
  
  for (let i = 2; i < num; i++) {
          if (num % i === 0) {
              return false;
          }
      }
  return true
}

if (primeNumber(num)) {
  console.log(`${num} is a prime number`)
} else {
  console.log(`${num} is not a prime number`)
}