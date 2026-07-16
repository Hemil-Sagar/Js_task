// Use filter().

const prompt = require("prompt-sync")()

let num = prompt("Input numbers separated by commas: ")

let numbers = num.split(",").map(Number)

let greaterThan10 = numbers.filter(function(num) {
    return num > 10
});

console.log(greaterThan10)