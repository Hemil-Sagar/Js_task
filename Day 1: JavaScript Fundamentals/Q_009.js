// Find the smallest of three numbers.

const prompt = require('prompt-sync')();

let a = Number(prompt("Input first number: "));
let b = Number(prompt("Input second number: "));
let c = Number(prompt("Input third number: "));

console.log(Math.min(a, b, c))