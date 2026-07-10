// Print the multiplication table.

const prompt = require('prompt-sync')()

let num = Number(prompt("Input a number: "))

for (let i = 1; i <= 10; i++){
  console.log(`${num} x ${i} = ${num * i}`)
}