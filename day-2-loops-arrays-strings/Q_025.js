// Reverse an array.

const prompt = require("prompt-sync")();

let size = Number(prompt("Input array size: "));
let arr = [];

for (let i = 0; i < size; i++) {
    arr[i] = Number(prompt(`Input element ${i + 1}: `));
}

function reverseArray(arr) {
  arr.reverse()
}
reverseArray(arr)
console.log(arr.join(" "))