// Use flatMap().

const prompt = require('prompt-sync')()

let n = Number(prompt('Input number of element: '))
let arr = []

for (let i = 0; i < n; i++){
  arr.push(prompt('Input value: '))
}

let result = arr.flatMap(item => item.split(',').map(Number))

console.log('Original array: ', arr)
console.log('Flatmap array: ', result)