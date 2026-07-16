// Use find().

const prompt = require("prompt-sync")()

let num = prompt("Input numbers separated by commas: ")

let numbers = num.split(",").map(Number)

let found = numbers.find(function (element){
  return element > 2
})

console.log(found)