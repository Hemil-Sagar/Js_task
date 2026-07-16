// Chain multiple methods.

const prompt = require("prompt-sync")();

let n = Number(prompt("Enter number of elements: "));
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(Number(prompt(`Enter element ${i + 1}: `)));
}

let result = arr.filter(num => num % 2 === 0).map(num => num * num).sort((a, b) => a - b)

console.log('Original', arr)
console.log('After chaining', result)
