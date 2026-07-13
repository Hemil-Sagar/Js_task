// Find Perfect number.

const prompt = require('prompt-sync')()

let num = Number(prompt('Input number: '))
let sum = 0

for (i = 1; i < num; i++){
  if (num % i === 0) {
    sum += i
  }
}

if (sum === num) {
  console.log(num + " is perfect number")
} else {
  console.log(num + " is not perfect number")
}