// Use flat().

const prompt = require("prompt-sync")()

let arr = []

let n = Number(prompt("Enter number of elements: "))

for (let i = 0; i < n; i++) {
  let value = prompt("Enter value: ")

  if (value.includes(",")) {
    arr.push(value.split(',').map(Number))
  } else {
    arr.push(Number(value))
  }
}

console.log('Original arr: ', arr)
console.log('Flat arr: ', arr.flat())
