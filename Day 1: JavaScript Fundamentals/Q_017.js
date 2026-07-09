// Find the square and cube of a number.

const prompt = require('prompt-sync')()

let num = Number(prompt("Input a number: "));

let square = Math.pow(num, 2);
let cube = Math.pow(num, 3);

console.log(`Square of Number is: ${square} and Cube of Number is: ${cube}`)