// Check whether a triangle is valid.

const prompt = require("prompt-sync")()

let a = Number(prompt('Input first side: '));
let b = Number(prompt('Input second side: '));
let c = Number(prompt('Input third side: '));

if (a + b > c && b + c > a && c + a > b) {
  console.log("Correct triangle")
} else {
  console.log("Incorrect triangle")
}