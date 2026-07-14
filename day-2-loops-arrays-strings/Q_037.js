// Find duplicate elements.

const prompt = require('prompt-sync')()

let size = Number(prompt('Input array size: '))
let arr = []

for (let i = 0; i < size; i++){
  arr[i] = Number(prompt(`Input elements ${i + 1}: `))
}

let duplicate = arr.filter((item, index) => arr.indexOf(item) !== index)
console.log(duplicate)