// Find Prime number.

const prompt = require('prompt-sync')()

let num = Number(prompt('Input number: '))
let prime = true

if (num <= 1) {
  prime = false
} else {
  for (let i = 2; i < num; i++){
    if (num % i === 0) {
      prime = false
    }
  }
}

if (prime) {
  console.log(num + " is a prime number")
} else {
  console.log(num + " is not a prime number")
}