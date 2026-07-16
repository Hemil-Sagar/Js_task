// Use map().

const prompt = require('prompt-sync')()

let num = prompt("Input numbers separated by commas: ");

let numbers = num.split(',').map(Number)

let sqare = numbers.map(num => num * num)

console.log("Square: ", sqare)