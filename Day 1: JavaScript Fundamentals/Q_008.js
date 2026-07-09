// Find the largest of two numbers.

const prompt = require('prompt-sync')();

let a = Number(prompt("Input first number: "));
let b = Number(prompt("Input second number: "));

if (a > b) {
  console.log(a," is greater")
} else {
  console.log(b, "is greater")
}