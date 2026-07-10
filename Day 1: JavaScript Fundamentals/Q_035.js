// Print all even numbers from 1 to N.

const prompt = require('prompt-sync')()

let num = Number(prompt("Input number: "))

for (let i = 1; i <= num; i++){
  if (i % 2 === 0) {
    console.log(i)
  }
}