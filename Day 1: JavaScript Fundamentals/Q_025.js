// Find the greatest among four numbers.

const prompt = require('prompt-sync')()

let num1 = Number(prompt("Input first num: "))
let num2 = Number(prompt("Input second num: "))
let num3 = Number(prompt("Input third num: "))
let num4 = Number(prompt("Input forth num: "))

let max_num = Math.max(num1, num2, num3, num4)
console.log(max_num)