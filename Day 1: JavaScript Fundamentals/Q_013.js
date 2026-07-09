// Convert Celsius to Fahrenheit.

const prompt = require('prompt-sync')();

let c = Number(prompt("Input Celsius to Convert: "))

let f = (c * (9 / 5) + 32)

console.log("Fahrenheit = ", f)