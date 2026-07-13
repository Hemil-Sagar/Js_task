// Find Armstrong number.

const prompt = require("prompt-sync")();

let num = Number(prompt("Input number: "));
let original = num;
let digits = 0;
let sum = 0;

let temp = Math.abs(num);

if (temp === 0) {
    digits = 1;
} else {
    while (temp > 0) {
        digits++;
        temp = Math.floor(temp / 10);
    }
}

temp = Math.abs(num);

while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** digits;
    temp = Math.floor(temp / 10);
}

if (sum === Math.abs(original)) {
    console.log(original + " is an Armstrong number.");
} else {
    console.log(original + " is not an Armstrong number.");
}