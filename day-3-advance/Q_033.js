// Use reduce().

const prompt = require("prompt-sync")()

let num = prompt("Input numbers separated by commas: ")

let numbers = num.split(",").map(Number)

let sum = numbers.reduce((acc, x) => acc + x, 0)

console.log(sum)