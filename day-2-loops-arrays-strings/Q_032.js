// Rotate array left.

// Rotate array left by one position.

const prompt = require("prompt-sync")();

let size = Number(prompt("Input array size: "));
let arr = [];

for (let i = 0; i < size; i++) {
    arr[i] = Number(prompt(`Input element ${i + 1}: `));
}

let first = arr[0];

for (let i = 0; i < size - 1; i++) {
    arr[i] = arr[i + 1];
}

arr[size - 1] = first;

console.log("Array after left rotation:", arr);