// Remove duplicates.

const prompt = require('prompt-sync')()

let size = Number(prompt("Input array size: "));
let arr = [];

for (let i = 0; i < size; i++) {
    arr[i] = Number(prompt(`Input element ${i + 1}: `));
}

let r = [...new Set(arr)]

console.log(r)