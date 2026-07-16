// Use some().

const prompt = require("prompt-sync")()

let num = prompt("Input numbers separated by commas: ")

let numbers = num.split(",").map(Number)

let even = (element) => element % 2 === 0

console.log(numbers.some(even))