// Print Floyd's triangle.
const prompt = require('prompt-sync')()

let rows = Number(prompt('Input number of rows: '))
let num = 0

for (let i = 1; i <= rows; i++){
  let pattern = ""

  for (let j = 1; j <= i; j++){
    pattern += num + " "
    num++
  }
  console.log(pattern)
}