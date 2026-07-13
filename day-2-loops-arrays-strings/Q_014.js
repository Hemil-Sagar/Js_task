// Find Strong number.

const prompt = require('prompt-sync')()

let num = Number(prompt("Input number: "))
let original = num
let sum = 0

while (num > 0) {
  let digit = num % 10
  let fact = 1
  for (let i = 1; i <= digit; i++){
    fact = fact * i
  }
  sum = sum + fact
  num = Math.floor(num/10)
}

if (sum === original) {
  console.log(original + " is a strong number")
} else {
  console.log(original + " is not a strong number")
}

// const prompt = require("prompt-sync")();

// let n = Number(prompt("Enter number of rows: "));

// for (let i = 1; i <= n; i++) {
//     let pattern = "";

//     // Print spaces
//     for (let j = 1; j <= n - i; j++) {
//         pattern += " ";
//     }

//     // Print stars
//     for (let k = 1; k <= (2 * i - 1); k++) {
//         pattern += "*";
//     }

//     console.log(pattern);
// }