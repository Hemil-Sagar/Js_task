// Find union.

const prompt = require("prompt-sync")();

let size1 = Number(prompt("Input first array size: "));
let arr1 = [];

for (let i = 0; i < size1; i++) {
    arr1[i] = Number(prompt(`Input element ${i + 1}: `));
}

let size2 = Number(prompt("Input array size: "));
let arr2 = [];

for (let i = 0; i < size2; i++) {
    arr2[i] = Number(prompt(`Input element ${i + 1}: `));
}

function union(arr1, arr2) {
  let arr3 = [...arr1, ...arr2]
  return arr3
}

console.log(union(arr1, arr2))