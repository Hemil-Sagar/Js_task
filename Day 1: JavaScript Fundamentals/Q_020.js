// Calculate the power of a number without Math.pow().

const prompt = require('prompt-sync')()

let num = Number(prompt("Input a number: "))
let power = Number(prompt("Input a power: "))

let result = num ** power

console.log(result)