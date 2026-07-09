// Convert Fahrenheit to Celsius.

const prompt = require('prompt-sync')();

let f = Number(prompt("Input Fahrenheit to Convert: "))

let c = ((f - 32)/(9/5))

console.log("Celsius = ", c)