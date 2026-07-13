// Find smallest element.

const prompt = require("prompt-sync")();

let n = Number(prompt("Input number of elements: "));
let arr = [];

for (let i = 0; i < n; i++) {
    arr[i] = Number(prompt(`Input element ${i + 1}: `));
}

let smallest = arr[0];

for (let i = 1; i < n; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}

console.log("Smallest element =", smallest);