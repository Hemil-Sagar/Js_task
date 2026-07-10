// Create a simple calculator.

const prompt = require('prompt-sync')()

let num1 = Number(prompt("Input first number: "))
let num2 = Number(prompt("Input second number: "))

let operator = prompt("Input operator: ")

if (operator === "+") {
  console.log(num1 + num2)
} else if (operator === "-") {
  console.log(num1 - num2)
} else if (operator === "*") {
  console.log(num1 * num2)
} else if (operator === "/") {
  console.log(num1 / num2)
} else if (operator === "%") {
  console.log(num1 % num2)
}