// Count even and odd numbers.

const prompt = require('prompt-sync')()

let size = Number(prompt('Input array size: '))
let arr = []

for (let i = 0; i < size; i++){
  arr[i] = Number(prompt(`Input elements ${i + 1}: `))
}

let odd = 0
let even = 0

for (let i = 0; i < size; i++){
  if (arr[i] % 2 === 0) {
    even++
  } else {
    odd++
  }
}

console.log("Even numbers are: ", even)
console.log("Odd numbers are: ", odd)