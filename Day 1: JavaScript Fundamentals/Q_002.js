// Swap two numbers without using a third variable.

const prompt = require('prompt-sync')();

let a = prompt("Input first variable: ");
let b = prompt("Input second variable: ");

[a, b] = [b, a];

console.log('a= ', a);
console.log("b= ", b);

