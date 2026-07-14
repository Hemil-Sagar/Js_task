// Rotate array right.

const prompt = require("prompt-sync")();

let size = Number(prompt("Input array size: "));
let arr = [];

for (let i = 0; i < size; i++) {
    arr[i] = Number(prompt(`Input element ${i + 1}: `));
}

let last = arr[size - 1];

for (let i = size - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
}

arr[0] = last;

console.log("Array after right rotation:", arr);