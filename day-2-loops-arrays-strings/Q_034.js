// Find maximum sum.

const prompt = require('prompt-sync')()

let size = Number(prompt('Input array size: '))
let arr = []

for (let i = 0; i < size; i++){
  arr[i] = Number(prompt(`Input elements ${i + 1}: `))
}

let sum = 0

for (let i = 0; i < size; i++){
  sum += arr[i]
}

console.log('Sum= ', sum)