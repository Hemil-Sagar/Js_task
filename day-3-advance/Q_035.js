// Use findIndex().

const prompt = require("prompt-sync")()

let num = prompt("Input numbers separated by commas: ")

let numbers = num.split(",").map(Number)

let largenum = (element) => element > 5
console.log(numbers.findIndex(largenum))