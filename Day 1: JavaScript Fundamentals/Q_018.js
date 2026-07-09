// Check whether a number is even or odd.

const prompt = require('prompt-sync')()

let num = Number(prompt("Input Number: "))

if (num %2 === 0) {
  console.log("Number is even")
} else {
  console.log("Number is odd")
}