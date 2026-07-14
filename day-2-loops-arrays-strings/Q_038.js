// Move all zeros to the end.

const prompt = require("prompt-sync")();

let size = Number(prompt("Input array size: "));
let arr = [];

for (let i = 0; i < size; i++) {
    arr[i] = Number(prompt(`Input element ${i + 1}: `));
}

let result = [];

for (let i = 0; i < size; i++) {
    if (arr[i] !== 0) {
        result.push(arr[i]);
    }
}

for (let i = 0; i < size; i++) {
    if (arr[i] === 0) {
        result.push(arr[i]);
    }
}

console.log(result);