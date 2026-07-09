// Check if a number is positive, negative, or zero.

const prompt = require('prompt-sync')();

let a = Number(prompt("Give a Number to test: "))

if (a > 0) {
  console.log(a, " is positive")
} else if (a < 0) {
  console.log(a, " is negative")
} else if (a == 0) {
  console.log(a, " is zero")
} else {
  console.log(a, " is not a number")
}