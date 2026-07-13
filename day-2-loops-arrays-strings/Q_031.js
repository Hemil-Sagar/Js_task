// Find missing number.

const prompt = require('prompt-sync')()

let size = Number(prompt("Input array size: "));
let arr = [];

for (let i = 0; i < size; i++) {
    arr[i] = Number(prompt(`Input element ${i + 1}: `));
}

function missingNumber(arr) {
  let n = arr.length + 1
  let sum = 0
  for (let i = 0; i < n - 1; i++){
    sum += arr[i]
  }
  let expSum = (n * (n + 1)) / 2
  return expSum - sum
}

console.log(missingNumber(arr))