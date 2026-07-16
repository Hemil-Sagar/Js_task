// Map.

const prompt = require("prompt-sync")()

let input = Number(prompt("Input numbers separated by commas: "))

let numbers = input.split(",").map(Number)

let squares = numbers.map(num => num * num)

console.log("Original Array:", numbers)
console.log("Squared Array:", squares)