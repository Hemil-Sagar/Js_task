// Find LCM.

const prompt = require('prompt-sync')()

let num1 = Number(prompt('Input first Number: '))
let num2 = Number(prompt('Input seconde Number: '))

let max = Math.max(num1, num2)

while (true) {
  if (max % num1 === 0 && max % num2 === 0) {
    console.log("LCM = ", max)
    break
  }
  max++
}

