// Find frequency of each element.

const prompt = require('prompt-sync')()

let size = Number(prompt('Input array size: '))
let arr = []

for (let i = 0; i < size; i++){
  arr[i] = Number(prompt(`Input elements ${i + 1}: `))
}

let item = Number(prompt('Input element to find frequency: '))
let frequency = (arr, item) => {
  return arr.reduce((count, x) => x === item ? count + 1 : count, 0)
}

console.log(`${item} comes ${frequency(arr, item)} times`)