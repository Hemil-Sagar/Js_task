// Print inverted pyramid.

const prompt = require('prompt-sync')()

let rows = Number(prompt('Input number rows: '))

for (let i = 1; i <= rows; i++){
  let pattern = ""
  for (let j = 1; j <= i; j++){
    pattern += " "
  }
  for (let k = 1; k <= (2 * (rows - i) +1); k++){
    pattern +="*"
  }
  console.log(pattern)
}