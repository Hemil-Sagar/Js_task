// Find second largest.

const prompt = require("prompt-sync")();

let n = Number(prompt("Input number of elements: "));
let arr = [];

for (let i = 0; i < n; i++) {
    arr[i] = Number(prompt(`Input element ${i + 1}: `));
}

let largest = arr[0];
let secondLargest = arr[0];

for (let i = 1; i < n; i++) {

    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    }
    else if (arr[i] > secondLargest && arr[i] != largest) {
        secondLargest = arr[i];
    }

}

console.log("Second Largest =", secondLargest);