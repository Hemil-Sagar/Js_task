// Check if a character is uppercase.

const prompt = require('prompt-sync')()

let char = prompt("Input character: ")
let upper = char = char.toUpperCase() && char !== char.toLowerCase();

console.log(upper)