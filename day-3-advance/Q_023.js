// Rest operator.

const prompt = require("prompt-sync")();

let input = prompt("Input Number: ");

let numbers = input.split(",").map(Number);

function sum(...nums) {
    return nums.reduce((total, num) => total + num, 0);
}

console.log(sum(...numbers));