// Print Pascal's triangle.

const prompt = require('prompt-sync')()

let rows = Number(prompt('Input Number of rows: '))

for (let i = 0; i < rows; i++){
  let num = 1
  let pattern = ""

  for (let j = 0; j < rows - i - 1; j++){
    pattern += " "
  }
  for (let j = 0; j <= i; j++){
    pattern += num + " "

    num = num * (i - j) / (j + 1)
  }
  console.log(pattern)
}