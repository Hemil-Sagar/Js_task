// Set.

const prompt = require("prompt-sync")();

let num = prompt("Input numbers separated by commas: ");

let numbers = num.split(",").map(Number);

let uniqueNumbers = new Set(numbers);

console.log(uniqueNumbers);