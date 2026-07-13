// Find largest element.

const prompt = require("prompt-sync")();

let n = Number(prompt("Input number of elements: "));
let arr = [];

for (let i = 0; i < n; i++) {
    arr[i] = Number(prompt(`Input element ${i + 1}: `));
}

let largest = arr[0];

for (let i = 1; i < n; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log("Largest element =", largest);