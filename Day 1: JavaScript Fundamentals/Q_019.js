// Find the remainder without using %.

const prompt = require('prompt-sync')()

let dividend = Number(prompt("Input dividend: "))
let divisor = Number(prompt("Input divisor: "))
let quotient = Math.floor(dividend / divisor);
let remainder = (dividend - (divisor * quotient));

console.log("Remainder of the numbers are: ", remainder);