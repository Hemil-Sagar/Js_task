// Function returning array.

const prompt = require('prompt-sync')()

let size = Number(prompt('Input size of array: '))
let arr = []

for (let i = 0; i < size; i++){
  arr[i] = Number(prompt(`Input element ${i + 1} of array: `))
}

function array(arr) {
  return arr
}

console.log(array(arr))