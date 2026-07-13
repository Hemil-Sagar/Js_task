// Find second smallest.

const prompt = require("prompt-sync")();

let size = Number(prompt("Input array size: "));
let arr = [];

for (let i = 0; i < size; i++) {
    arr[i] = Number(prompt(`Input element ${i + 1}: `));
}

let smallest = Infinity;
let secondSmallest = Infinity;

for (let i = 0; i < size; i++) {
    if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
    }
}

if (secondSmallest === Infinity) {
    console.log("Second smallest element does not exist.");
} else {
    console.log("Second smallest element is:", secondSmallest);
}