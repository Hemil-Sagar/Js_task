// Arrow function.

const prompt = require('prompt-sync')()

let x = Number(prompt('Input first number: '))
let y = Number(prompt('Input second number: '))

const add = (x, y) => { return x + y }

let sum = add(x,y)
console.log(sum)