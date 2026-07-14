// Find maximum using a function.

const prompt = require('prompt-sync')()

let a = Number(prompt('Input first Number: '))
let b = Number(prompt('Input second Number: '))

function maximum(a, b) {
  return Math.max(a, b)
}

console.log("Maximum number is: ", maximum(a, b))