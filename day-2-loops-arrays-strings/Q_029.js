// Merge two arrays.

const prompt = require('prompt-sync')()

let size1 = Number(prompt("Input first array size: "));
let arr1 = [];

for (let i = 0; i < size1; i++) {
    arr1[i] = Number(prompt(`Input element ${i + 1}: `));
}

let size2 = Number(prompt("Input second array size: "));
let arr2 = [];

for (let i = 0; i < size2; i++) {
    arr2[i] = Number(prompt(`Input element ${i + 1}: `));
}

let merge = arr1.concat(arr2)
console.log(merge)